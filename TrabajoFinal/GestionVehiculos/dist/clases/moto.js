import { Vehiculo } from "./Vehiculo.js";
export class Moto extends Vehiculo {
    constructor(marca, modelo, velocidadMaxima, velocidad, tipoManillar) {
        super(marca, modelo, velocidadMaxima, velocidad);
        this.tipoManillar = tipoManillar;
    }
    acelerar(velocidad, velocidadMaxima) {
        if (this.velocidadMaxima >= (this.velocidad))
            this.velocidad += 3;
        else
            this.velocidad = this.velocidadMaxima;
    }
}
