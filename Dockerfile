FROM ubuntu:14.04
MAINTAINER Andrii Maglovanyi <andrii.maglovanyi@gmail.com>

# make sure all packages are up to date
RUN apt-get update && apt-get upgrade -y

# Install some packages we need
RUN apt-get -y install apache2
RUN apt-get install -y php5 php5-cli libapache2-mod-php5 php5-mysql php5-gd php-pear php-apc php5-curl
RUN apt-get -y install mysql-server php5-mysql

# Supplimentary programs. curl and lynx-cur are for debugging the container.
RUN apt-get -y install curl lynx-cur

# Setup Composer
# RUN curl -sS https://getcomposer.org/installer | php && \
#  mv composer.phar /usr/local/bin/composer

# Enable apache mods.
RUN a2enmod php5
RUN a2enmod rewrite

# Manually set up the apache environment variables
ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2
ENV APACHE_LOCK_DIR /var/lock/apache2
ENV APACHE_PID_FILE /var/run/apache2.pid

# Copy site into place.
ADD www /var/www/site

# Update the default apache site with the config we created.
ADD apache-config.conf /etc/apache2/sites-enabled/000-default.conf

# By default, simply start apache.
CMD /usr/sbin/apache2ctl -D FOREGROUND
