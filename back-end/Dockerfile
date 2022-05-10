FROM php:8.0-fpm-alpine

RUN docker-php-ext-install pdo pdo_mysql 

# Install Postgre PDO
RUN set -ex \
    && apk --no-cache add \
    postgresql-dev

RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_pgsql pgsql

RUN docker-php-ext-enable pdo_pgsql && docker-php-ext-enable pgsql