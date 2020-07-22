'use strict';


let colores = ["red", "blue", "green", "yellow"];   // the color choices
let numeroIndex = 0;  // index of the current color
    
document.querySelector('#boton').addEventListener( 'click', cambiarColor);

function cambiarColor(){
    document.querySelector("#contenedor").style.backgroundColor = colores[numeroIndex];  // set the color of body to the current color
    numeroIndex = (numeroIndex + 1) % colores.length;             // increment index to point to the next color (if it goes beyond the length of the coices array get it back to 0 using the modulo %)
    console.log('HOLA');
}