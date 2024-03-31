alert("hola mundo");
let nombre = "Daniel Galvan";
let altura = 1.64;

let concatenacion = nombre + " tiene una altura de: " + altura + " metros.";

//MOstrar por pantalla utliando docmentwrite

let datos = document.getElementById("datos");
datos.innerHTML = `
<h1>Soy la caja de datos</h1>
<h2>Mi nombre es ${nombre}</h2>
<h3>Mi estatura es ${altura} mts </h3> 
`;

if (altura >= 1.9) {
    datos.innerHTML += `<h1>Eres alto</h1>`;
}
else {
    datos.innerHTML += `<h1>No eres muy alto.</h1>`;
}

//Blucle for

for (let index = 0; index < 21; index++) {
    datos.innerHTML += `<h1>Estamos en el año: </h1>${index} \n`;

}

function MuestraMiNombre(nombre, altura) {
    let misDatos = "Hola soy " + nombre + ", mi estatura es de: " + altura + "mts.";
    return misDatos;
}
MuestraMiNombre("Pedro", 1.64);

function imprimir() {
    let datos = document.getElementById('datos');
    datos.innerHTML += MuestraMiNombre("Jose", 47);

}
imprimir();

let nombres = ['daniel', 'pedro', 'jose'];
alert(nombres[1]);


document.write("<h1>Listado de nombres</h1>")
for (let index = 0; index < nombres.length; index++) {
    document.write(nombres[index]+ `<br/>`);
}

nombres.forEach((nombre) => {
    document.write(nombre+"<br/>");
});