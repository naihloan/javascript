'use strict'

/*
Tabla de multipliicar de un número introducido en pantalla.
*/

var numero = parseInt(prompt("¿De qué número querés la tabla?", 1));

document.write("<h1>Tabla del " + numero + "</h1>");
for(var i = 1; i <= 10; i++){
    document.write(i + " x " + numero + " = " + (i*numero) + "<br/>");
}

// Todas las tablas de multiplicar
for(var c = 1; c <= 10; c++){
    document.write("<h1>Tabla del " + c + "</h1>");
    for(var i = 1; i <= 10; i++){
        document.write(i + " x " + c + " = " + (i*c) + "<br/>");
    }
}