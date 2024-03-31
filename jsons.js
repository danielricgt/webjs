let bicicleta = {
    modelo: "Fuji",
    precio: 1000000,
    color: "Negro",
    mostrarDatos() {
        console.log("La bicicleta tiene un modelo " + bicicleta.modelo + " " + bicicleta.color + "de color");
    }

}
document.write("La bicicleta tiene un modelo " + bicicleta.modelo + ".<br>");
bicicleta.mostrarDatos();
console.log(bicicleta);

let saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let salud = "Hola a todos amigos";
        if (salud) {
            resolve(salud);
        } else {
            reject(new Error('Network timeout'));
        }
    }, 2000);
});

saludar.then(resultado =>{
    alert(resultado);
})
.catch(err => {
    alert(err);
});