<?php
// Configura la salida de errores por pantalla
// error_reporting(E_ALL);
// ini_set('display_errors',1);

define('SITE_URL','http://localhost:88/tres-en-raya');
define('SITE_LANG',['es','spa','es_ES']);

setcookie("nombrejugador1", "", time()-3600);
setcookie("nombrejugador2", "", time()-3600);

// Conexión bbdd
define('DB_HOST', 'localhost');
define('DB_USER','root');
define('DB_PASSWORD','root');
define('DB_DATABASE','tresenraya');
define('DB_PORT','3306');