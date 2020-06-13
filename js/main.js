/*
    API Rick_and_Morty
*/

//creamos la variable  que pedira el numero por un prompt
var introNumero = Number(prompt("introduzca el numero de su personaje "));

//Crea las bases para poder acceder a la API
const API_URL = "https://rickandmortyapi.com/api/";
const PERSONAJES_URL = "character/:id";

//esto no entiendo que es lo que hace pero en la explicacion la ponemos y si no esta no me funciona
const OPCIONES = { CrossDomain: true };

// creamos al funcion para mostrar en pantalla la informacion del personaje y todos sus datos
const PERSONAJE = function (personaje){
    document.write(`Hola, mi nombre es  ${personaje.name}${"<br><br>"} mi especia es ${personaje.species}${"<br><br>"} y soy originario del planeta ${personaje.origin.name}${"<br><br>"}`);
}

const MOSTRAR_PERSONAJE = `${API_URL}${PERSONAJES_URL.replace(":id", introNumero)}`;

// para traer los datos del servidor.
$get(MOSTRAR_PERSONAJE, OPCIONES, PERSONAJE);


















// // esta funcion va a convertir en un Callback
// const PERSONAJE = function (personaje){
//     document.write(`Hola, yo soy ${personaje.name}${"<br><br>"}`);

// }

// function pedirPersonaje(id) {
//     const URL = `${API_URL}${PERSONAJES_URL.replace(":id", id)}`;
//     $.get(URL, OPCIONES, PERSONAJE);
// }




//Llamadas a la API     como podemos ver no los carga siempre en orden es ASINCRONISMO segun vea JS
//pedirPersonaje(1);










/*


//Crea las bases para poder acceder a la API
const API_URL = "https://swapi.dev/api/";
const PERSONAJES_URL = "people/:id";
const OPCIONES = { CrossDomain: true };

// Personajes de STAR WARS
//const LEIA_URL = `${API_URL}${PERSONAJES_URL.replace(":id", 4)}`;


// esta funcion va a convertir en un Callback
const PERSONAJE = function (personaje){
    document.write(`Hola, yo soy ${personaje.name}${"<br><br>"}`);

}

function pedirPersonaje(id) {
    const URL = `${API_URL}${PERSONAJES_URL.replace(":id", id)}`;
    $.get(URL, OPCIONES, PERSONAJE);
}


//Llamadas a la API     como podemos ver no los carga siempre en orden es ASINCRONISMO segun vea JS
pedirPersonaje(1);
pedirPersonaje(2);
pedirPersonaje(3);
pedirPersonaje(4);

*/





// for(i=1; i<50;i++) {
//     pedirPersonaje(i);
// }

