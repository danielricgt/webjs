class Car {
  constructor(modelo, velocidad, antiguiedad) {
    this.modelo = modelo;
    this.velocidad = velocidad;
    this.antiguiedad = antiguiedad;
  }

  aumentarVeloicad() {
    this.velocidad += 1;
  }
}

let coche_uno = new Car("Mazda", 120, 2);

document.write("<h1>Velocidad es: </h1>"+coche_uno.velocidad+"<h1>Rapido</h1>")
coche_uno.aumentarVeloicad();

coche_uno.aumentarVeloicad();

coche_uno.aumentarVeloicad();

document.write("<h1>Velocidad es: </h1>"+coche_uno.velocidad+"<h1>Rapido</h1>")

class Autobus extends Car {
    constructor(modelo, velocidad, antiguiedad){
        super(modelo, velocidad, antiguiedad);
        this.altura= 2.30;
        this.capacidad=50; //en metros cúbicos
    }

    mostrarAltura(){
        return "la altura del autobus es "+this.altura +" metros";
    }

    capacidadParaPasajeros(){
        return this.capacidad;
    }
}

let autobus = new Autobus ("Volvo B7RLE", 80, 5);
console.log(autobus.mostrarAltura());
document.write("<p>Este coche es un "+autobus.modelo+". Tiene una capacidad para "+autobus.capacidadParaPasajeros()+" pasajeros.</p");