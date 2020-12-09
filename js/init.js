function funcionTresEnRaya(casilla, marcadaComo, nombreJugador1, nombreJugador2) {
    // Función utilizada por los jugadores para colocar su jugada
    var probabilidadesGanar = [
        [1, 2, 3],
        [1, 4, 7],
        [1, 5, 9],
        [2, 5, 8],
        [3, 5, 7],
        [3, 6, 9],
        [4, 5, 6],
        [7, 8, 9]
    ];

    var empate = empatePartida();
    var posicionMarcada = $(casilla).data('posicion');
    $.each(probabilidadesGanar, function(f, probabilidadesGanar_array) {
        if ($.inArray(posicionMarcada, probabilidadesGanar_array) > -1) {
            casillasMarcadas = 0;
            $.each(probabilidadesGanar_array, function(f, value) {
                var claseCasilla = $('#casilla' + value).attr('class');
                if (claseCasilla.indexOf(marcadaComo) > -1) {
                    casillasMarcadas = casillasMarcadas + 1;
                    if (casillasMarcadas == 3) {
                        partidaFinalizada = true;
                        if (marcadaComo == 'Xmarcada') {
                            $(".pantalla-dcha").css("opacity", 1);
                            $("#tituloganador").text("¡ENHORABUENA!");
                            $("#parrafoganador").text("Has ganado " + nombreJugador1);
                        } else {
                            $(".pantalla-dcha").css("opacity", 1);
                            $("#tituloganador").text("¡ENHORABUENA!");
                            $("#parrafoganador").text("Has ganado " + nombreJugador2);
                        }
                    }
                }
            });
        }
    });
    if (!partidaFinalizada && empate) {
        partidaFinalizada = true;
        $(".pantalla-dcha").css("opacity", 1);
        $("#tituloganador").text("¡EMPATE!");
        $("#parrafoganador").text("No hay ningún ganador");
    }
    return partidaFinalizada;
}

var arrayTablero = { "casilla1": "-", "casilla2": "-", "casilla3": "-", "casilla4": "-", "casilla5": "-", "casilla6": "-", "casilla7": "-", "casilla8": "-", "casilla9": "-" };
var combinacionesGanadoras = new Array();
combinacionesGanadoras[0] = { 'casilla1': '', 'casilla2': '', 'casilla3': '' };
combinacionesGanadoras[1] = { 'casilla1': '', 'casilla4': '', 'casilla7': '' };
combinacionesGanadoras[2] = { 'casilla1': '', 'casilla5': '', 'casilla9': '' };
combinacionesGanadoras[3] = { 'casilla2': '', 'casilla5': '', 'casilla8': '' };
combinacionesGanadoras[4] = { 'casilla3': '', 'casilla5': '', 'casilla7': '' };
combinacionesGanadoras[5] = { 'casilla3': '', 'casilla6': '', 'casilla9': '' };
combinacionesGanadoras[6] = { 'casilla4': '', 'casilla5': '', 'casilla6': '' };
combinacionesGanadoras[7] = { 'casilla7': '', 'casilla8': '', 'casilla9': '' };

function casillaMarcadaFuncion(casilla) { //escribo en el array las casillas marcadas, me permitirá luego mandarlo a bbdd
    var posicionCasilla = casilla.attr("id");
    if (casilla.hasClass('Xmarcada')) {
        for (var clave in arrayTablero) {
            if (posicionCasilla == clave) {
                arrayTablero[posicionCasilla] = 'X';
            }
        }
    } else {
        for (var clave in arrayTablero) {
            if (posicionCasilla == clave) {
                arrayTablero[posicionCasilla] = 'O';
            }
        }
    }

    for (var clave in arrayTablero) {
        for (i = 0; i < 8; i++) {
            for (var nombre in combinacionesGanadoras[i]) {
                if (clave == nombre) {
                    combinacionesGanadoras[i][nombre] = arrayTablero[clave];
                }
            }
        }
    }
}

