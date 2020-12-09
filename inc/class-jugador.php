<?php

class Jugador {

    public function crearJugador() {
       if (!empty($_COOKIE["nombrejugador1"])) {
             if($_COOKIE["nombrejugador1"]!="") {
                $nombreJugador1=htmlspecialchars($_COOKIE["nombrejugador1"]);
            }
        }
        else {
            $nombreJugador1= "Jugador 1";
        }

        if (!empty($_COOKIE["nombrejugador2"])) {
             if($_COOKIE["nombrejugador2"]!="") {
                $nombreJugador2=htmlspecialchars($_COOKIE["nombrejugador2"]);
            } 
        }
        else {
            $nombreJugador2= "Jugador 2";
        }

        $jugadores = array (0=> array('nombre'=>$nombreJugador1, 'simbolo'=>'X'), 1=>array('nombre'=>$nombreJugador2, 'simbolo'=>'O'));
        return $jugadores;
    }

}
