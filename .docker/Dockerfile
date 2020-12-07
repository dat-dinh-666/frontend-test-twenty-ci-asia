FROM php:7.2-fpm

# Install Composer

USER root

WORKDIR /var/www/html

RUN apt-get update

RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -

RUN apt-get install -y nodejs

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install pdo pdo_mysql

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN groupadd -g 1000 www || true
RUN useradd -u 1000 -ms /bin/bash -g www www || true

COPY --chown=www:www . .

USER www

RUN composer install --prefer-dist --optimize-autoloader && \
    composer clear-cache

RUN npm install

RUN npm run prod