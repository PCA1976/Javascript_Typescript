import { Auto } from "./clases/Auto.js";
import { Moto } from "./clases/Moto.js";

const auto = new Auto('Chevrolet','600',120,0,4);
const moto = new Moto('Kawasaki','Ninja',220,0,'chopper');

auto.acelerar(auto.velocidadMaxima, auto.velocidad);
moto.acelerar(moto.velocidadMaxima, moto.velocidad)

console.log(`El auto va a ${auto.velocidad} y la moto a ${moto.velocidad}`)

auto.frenar();
moto.frenar();

console.log(`Ahora, el auto va a ${auto.velocidad} y la moto a ${moto.velocidad}`)
