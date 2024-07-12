//Declaración de variables para el nombre del jugador
const nombre =localStorage.getItem("nombre");
const htmlnombre = document.getElementById("nombre");
const nombremedalla = document.getElementById("nombre-jugador");

//Declaración de variables para el puntaje obtenido
const puntajefinal = localStorage.getItem("puntaje");
const htmlpuntaje = document.getElementById("puntaje-final");
const htmlpuntaje1 = document.getElementById("puntos");

//Declaración de variables para el total de aciertos y fallos obtenidos.
const totalacertadas = localStorage.getItem("totalacertadas");
const totalfalladas = localStorage.getItem("totalnoacertadas");
const htmlacertadas = document.getElementById("total-acertadas");
const htmlfalladas = document.getElementById("total-no-acertadas");

//Representación del nombre en barra y medalla en pantalla.
htmlnombre.innerHTML = nombre;
nombremedalla.innerHTML = nombre;

//Representación del total de aciertos, fallos y el puntaje final mostrado en pantalla.
htmlpuntaje.innerHTML = puntajefinal;
htmlpuntaje1.innerHTML = puntajefinal;
htmlacertadas.innerHTML = totalacertadas;
htmlfalladas.innerHTML = totalfalladas;

//Creación de variable y condicional para cambiar imagen según el puntaje obtenido.
const imagenfinal = document.getElementById("imgpf");
if (totalacertadas == 30){
    imagenfinal.src = "img/victory.gif";
    imagenfinal.style.zIndex = "1";
    htmlfalladas.innerHTML = 0;
    
}else if (totalacertadas > 15){
    imagenfinal.src = "img/happy.png";
}else if (totalacertadas == 15){
    imagenfinal.src = "img/neutral.png";
}else{
    imagenfinal.src = "img/sad.png";
}

//Función para dirigir al usuario al inicio del juego.
function reiniciarJuego(){
    location.href = "index.html";
}