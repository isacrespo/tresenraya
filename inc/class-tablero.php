<?php

class Tablero {

    public function crearArrayTablero () {
        $tablero = array (
                    'casilla1'=> '','casilla2'=> '','casilla3'=> '','casilla4'=> '','casilla5'=> '','casilla6'=> '',
                    'casilla7'=> '','casilla8'=> '','casilla9'=> '',
                );
        return $tablero;
    }

    public function vaciarArrayTablero ($tablero) {
        $tablerovacio = $tablero;
        for($i=0; $i<9; $i++) {
	        $tablerovacio[$i]='';
        }
        return $tablerovacio;
    }

    public function imprimirTablero($arrayJugadores) {
        ?>
        <div class="contenedor-partida">
            <div class="pantalla-izda">
                <div class="turno">    
                    <p>Es el turno de:</p>
                    <div class="nombre-jugadores">
                        <h3 class="turno-jugador1" id="<?php echo($arrayJugadores[0]['nombre']);?>">
                            <?php echo($arrayJugadores[0]['nombre']);?>
                        </h3>
                        <h3 class="turno-jugador2" id="<?php echo($arrayJugadores[1]['nombre']);?>">
                            <?php echo($arrayJugadores[1]['nombre']);?>
                        </h3>
                    </div>
                </div>
                <div class="botones-partida">
                    <button class="boton-finalizar" id="boton-finalizar">Finalizar Partida</button>
                </div>
            </div>
            <div class="tablero">
                <div class="container-casilla">
                    <input type="checkbox" class="casilla" data-posicion="1" name="tresraya" id="casilla1"/>
                </div>
                <div class="container-casilla">
                    <input type="checkbox" class="casilla" data-posicion="2" name="tresraya" id="casilla2"/>
                </div>
                <div class="container-casilla">
                    <input type="checkbox" class="casilla" data-posicion="3" name="tresraya" id="casilla3"/>
                </div>
                <div class="container-casilla">
                    <input type="checkbox" class="casilla" data-posicion="4" name="tresraya" id="casilla4"/>
                </div>
                <div class="container-casilla">
                    <input type="checkbox" class="casilla" data-posicion="5" name="tresraya" id="casilla5"/>
                </div>
                <div class="container-casilla">
                    <input type="checkbox" class="casilla" data-posicion="6" name="tresraya" id="casilla6"/>
                </div>
                <div class="container-casilla">
                    <input type="checkbox" class="casilla" data-posicion="7" name="tresraya" id="casilla7"/>
                </div>
                <div class="container-casilla">
                    <input type="checkbox" class="casilla" data-posicion="8" name="tresraya" id="casilla8"/>
                </div>
                <div class="container-casilla">
                    <input type="checkbox" class="casilla" data-posicion="9" name="tresraya" id="casilla9"/>
                </div>
            </div>
            
            
            <div class="pantalla-dcha">
                <div class="mensaje-ganador">
                    <h2 id="tituloganador"></h2>
                    <p id="parrafoganador"></p>
                </div>
                <div class="botones-partida">
                    <button class="boton-volverAjugar" id="boton-volverAjugar">Volver a Jugar</button>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="js/init.js"></script>
        <?php
    }
}