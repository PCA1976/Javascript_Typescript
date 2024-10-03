import { iVehiculo } from "../interfaces/IVehiculo";
import { Vehiculo } from "./Vehiculo.js";

export class Moto extends Vehiculo implements iVehiculo {
    private tipoManillar: string;

    constructor(marca: string, modelo: string, velocidadMaxima: number, velocidad: number, tipoManillar: string) {
        super(marca, modelo, velocidadMaxima, velocidad);
        this.tipoManillar = tipoManillar;
    }
    acelerar(velocidad: number, velocidadMaxima: number): void {
        if (this.velocidadMaxima >= (this.velocidad))
            this.velocidad += 3;
        else this.velocidad = this.velocidadMaxima;
    }
}