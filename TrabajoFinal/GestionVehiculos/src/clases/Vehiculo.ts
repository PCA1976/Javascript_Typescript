export abstract class Vehiculo{
    private _marca: string;
    private _modelo: string;
    private _velocidadMaxima: number;
    private _velocidad: number;

    constructor(marca:string,modelo:string,velocidadMaxima:number,velocidad:number){
        this._marca = marca;
        this._modelo = modelo;
        this._velocidadMaxima = velocidadMaxima;
        this._velocidad = velocidad;
    }

    get marca():string{
        return this._marca;
    }
    get modelo():string{
        return this._modelo;
    }
    get velocidadMaxima():number{
        return this._velocidadMaxima;
    }
    get velocidad():number {
        return this._velocidad;
    }

    set marca(newMarca:string){
        this._marca = newMarca;
    }
    set modelo(newMod:string){
        this._modelo = newMod;
    }
    set velocidadMaxima(newVelMax){
        this._velocidadMaxima = newVelMax;
    }
    set velocidad(newVel){
        this._velocidad = newVel;
    }

    frenar(){
        this._velocidad-=1;
        if (this._velocidad <= 0)
            this._velocidad = 0;
    }
}