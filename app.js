
const texto1 = document.getElementById("texto1");
const texto2 = document.getElementById("texto2");
const texto3 = document.getElementById("texto3");
const texto4 = document.getElementById("texto4");
const texto5 = document.getElementById("texto5");
const img = document.getElementById("xd");

function mostrarPersonales (){
    texto1.innerHTML="Christopher Alejandro Ramos"
    texto2.innerHTML="Edad: 19 años"
    texto3.innerHTML="Sexo: Masculino"
    texto4.innerHTML="Carné No. 9989-21-2587"
    texto5.innerHTML=" "
    img.src="man.gif"
}

function mostrarColegio (){
    texto1.innerHTML="Instituto Nacional de Bachillerato en Computación"
    texto2.innerHTML="Se encuentra ubicado en la Zona 1"
    texto3.innerHTML="No cuenta con una red social oficial"
    texto4.innerHTML="Horario: 1PM -5:45PM"
    texto5.innerHTML=" "
    img.src="escuela.gif"
}

function mostrarUniversidad (){
    texto1.innerHTML="Introducción a los sistemas de Computo:  100 pts"
    texto2.innerHTML="Lógica de Sistemas:                      100 pts"
    texto3.innerHTML="Desarrollo Humano y Profesional:         100 pts"
    texto4.innerHTML="Contabilidad I:                          100 pts"
    texto5.innerHTML="Metodología de la Investigación:         100 pts"
    img.src="book.gif"
}

function mostrarHobbie (){
    texto1.innerHTML="Tocar Piano"
    texto2.innerHTML="Jugar Videojuegos"
    texto3.innerHTML="Escuchar y hacer música"
    texto4.innerHTML="Hago ejercicio"
    texto5.innerHTML=" "
    img.src="pc.gif"
}
