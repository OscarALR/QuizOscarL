//Creación de variables con su respectivo valor obtenido de otros archivos (JSON o IDs de HTML).
const preguntas = JSON.parse(localStorage.getItem("preguntasQuiz"));
const pregunta = document.getElementById("txt-pregunta");
const numpregunta = document.getElementById("num-pregunta");
const siguiente = document.getElementById("siguiente");
const botones = document.querySelectorAll("#a, #b, #c, #d");
const imagenPregunta = document.getElementById("imgp");

// Nombre de jugador(a)
const nombre =localStorage.getItem("nombre");
const htmlnombre = document.getElementById("nombre");
const puntos = document.getElementById("puntos")
htmlnombre.innerHTML = nombre;

//Preguntas del juego: Creación de variables y funciones para los respectivos ids y botones
let puntaje = 0;
let totalcorrectas = 0;
let totalfalladas = 0;
var preguntaActual = 0;

const opcionA = document.getElementById("a");
const opcionB = document.getElementById("b");
const opcionC = document.getElementById("c");
const opcionD = document.getElementById("d");

function cargarPregunta(){
    numpregunta.textContent = String(preguntaActual+1).padStart(2,"0");
    pregunta.textContent = preguntas[preguntaActual].titulo;
    opcionA.innerHTML = preguntas[preguntaActual].opcionA;
    opcionB.innerHTML = preguntas[preguntaActual].opcionB;
    opcionC.innerHTML = preguntas[preguntaActual].opcionC;
    opcionD.innerHTML = preguntas[preguntaActual].opcionD;
    opcionA.value = "a";
    opcionB.value = "b";
    opcionC.value = "c";
    opcionD.value = "d";
    
    imagenPregunta.src = preguntas[preguntaActual].imagen;
}

function rpCorrecta(opcionSeleccionada){
    let opcionUsuarioseleccionada = document.getElementById(opcionSeleccionada);
    if (opcionSeleccionada == preguntas[preguntaActual].correcta){
        puntaje +=100;
        puntos.innerHTML = puntaje;
        totalcorrectas++;
        localStorage.setItem("puntaje", puntaje);
        localStorage.setItem("totalacertadas",totalcorrectas);
        opcionUsuarioseleccionada.style.backgroundColor='#20DE6E';
        opcionUsuarioseleccionada.style.color='#000000';
    }else{
        totalfalladas++;
        localStorage.setItem("totalnoacertadas",totalfalladas);
        opcionUsuarioseleccionada.style.backgroundColor='#fd2424';
        opcionUsuarioseleccionada.style.color='#000000';
    }

    botones.forEach(boton =>{
        boton.disabled=true;
    });

    siguiente.disabled = false;
}

function siguientePregunta(){
    preguntaActual++;
    if (preguntaActual < preguntas.length){
        cargarPregunta();
        
        botones.forEach(boton =>{
            boton.disabled=false;
            boton.style.backgroundColor="";
            boton.style.color="";
        });

        siguiente.disabled = true;
    }else{
        alert("¡Haz completado el juego!");
        location.href = "final.html";
    }
}

window.onload = function(){
    cargarPregunta();
    siguiente.disabled = true;
}






