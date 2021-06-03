FROM php:7.3-fpm
LABEL maintainer="diego.martinez@gasmobi.com"

ENV PACKAGES \
        wget \
        zip \
        unzip \
        openssl \
        libicu-dev \
        zlib1g-dev \
        curl \
        libzip-dev \
        libpq-dev \
        libpng-dev \
        software-properties-common \
        git \
        nano \
        vim \
        g++

# Install extra packages
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y $PACKAGES

# Install nodejs
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

# Cleanup
RUN apt-get autoremove -y
RUN rm -rf /var/lib/apt/lists/*

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install php-cs-fixer
RUN curl -L https://cs.symfony.com/download/php-cs-fixer-v2.phar -o php-cs-fixer
RUN chmod a+x php-cs-fixer
RUN mv php-cs-fixer /usr/local/bin/php-cs-fixer

# Run docker-php-ext-install for available extensions
RUN docker-php-ext-configure intl
RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql
RUN docker-php-ext-install pdo pdo_mysql pdo_pgsql intl zip bcmath

# Install xdebug
# https://www.jetbrains.com/help/phpstorm/configuring-xdebug.html#configuring-xdebug-docker
RUN pecl install xdebug \
    && docker-php-ext-enable xdebug \
    && echo "xdebug.mode = debug" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.start_with_request=yes" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
# host.docker.internal not works on linux. Set ip local.
    && echo "xdebug.client_host = host.docker.internal" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

# Patch for change remote PHP-FPM port to 9001
#RUN sed -i -e 's/9000/9001/g' /usr/local/etc/php-fpm.d/zz-docker.conf

# xdebug
EXPOSE 9000
# php-fpm
EXPOSE 9003

# php.ini
ADD php.ini /usr/local/etc/php

RUN usermod -u 1000 www-data
RUN chown www-data:1000 -R /var/www

USER www-data

WORKDIR /var/www

CMD php-fpm -F