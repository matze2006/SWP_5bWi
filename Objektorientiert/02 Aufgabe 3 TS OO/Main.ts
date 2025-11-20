import { Besitzer } from "./Besitzer.ts";
import { Car } from "./Car.ts";
import { Engine } from "./Engine.ts";

let engine:Engine = new Engine("BMW",130,"Diesel");
let besitzer:Besitzer = new Besitzer("Matteo","Kleber",18);

let car:Car = new Car("red","i4","bmw", engine, besitzer);

console.log("Auto: " + car.getAllCar())
console.log("Engine: " + car.getAllEngine())
console.log("Besitzer: " + car.getAllBesitzer())