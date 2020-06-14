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
$.get(MOSTRAR_PERSONAJE, OPCIONES, PERSONAJE);