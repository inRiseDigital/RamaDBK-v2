FROM node:20-alpine AS frontend-builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY resources ./resources
COPY public ./public
COPY vite.config.ts ./
COPY tsconfig.json ./
COPY components.json ./

# Debug: List the Footer directory to verify files are copied
RUN ls -la resources/js/components/Footer/ || echo "Footer directory not found"

# Disable wayfinder plugin during Docker build since PHP is not available
ENV WAYFINDER_SKIP_GENERATE=true

RUN npm run build

FROM php:8.2-cli-alpine

RUN apk add --no-cache \
    git \
    curl \
    libpng-dev \
    libzip-dev \
    zip \
    unzip \
    oniguruma-dev \
    icu-dev \
    sqlite \
    sqlite-dev \
    bzip2-dev \
    autoconf \
    gcc \
    g++ \
    make \
    && pecl install redis \
    && docker-php-ext-enable redis \
    && docker-php-ext-install \
    pdo \
    pdo_sqlite \
    zip \
    mbstring \
    exif \
    pcntl \
    bcmath \
    intl \
    opcache \
    bz2

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

COPY composer.json composer.lock ./

RUN composer install --no-dev --no-scripts --no-autoloader --prefer-dist --optimize-autoloader

COPY . .

COPY --from=frontend-builder /app/public/build ./public/build

# Create required directories before composer dump-autoload
RUN mkdir -p storage/framework/{sessions,views,cache} \
    && mkdir -p storage/logs \
    && mkdir -p bootstrap/cache \
    && mkdir -p database \
    && touch database/database.sqlite \
    && chmod -R 777 storage bootstrap/cache database

RUN composer dump-autoload --optimize

# Generate APP_KEY if .env doesn't have it
RUN if [ -f .env ]; then \
        if ! grep -q "^APP_KEY=" .env || grep -q "^APP_KEY=$" .env; then \
            php artisan key:generate --force; \
        fi; \
    else \
        cp .env.example .env 2>/dev/null || echo "APP_NAME=Laravel" > .env; \
        php artisan key:generate --force; \
    fi

EXPOSE 8000

CMD php artisan migrate --force && \
    php artisan db:seed --force && \
    php artisan wayfinder:generate --with-form --quiet && \
    php artisan queue:work --daemon --tries=3 & \
    php artisan schedule:work & \
    php artisan serve --host=0.0.0.0 --port=8000
