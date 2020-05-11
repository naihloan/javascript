'use strict'

/*
Mostrar todos los números divisores de un número introducido en prompt
*/

var numero = parseInt(prompt("Mete un número", 1));

for(var i = 1; i <= numero; i++){

    if(numero%i == 0){
        console.log("Divisor: " + i); // 123
    }

}