function buscoDosCasillasMarcadas(simbolo) {
    var contador;
    var posiciones = '';
    for (i = 0; i < 8; i++) {
        contador = 0;
        for (var nombre in combinacionesGanadoras[i]) {
            if (combinacionesGanadoras[i][nombre] == simbolo) {
                contador = contador + 1;
                if (contador == 2) {
                    posiciones = posiciones + '/' + i;
                }
            }
        }
    }
    return posiciones;
}

function primeraTiradaComputador() {
    var contador = 0;
    for (var clave in arrayTablero) {
        if (arrayTablero[clave] == 'O') {
            contador = contador + 1;
        }
    }
    return contador;
}

function eleccionComputadora(nombreJugador1, nombreJugador2) {
    // Función donde la IA de la máquina elige la mejor jugada
    var empate = empatePartida();
    if (!partidaFinalizada) {
        if (empate) {
            partidaFinalizada = true;
            $(".pantalla-dcha").css("opacity", 1);
            $("#tituloganador").text("¡EMPATE!");
            $("#parrafoganador").text("No hay ningún ganador");
        } else {
            // Comprobar si hay dos 'O' marcadas en la misma cG (array combinacionesganadoras[])
            posicion = buscoDosCasillasMarcadas('O');
            var posicionArray = posicion.split('/');
            posicionArray = posicionArray.filter(el => el !== '');
            var escribimos = false;
            var posicionEscribir = -1;

            if (posicionArray.length == 0) {} else if (posicionArray.length == 1) {
                // vemos si está ocupada la casilla restante de la cG
                for (var nombre in combinacionesGanadoras[posicionArray[0]]) {
                    if (combinacionesGanadoras[posicionArray[0]][nombre] == '-') {
                        escribimos = true;
                        posicionEscribir = nombre;
                    }
                }
            } else if (posicionArray.length > 1) {
                // cogemos las posiciones y para cada una de ellas vemos si están ocupadas
                for (i = 0; i < posicionArray.length; i++) {
                    for (var nombre in combinacionesGanadoras[posicionArray[i]]) {
                        if (combinacionesGanadoras[posicionArray[i]][nombre] == '-') {
                            escribimos = true;
                            posicionEscribir = nombre;
                        }
                    }
                }
            }

            if (escribimos) {
                casillaLibreAzar = $('#' + posicionEscribir);
            } else {
                // no hay dos 'O' en la misma cG -> busco dos 'X' en la misma cG
                posicionX = buscoDosCasillasMarcadas('X');
                var posicionXArray = posicionX.split('/');
                posicionXArray = posicionXArray.filter(el => el !== '');
                var escribimosX = false;
                var posicionEscribirX = -1;

                if (posicionXArray.length == 0) {} else if (posicionXArray.length == 1) {
                    for (var nombre in combinacionesGanadoras[posicionXArray[0]]) {
                        if (combinacionesGanadoras[posicionXArray[0]][nombre] == '-') {
                            escribimosX = true;
                            posicionEscribirX = nombre;
                        }
                    }
                } else if (posicionXArray.length > 1) {
                    for (i = 0; i < posicionXArray.length; i++) {
                        for (var nombre in combinacionesGanadoras[posicionXArray[i]]) {
                            if (combinacionesGanadoras[posicionXArray[i]][nombre] == '-') {
                                escribimosX = true;
                                posicionEscribirX = nombre;
                            }
                        }
                    }
                }

                if (escribimosX) {
                    casillaLibreAzar = $('#' + posicionEscribirX);
                } else {
                    // No hay dos 'X' seguidas en cG
                    // Comprobar cuántas 'O' hay en el tablero
                    // Si es la primera tirada o la segunda, intento colocar 'O' en casilla 5 y si está ocupada en esquina aleatoria
                    contadorTiradas = primeraTiradaComputador();

                    if (contadorTiradas == 0 || contadorTiradas == 1) {
                        var casillasEsquina = '';
                        if (arrayTablero['casilla5'] == '-') {
                            casillaLibreAzar = $('#casilla5');
                        } else {
                            if (arrayTablero['casilla1'] == '-') {
                                casillasEsquina = casillasEsquina + '/' + 'casilla1';
                            }
                            if (arrayTablero['casilla3'] == '-') {
                                casillasEsquina = casillasEsquina + '/' + 'casilla3';
                            }
                            if (arrayTablero['casilla7'] == '-') {
                                casillasEsquina = casillasEsquina + '/' + 'casilla7';
                            }
                            if (arrayTablero['casilla9'] == '-') {
                                casillasEsquina = casillasEsquina + '/' + 'casilla9';
                            }
                            var casillasEsquinaArray = casillasEsquina.split('/');
                            casillasEsquinaArray = casillasEsquinaArray.filter(String);
                            casillaLibreAzar = casillasEsquinaArray[Math.floor(Math.random() * casillasEsquinaArray.length)];
                            casillaLibreAzar = $('#' + casillaLibreAzar);
                        }
                    } else {
                        // más de 2 casillas con 'O' -> jugamos en aleatorio
                        var casillasLibres = $('.casilla:not(:checked');
                        casillaLibreAzar = casillasLibres[Math.floor(Math.random() * casillasLibres.length)];
                    }
                }
            }
            // una vez elegida la casilla para jugar, cambiamos su propiedad a checkeada y deshabilitada y añadimos las clases con los estilos css
            $(casillaLibreAzar).prop('checked', true).addClass('marcada').addClass('Omarcada').prop('disabled', true);
            $(casillaLibreAzar).parent().addClass('casillaOmarcada');
            // llamamos a la función para hacer efectiva la jugada
            funcionTresEnRaya(casillaLibreAzar, 'Omarcada', nombreJugador1, nombreJugador2);
            // guardamos la casilla seleccionada en los arrays
            casillaMarcadaFuncion($(casillaLibreAzar));
        }
    }
}

