# Stage 1: Build frontend
FROM node:20-alpine AS frontend-builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY resources ./resources
COPY public ./public
COPY vite.config.ts ./
COPY tsconfig.json ./
COPY components.json ./

ENV WAYFINDER_SKIP_GENERATE=true

RUN npm run build

# Stage 2: Laravel production (nginx + php-fpm + supervisor)
FROM php:8.2-fpm-alpine

# Install system dependencies
RUN apk add --no-cache \
    git \
    curl \
    libpng-dev \
    libzip-dev \
    zip \
    unzip \
    oniguruma-dev \
    icu-dev \
    bzip2-dev \
    autoconf \
    gcc \
    g++ \
    make \
    mysql-client \
    bash \
    nginx \
    supervisor \
    && pecl install redis \
    && docker-php-ext-enable redis \
    && docker-php-ext-install \
        pdo \
        pdo_mysql \
        zip \
        mbstring \
        exif \
        pcntl \
        bcmath \
        intl \
        opcache \
        bz2

# PHP production config
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

# OPcache production settings (128MB is plenty for most Laravel apps)
RUN echo "opcache.enable=1" >> "$PHP_INI_DIR/conf.d/opcache.ini" \
    && echo "opcache.memory_consumption=128" >> "$PHP_INI_DIR/conf.d/opcache.ini" \
    && echo "opcache.interned_strings_buffer=8" >> "$PHP_INI_DIR/conf.d/opcache.ini" \
    && echo "opcache.max_accelerated_files=10000" >> "$PHP_INI_DIR/conf.d/opcache.ini" \
    && echo "opcache.validate_timestamps=0" >> "$PHP_INI_DIR/conf.d/opcache.ini" \
    && echo "opcache.save_comments=1" >> "$PHP_INI_DIR/conf.d/opcache.ini"

# PHP-FPM tuning (keep low for VM — each child ~40-80MB)
RUN echo "pm = dynamic" >> /usr/local/etc/php-fpm.d/zz-docker.conf \
    && echo "pm.max_children = 8" >> /usr/local/etc/php-fpm.d/zz-docker.conf \
    && echo "pm.start_servers = 2" >> /usr/local/etc/php-fpm.d/zz-docker.conf \
    && echo "pm.min_spare_servers = 1" >> /usr/local/etc/php-fpm.d/zz-docker.conf \
    && echo "pm.max_spare_servers = 3" >> /usr/local/etc/php-fpm.d/zz-docker.conf \
    && echo "pm.max_requests = 500" >> /usr/local/etc/php-fpm.d/zz-docker.conf

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Install Laravel dependencies
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader --prefer-dist

# Copy app source
COPY . .

# Copy frontend build
COPY --from=frontend-builder /app/public/build ./public/build

# Copy nginx and supervisor configs
COPY docker/nginx.conf /etc/nginx/http.d/default.conf
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Create required directories & set permissions
RUN mkdir -p storage/framework/{sessions,views,cache/data} \
    && mkdir -p storage/logs \
    && mkdir -p bootstrap/cache \
    && mkdir -p /var/log/supervisor \
    && chmod -R 775 storage bootstrap/cache \
    && chown -R www-data:www-data storage bootstrap/cache

RUN composer dump-autoload --optimize

# Generate APP_KEY if missing
RUN if [ -f .env ]; then \
        if ! grep -q "^APP_KEY=" .env || grep -q "^APP_KEY=$" .env; then \
            php artisan key:generate --force; \
        fi; \
    else \
        cp .env.example .env 2>/dev/null || echo "APP_NAME=Laravel" > .env; \
        php artisan key:generate --force; \
    fi

# Cache config/routes/views for production
RUN php artisan config:clear && php artisan route:clear && php artisan view:clear

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 \
    CMD curl -f http://127.0.0.1/up || exit 1

# Entrypoint: wait for DB, migrate, then start supervisor
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

CMD ["/usr/local/bin/entrypoint.sh"]
