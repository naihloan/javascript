// alert('hola mundo!');
var nombre = "Benjamín Juárez";
var aka = "venhamon";
var altura = 165;
var concatenacion = nombre + " " + altura;
// document.write(nombre + " " + altura);
// document.write(concatenacion);
var datos = document.getElementById("datos");
// datos.innerHTML = concatenacion;
datos.innerHTML = `
    <header>
        <h1>aloha ${aka}</h1>
    </header>
`;

if(altura < 190){
    datos.innerHTML += `
        <header>
            <h2>Sos de estatura media</h2>
        </header>
    `;
}else{
    datos.innerHTML += `
        <header>
            <h2>Sos alto</h2>
        </header>`;
};

for(var i = 2020; i <= 2025; i++){
    datos.innerHTML += `
        <header>año ${i} </header>
    `;
};