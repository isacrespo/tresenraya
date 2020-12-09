<?php

class Db {
  private $app_db=false;

  public function __construct($host, $user, $password, $database, $port) {
    $this->app_db= mysqli_connect (DB_HOST,DB_USER,DB_PASSWORD,DB_DATABASE,DB_PORT);
    if ($this->app_db=== false) {
    	die('Error al conectar con la base de datos.');
    }
  }

  public function query($query) {
    $result = mysqli_query($this->app_db,$query);
    if (! $result) {
      die($this->get_last_error());
    }
    return $result;
  }

  public function get_last_error() {
    return mysqli_error($this->app_db);
  }

  public function fetch_all($result) {
    return mysqli_fetch_all($result,MYSQLI_ASSOC);
  }

  public function fetch_assoc($result) {
    return mysqli_fetch_assoc($result);
  }

  public function real_escape_string($string) {
    return mysqli_real_escape_string($this->app_db,$string);
  }

  public function volcarPartida($jugador1,$jugador2,$arrayTablero) {
    global $app_db;
    
    $query= "INSERT INTO partida (nombreJugador1,simboloJugador1,nombreJugador2,simboloJugador2,casilla1,casilla2,casilla3,casilla4,casilla5,casilla6,casilla7,casilla8,casilla9)
    VALUES ('$jugador1','X','$jugador2','O','$arrayTablero[0]','$arrayTablero[1]','$arrayTablero[2]','$arrayTablero[3]','$arrayTablero[4]','$arrayTablero[5]','$arrayTablero[6]','$arrayTablero[7]','$arrayTablero[8]')";
    $result = $app_db->query ($query);
  }
}