// MÁQUINA SIN IA - TOTALMENTE ALEATORIA
//
// function eleccionComputadora(nombreJugador1, nombreJugador2) {
//     $(".turno-jugador1").css("border-bottom", "none");
//     $(".turno-jugador2").css("border-bottom", "3px solid var(--rojo)");
//     var empate = empatePartida();
//     if (!partidaFinalizada) {
//         if (empate) {
//             partidaFinalizada = true;
//             $(".pantalla-dcha").css("opacity", 1);
//             $("#tituloganador").text("¡EMPATE!");
//             $("#parrafoganador").text("No hay ningún ganador");
//         } else {
//             var casillasLibres = $('.casilla:not(:checked'); 
//             casillaLibreAzar = casillasLibres[Math.floor(Math.random() * casillasLibres.length)]; 
//             $(casillaLibreAzar).prop('checked', true).addClass('marcada').addClass('Omarcada').prop('disabled', true); 
//             $(casillaLibreAzar).parent().addClass('casillaOmarcada'); 
//             funcionTresEnRaya(casillaLibreAzar, 'Omarcada', nombreJugador1, nombreJugador2);
//             casillaMarcadaFuncion($(casillaLibreAzar));
//         }
//     }
// }

function finalizarPartida(nombreJugador1, nombreJugador2) {
    // mando los datos de jugadores y arrayTablero a index.php -> allí capturo datos y guardo en bbdd
    var arrayTableroString = "";
    for (var clave in arrayTablero) {
        arrayTableroString = arrayTableroString + ',' + arrayTablero[clave];
    }
    location.href = "index.php?jugador1=" + nombreJugador1 + "&jugador2=" + nombreJugador2 + "&tablero=" + arrayTableroString;
}

