  
    <div class="botones-eleccion-inicio">
        <button class="boton-amigo" id="boton-amigo">Partida contra un amigo</button>
        <button class="boton-maquina" id="boton-maquina">Partida contra la máquina</button>
    </div>
    
    <form name="formularioJugadores" action="partida.php" method="post">
        <div class="contenedor-formulario" id="contenedor-formulario">
            <div class="nombre-jugadores-inicio" id="nombre-jugadores-inicio">
                <div class="jugador">
                    <span>Nombre del primer jugador</span>
                    <input type="text" name="nombreJugador1" value="" id="nombreJugador1" placeholder="Nombre">
                </div>
                <span class="vs">vs</span>
                <div class="jugador">
                    <span>Nombre del segundo jugador</span>
                    <input type="text" name="nombreJugador2" value="" id="nombreJugador2" placeholder="Nombre">
                </div>
            </div>

            <div class="boton-empezar-partida-inicio" id="boton-empezar-partida-inicio">
                <input type="submit" name="empezar-partida" class="empezar-partida" value="Empezar la partida" onclick="empezarPartida()">
            </div>
        </div>
    </form>
</div>
