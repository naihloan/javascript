'use strict'

var nombre = "Benjamín Juárez";
var aka = "venhamon";
var altura = 165;
var concatenacion = nombre + " " + altura;

function MuestraMiNombre(aka, altura = []){
    // var datos = document.getElementById("datos");
    var misDatos = `
        <header>
            <h1>Hola, yo soy ${aka}</h1>
        </header>
    `;

    return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Benjamín Juárez");
}

// MuestraMiNombre("Benjamín Juárez");
imprimir();

var nombres = ['Marcos', 'Lucas', 'Juan', 'Mateo'];
// alert(nombres[1]);

// Una manera de iterar
document.write('<h4>Listado de nombres</h4>');
var i;
for (i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br/>');
}

// Otra manera de iterar. Con callback y función anónima
// nombres.forEach(function(nombre){
//     document.write(nombre + '<br/>');
// })
// Otra manera de iterar. Con callback y función anónima con flecha
// nombres.forEach((nombre) => {
//     document.write(nombre + '<br/>');
// })