<?php

if (!file_exists(__DIR__ . '/config.php')) {
  die('ERROR: No existe config.php');
}

session_start();
require('config.php');


require('inc/class-db.php');
require('inc/class-jugador.php');
require('inc/class-tablero.php');
?> <script src="js/javascript.js"></script>
<?php

// Iniciamos la base de datos
$app_db = new Db(DB_HOST,DB_USER,DB_PASSWORD,DB_DATABASE,DB_PORT);
