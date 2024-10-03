export class Vehiculo {
    constructor(marca, modelo, velocidadMaxima, velocidad) {
        this._marca = marca;
        this._modelo = modelo;
        this._velocidadMaxima = velocidadMaxima;
        this._velocidad = velocidad;
    }
    get marca() {
        return this._marca;
    }
    get modelo() {
        return this._modelo;
    }
    get velocidadMaxima() {
        return this._velocidadMaxima;
    }
    get velocidad() {
        return this._velocidad;
    }
    set marca(newMarca) {
        this._marca = newMarca;
    }
    set modelo(newMod) {
        this._modelo = newMod;
    }
    set velocidadMaxima(newVelMax) {
        this._velocidadMaxima = newVelMax;
    }
    set velocidad(newVel) {
        this._velocidad = newVel;
    }
    frenar() {
        this._velocidad -= 1;
        if (this._velocidad <= 0)
            this._velocidad = 0;
    }
}
