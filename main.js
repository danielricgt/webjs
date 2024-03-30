alert("hola mundo");
let nombre = "Daniel Galvan";
let altura =  1.64;

let concatenacion = nombre + " tiene una altura de: "+altura+" metros."; 

//MOstrar por pantalla utliando docmentwrite

let datos = document.getElementById("datos");
datos.innerHTML = `
<h1>Soy la caja de datos</h1>
<h2>Mi nombre es ${nombre}</h2>
<h3>Mi estatura es ${altura} mts </h3> 
`;