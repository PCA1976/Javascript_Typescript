import { Vehiculo } from "./Vehiculo.js";
export class Auto extends Vehiculo {
    constructor(marca, modelo, velocidadMaxima, velocidad, numeroPuertas) {
        super(marca, modelo, velocidadMaxima, velocidad);
        this.numeroPuertas = numeroPuertas;
    }
    acelerar(velocidad, velocidadMaxima) {
        if (this.velocidadMaxima >= (this.velocidad))
            this.velocidad += 1;
        else
            this.velocidad = this.velocidadMaxima;
    }
}
