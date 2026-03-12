#!/bin/sh
set -e

echo "Waiting for MySQL at $DB_HOST:$DB_PORT..."
RETRIES=0
MAX_RETRIES=30
until mysqladmin ping -h"$DB_HOST" -P"$DB_PORT" --silent 2>/dev/null; do
  RETRIES=$((RETRIES + 1))
  if [ "$RETRIES" -ge "$MAX_RETRIES" ]; then
    echo "ERROR: MySQL not reachable after $MAX_RETRIES attempts. Exiting."
    exit 1
  fi
  echo "MySQL is unavailable - sleeping 2s (attempt $RETRIES/$MAX_RETRIES)"
  sleep 2
done

echo "MySQL is up! Caching config..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "Running migrations..."
php artisan migrate --force

# Only seed if the flag file doesn't exist (first deploy only)
SEED_FLAG="/var/www/html/storage/.seeded"
if [ ! -f "$SEED_FLAG" ]; then
  echo "First run detected — seeding database..."
  php artisan db:seed --force
  touch "$SEED_FLAG"
else
  echo "Skipping seed (already seeded)."
fi

# Wayfinder is optional, don't fail on it
php artisan wayfinder:generate --with-form --quiet 2>/dev/null || true

echo "Starting supervisord..."
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
