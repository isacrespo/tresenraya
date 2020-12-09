function despliegaMenu() {
    document.getElementById('nombre-jugadores-inicio').style.display = "flex";
    document.getElementById('boton-empezar-partida-inicio').style.display = "flex";

    document.getElementById('boton-amigo').style.background = "var(--verde)";
    document.getElementById('boton-amigo').style.color = "white";
    document.getElementById('boton-amigo').style.border = "3px solid var(--rojo)";

    document.getElementById('boton-maquina').style.background = "white";
    document.getElementById('boton-maquina').style.color = "var(--verde)";
    document.getElementById('boton-maquina').style.border = "3px solid var(--verde)";
}

function verBotonEmpezar() {
    document.getElementById('boton-empezar-partida-inicio').style.display = "flex";
    document.getElementById('nombre-jugadores-inicio').style.display = "none";

    document.getElementById('boton-maquina').style.background = "var(--verde)";
    document.getElementById('boton-maquina').style.color = "white";
    document.getElementById('boton-maquina').style.border = "3px solid var(--rojo)";

    document.getElementById('boton-amigo').style.background = "white";
    document.getElementById('boton-amigo').style.color = "var(--verde)";
    document.getElementById('boton-amigo').style.border = "3px solid var(--verde)";

    document.cookie = 'nombrejugador1=' + 'Humano';
    document.cookie = 'nombrejugador2=' + 'Machine';
}

function empezarPartida() {
    // capturo los nombres de los jugadores
    var jugador1 = document.formularioJugadores.nombreJugador1.value;
    var jugador2 = document.formularioJugadores.nombreJugador2.value;

    if (jugador1 != "") {
        document.cookie = 'nombrejugador1=' + jugador1;
    }

    if (jugador2 != "") {
        document.cookie = 'nombrejugador2=' + jugador2;
    }
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('boton-amigo').addEventListener('click', function() {
        despliegaMenu();
    });
    document.getElementById('boton-maquina').addEventListener('click', function() {
        verBotonEmpezar();
    });
});