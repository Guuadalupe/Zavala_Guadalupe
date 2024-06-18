
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerInformacion() {
        return Marca; {this.marca}; Modelo: {this.modelo}; Año: {this.año};
    }
}


class Automovil extends Vehiculo {
    constructor(marca, modelo, año, color, precio) {
        super(marca, modelo, año);
        this.color = color;
        this.precio = precio;
    }

    obtenerInformacion() {
        return Marca; {this.marca}; Modelo: {this.modelo}; Año: {this.año}; Color: {this.color}; Precio: {this.precio};
    }
}

o
let miVehiculo = new Vehiculo("Toyota", "Corolla", 2020);
console.log(miVehiculo.obtenerInformacion());


let miAutomovil = new Automovil("Honda", "Civic", 2022, "Rojo", 25000);
console.log(miAutomovil.obtenerInformacion());