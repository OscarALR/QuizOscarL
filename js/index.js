const preguntas = [
    {
        id:1,
        titulo:"¿Cuál es el planeta más grande de nuestro sistema solar?",
        opcionA:"Tierra",
        opcionB:"Marte",
        opcionC:"Jupiter",
        opcionD:"Saturno",
        correcta:"c",
        imagen:"img/general.png"
    },
    {
        id:2,
        titulo:"¿Quién escribió 'Cien años de soledad'?",
        opcionA:"Gabriel García Márquez",
        opcionB:"Julio Cortázar",
        opcionC:"Isabel Allende",
        opcionD:"Mario Vargas Llosa",
        correcta:"a",
        imagen:"img/general.png"
    },
    {
        id:3,
        titulo:"¿Cuál es el río más largo del mundo?",
        opcionA:"Amazonas",
        opcionB:"Nilo",
        opcionC:"Paraná",
        opcionD:"Misisipi",
        correcta:"a",
        imagen:"img/general.png"
    },
    {
        id:4,
        titulo:"¿Cuál es el componente principal del aire que respiramos?",
        opcionA:"Nitrogeno",
        opcionB:"Oxígeno",
        opcionC:"Dióxido de carbono",
        opcionD:"Hidrógeno",
        correcta:"a",
        imagen:"img/general.png"
    },
    {
        id:5,
        titulo:"¿En qué año comenzó la Primera Guerra Mundial?",
        opcionA:"1905",
        opcionB:"1914",
        opcionC:"1923",
        opcionD:"1939",
        correcta:"b",
        imagen:"img/general.png"
    },
    {
        id: 6,
        titulo: "¿Quién es conocido como el pimer Rey del Pop?",
        opcionA: "Elvis Presley",
        opcionB: "Michael Jackson",
        opcionC: "Madonna",
        opcionD: "Prince",
        correcta: "b",
        imagen:"img/musica.png"
    },
    {
        id: 7,
        titulo: "¿Cuál es el género musical más popular en todo el mundo?",
        opcionA: "Rock",
        opcionB: "Electrónica",
        opcionC: "Rap",
        opcionD: "Pop",
        correcta: "d",
        imagen:"img/musica.png"
    },
    {
        id: 8,
        titulo: "¿En qué década surgió el movimiento punk?",
        opcionA: "1960",
        opcionB: "1970",
        opcionC: "1980",
        opcionD: "1990",
        correcta: "b",
        imagen:"img/musica.png"
    },
    {
        id: 9,
        titulo: "¿Quién es el famoso guitarrista de la banda Queen?",
        opcionA: "John Lennon",
        opcionB: "Jimi Hendrix",
        opcionC: "Brian May",
        opcionD: "Eric Clapton",
        correcta: "c",
        imagen:"img/musica.png"
    },
    {
        id: 10,
        titulo: "¿Cuál es el instrumento principal en una orquesta sinfónica?",
        opcionA: "Guitarra",
        opcionB: "Piano",
        opcionC: "Violín",
        opcionD: "Flauta",
        correcta: "c",
        imagen:"img/musica.png"
    },
    {
        id: 11,
        titulo: "¿En qué deporte se utiliza la famosa pelota 'Wilson'?",
        opcionA: "Fútbol",
        opcionB: "Baloncesto",
        opcionC: "Golf",
        opcionD: "Tenis",
        correcta: "b",
        imagen:"img/deportes.png"
    },
    {
        id: 12,
        titulo: "¿Cuál es el país de origen de la artista del tenis Serena Williams?",
        opcionA: "Estados Unidos",
        opcionB: "Francia",
        opcionC: "España",
        opcionD: "Australia",
        correcta: "a",
        imagen:"img/deportes.png"
    },
    {
        id: 13,
        titulo: "¿Cuántos jugadores conforman un equipo de fútbol estándar en el campo durante un partido?",
        opcionA: "8",
        opcionB: "10",
        opcionC: "11",
        opcionD: "12",
        correcta: "c",
        imagen:"img/deportes.png"
    },
    {
        id: 14,
        titulo: "¿Quién es considerado el mejor nadador de todos los tiempos?",
        opcionA: "Michael Phelps",
        opcionB: "Usain Bolt",
        opcionC: "Simone Biles",
        opcionD: "Roger Federer",
        correcta: "a",
        imagen:"img/deportes.png"
    },
    {
        id: 15,
        titulo: "¿En qué deporte se compite por la Copa Davis?",
        opcionA: "Fútbol",
        opcionB: "Tenis",
        opcionC: "Golf",
        opcionD: "Balonmano",
        correcta: "b",
        imagen:"img/deportes.png"
    },
    {
        id: 16,
        titulo: "¿Cuál de los siguientes lenguajes de programación es de tipado fuerte?",
        opcionA: "JavaScript",
        opcionB: "Python",
        opcionC: "C++",
        opcionD: "Java",
        correcta: "c",
        imagen:"img/programacion.png"
    },
    {
        id: 17,
        titulo: "¿Qué significa HTML en el contexto de desarrollo web?",
        opcionA: "HyperText Markup Language",
        opcionB: "High-Level Text Management Language",
        opcionC: "HyperTransfer Markup Language",
        opcionD: "High-Level Transfer Management Language",
        correcta: "a",
        imagen:"img/programacion.png"
    },
    {
        id: 18,
        titulo: "¿Cuál es el propósito principal de CSS en desarrollo web?",
        opcionA: "Manejar la lógica del lado del servidor",
        opcionB: "Estilizar la presentación de las páginas web",
        opcionC: "Gestionar la interactividad del usuario",
        opcionD: "Definir las rutas de la aplicación",
        correcta: "b",
        imagen:"img/programacion.png"
    },
    {
        id: 19,
        titulo: "¿Qué es un bucle 'for' en la programación?",
        opcionA: "Un tipo de dato",
        opcionB: "Una estructura condicional",
        opcionC: "Una función",
        opcionD: "Una estructura de control de flujo que se repite",
        correcta: "d",
        imagen:"img/programacion.png"
    },
    {
        id: 20,
        titulo: "¿Cuál de los siguientes no es un sistema de gestión de bases de datos?",
        opcionA: "MySQL",
        opcionB: "MongoDB",
        opcionC: "Express",
        opcionD: "SQLite",
        correcta: "c",
        imagen:"img/programacion.png"
    },
    {
        id: 21,
        titulo: "¿Cuál es el fontanero más famoso en el mundo de los videojuegos?",
        opcionA: "Sonic",
        opcionB: "Link",
        opcionC: "Mario",
        opcionD: "Master Chief",
        correcta: "c",
        imagen:"img/juegos.png"
    },
    {
        id: 22,
        titulo: "¿En qué año se lanzó el juego 'The Legend of Zelda: Ocarina of Time'?",
        opcionA: "1996",
        opcionB: "1998",
        opcionC: "2000",
        opcionD: "2002",
        correcta: "b",
        imagen:"img/juegos.png"
    },
    {
        id: 23,
        titulo: "¿Cuál es la empresa creadora de la consola PlayStation?",
        opcionA: "Microsoft",
        opcionB: "Sony",
        opcionC: "Nintendo",
        opcionD: "Sega",
        correcta: "b",
        imagen:"img/juegos.png"
    },
    {
        id: 24,
        titulo: "¿Quién es el protagonista del juego 'The Witcher 3: Wild Hunt'?",
        opcionA: "Geralt of Rivia",
        opcionB: "Ezio Auditore",
        opcionC: "Aloy",
        opcionD: "Joel",
        correcta: "a",
        imagen:"img/juegos.png"
    },
    {
        id: 25,
        titulo: "¿Cuál es el juego más vendido de todos los tiempos?",
        opcionA: "Minecraft",
        opcionB: "Tetris",
        opcionC: "Grand Theft Auto V",
        opcionD: "Super Mario Bros.",
        correcta: "b",
        imagen:"img/juegos.png"
    },
    {
        id: 26,
        titulo: "¿Cuál es el nombre del león protagonista en 'El Rey León'?",
        opcionA: "Simba",
        opcionB: "Mufasa",
        opcionC: "Scar",
        opcionD: "Timón",
        correcta: "a",
        imagen:"img/peliculas.png"
    },
    {
        id: 27,
        titulo: "¿Qué juguete es el protagonista de la película 'Toy Story'?",
        opcionA: "Buzz Lightyear",
        opcionB: "Woody",
        opcionC: "Slinky",
        opcionD: "Mr. Potato Head",
        correcta: "b",
        imagen:"img/peliculas.png"
    },
    {
        id: 28,
        titulo: "¿Cuál es el título de la película de Disney en la que una sirena sueña con vivir en la tierra?",
        opcionA: "Cenicienta",
        opcionB: "La Sirenita",
        opcionC: "Blancanieves",
        opcionD: "Mulan",
        correcta: "b",
        imagen:"img/peliculas.png"
    },
    {
        id: 29,
        titulo: "¿Quién es el monstruo protagonista en 'Monsters, Inc.'?",
        opcionA: "Sulley",
        opcionB: "Mike Wazowski",
        opcionC: "Randall",
        opcionD: "Boo",
        correcta: "a",
        imagen:"img/peliculas.png"
    },
    {
        id: 30,
        titulo: "¿Cuál es el título de la película de Pixar sobre emociones que viven en la mente de una niña?",
        opcionA: "Intensamente",
        opcionB: "Buscando a Nemo",
        opcionC: "Up",
        opcionD: "Ratatouille",
        correcta: "a",
        imagen:"img/peliculas.png"
    }
];
localStorage.clear();

function comenzar(){
    var nombre = document.getElementById("nombre").value;
    if (nombre != ""){
        localStorage.setItem("preguntasQuiz",JSON.stringify(preguntas));
        localStorage.setItem("nombre",nombre);
        location.href = "juego.html";
    } else {
        alert("Ingrese un nombre");
    }
}