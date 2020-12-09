<?php require( 'init.php' ) ?>

<?php 
if (isset($_GET["jugador1"]) & isset($_GET["jugador2"]) & isset($_GET["tablero"])) {  
    $jugador1=$_GET["jugador1"];
    $jugador2=$_GET["jugador2"];
    $tablero = substr($_GET["tablero"], 1); // le quito la primera coma
    $arrayTablero = explode(",", $tablero); // convierto el string en array

    $guardar=true; // para no guardar un tablero vacío
    foreach ($arrayTablero as &$valor) {
        if($valor === '-') {
            $guardar=false;
        }
        else {
            $guardar=true;
        }
    }

    if($guardar==true) {
        //guardamos partida en la base de datos
        $app_db->volcarPartida($jugador1, $jugador2,$arrayTablero);
    }
}
?>

<!-- Incluimos cabecera -->
<?php require 'templates/header.php'; ?>

<!-- Contenedor web -->
    <div class="contenedor">
        <?php require 'inc/inicio.php'; ?>
    </div>
    
    <?php require 'templates/footer.php'; ?>
    </body>
</html>