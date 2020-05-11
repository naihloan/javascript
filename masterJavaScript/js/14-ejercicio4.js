'use strict'

/*
Mostrar todos los números impares que hay entre dos números introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce el primer número", 0));
var numero2 = parseInt(prompt("Introduce el segundo número", 0));

document.write("El rango de números impares que va entre  " + numero1 + " y " + numero2 + " es: <br/>");
for(var i = numero1; i <= numero2; i++){
    if(i%2 !== 0){
        document.write(i + " ");
    }
}