function volverAjugar(nombreJugador1, nombreJugador2) {
    // mando los datos de jugadores y arrayTablero a partida.php -> allí capturo datos y guardo en bbdd
    var arrayTableroString = "";
    for (var clave in arrayTablero) {
        arrayTableroString = arrayTableroString + ',' + arrayTablero[clave];
    }
    location.href = "partida.php?jugador1=" + nombreJugador1 + "&jugador2=" + nombreJugador2 + "&tablero=" + arrayTableroString;
}

function empatePartida() {
    var empate = true;
    for (var clave in arrayTablero) {
        if (arrayTablero[clave] == '-') {
            empate = false;
            break;
        } else {
            empate = true;
        }
    }
    return empate;
}

$(document).ready(function() {
    partidaFinalizada = false;
    var casilla = $('.casilla');
    // cojo los nombres de los jugadores para saber si es una partida entre jugadores o contra computadora
    var nombreJugador1 = $('.turno-jugador1').attr('id');
    var nombreJugador2 = $('.turno-jugador2').attr('id');
    var turnoJugador = '';
    $(".turno-jugador1").css("border-bottom", "3px solid var(--rojo)");
    $(".turno-jugador2").css("border-bottom", "none");
    $(casilla).change(function() {
        if (!partidaFinalizada) {
            if (nombreJugador2 == 'Machine') { // Partida contra la computadora
                var claseCasillaMia = $(this).attr('class');
                if (claseCasillaMia.indexOf('Xmarcada') < 0) {
                    $(this).addClass('marcada').addClass('Xmarcada').prop('disabled', true);
                    $(this).parent().addClass('casillaXmarcada');
                    partidaFinalizada = funcionTresEnRaya(this, 'Xmarcada', nombreJugador1, nombreJugador2);
                    casillaMarcadaFuncion($(this));
                    eleccionComputadora(nombreJugador1, nombreJugador2);
                    $(".turno-jugador2").css("border-bottom", "3px solid var(--rojo)");
                    $(".turno-jugador1").css("border-bottom", "none");
                }
            } else { // partida entre jugadores
                if (turnoJugador == '') {
                    turnoJugador = 'X';
                }
                if (turnoJugador == 'X') {
                    $(".turno-jugador2").css("border-bottom", "3px solid var(--rojo)");
                    $(".turno-jugador1").css("border-bottom", "none");
                    var claseCasillaMia = $(this).attr('class');
                    if (claseCasillaMia.indexOf('Xmarcada') < 0) {
                        $(this).addClass('marcada').addClass('Xmarcada').prop('disabled', true);
                        $(this).parent().addClass('casillaXmarcada');
                        partidaFinalizada = funcionTresEnRaya(this, 'Xmarcada', nombreJugador1, nombreJugador2);
                        casillaMarcadaFuncion($(this));
                    }
                    turnoJugador = 'O';

                } else if (turnoJugador == 'O') {
                    $(".turno-jugador2").css("border-bottom", "none");
                    $(".turno-jugador1").css("border-bottom", "3px solid var(--rojo)");
                    var claseCasillaMia = $(this).attr('class');
                    if (claseCasillaMia.indexOf('Omarcada') < 0) {
                        $(this).addClass('marcada').addClass('Omarcada').prop('disabled', true);
                        $(this).parent().addClass('casillaOmarcada');
                        partidaFinalizada = funcionTresEnRaya(this, 'Omarcada', nombreJugador1, nombreJugador2);
                        casillaMarcadaFuncion($(this));
                    }
                    turnoJugador = 'X';
                }
            }
        }
        var empate = empatePartida();
        if (!partidaFinalizada && empate) {
            partidaFinalizada = true;
            $(".pantalla-dcha").css("opacity", 1);
            $("#tituloganador").text("¡EMPATE!");
            $("#parrafoganador").text("No hay ningún ganador");
        }
    });

    $('.boton-finalizar').click(function() {
        finalizarPartida(nombreJugador1, nombreJugador2);
    });
    $('.boton-volverAjugar').click(function() {
        volverAjugar(nombreJugador1, nombreJugador2);
    });

});