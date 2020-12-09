<?php require( 'init.php' ) ?>

<!-- Incluimos cabecera -->
<?php require 'templates/header.php'; ?>

<div class="contenedor">
<?php 
if (isset($_GET["jugador1"]) & isset($_GET["jugador2"]) & isset($_GET["tablero"])) {
    $arrayJugadores[0]['nombre']=$_GET["jugador1"];
    $arrayJugadores[1]['nombre']=$_GET["jugador2"];
    $tablero = substr($_GET["tablero"], 1); // le quito la primera coma
    $arrayTablero = explode(",", $tablero); // convierto el string en array

    //guardamos partida en la base de datos
    $app_db->volcarPartida($arrayJugadores[0]['nombre'], $arrayJugadores[1]['nombre'],$arrayTablero);
}
else {
    $jugadores= new Jugador(); 
    $arrayJugadores = $jugadores->crearJugador();
}
    $tablero = new Tablero();
    $arrayTablero = $tablero->crearArrayTablero();
    $tablero->imprimirTablero($arrayJugadores); 
?>
    
</div>
    <?php require 'templates/footer.php'; ?>

    </body>
</html>