import { iVehiculo } from "../interfaces/IVehiculo";
import { Vehiculo } from "./Vehiculo.js";

export class Auto extends Vehiculo implements iVehiculo {
    private numeroPuertas: number;

    constructor(marca: string, modelo: string, velocidadMaxima: number, velocidad: number, numeroPuertas: number) {
        super(marca, modelo, velocidadMaxima, velocidad);
        this.numeroPuertas = numeroPuertas;
    }

    acelerar(velocidad: number, velocidadMaxima: number): void {
        if (this.velocidadMaxima >= (this.velocidad))
            this.velocidad += 1;
        else this.velocidad = this.velocidadMaxima;
    }
}