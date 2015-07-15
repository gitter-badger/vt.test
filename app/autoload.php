<?php

// Define path to application directory
defined('APPLICATION_PATH')
    || define('APPLICATION_PATH', realpath(dirname(__FILE__) . '/../src'));

defined('LIBRARY_PATH')
    || define('LIBRARY_PATH', realpath(APPLICATION_PATH . '/../../library'));

use Doctrine\Common\Annotations\AnnotationRegistry;
use Composer\Autoload\ClassLoader;

/**
 * @var ClassLoader $loader
 */

$loader = require LIBRARY_PATH . '/Symfony/vendor/autoload.php';

AnnotationRegistry::registerLoader(array($loader, 'loadClass'));

return $loader;
