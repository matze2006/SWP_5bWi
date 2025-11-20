import { Besitzer } from "./Besitzer.ts";
import { Engine } from "./Engine.ts";

export class Car{
    private color:string = "green";
    private model:string = "i3";
    private make:string = "bmw"; 
    private engine:Engine;
    private besitzer:Besitzer;

    constructor(color:string, model:string, make:string, engine:Engine, besitzer:Besitzer){
        this.color = color;
        this.model = model;
        this.make = make;
        this.engine = engine;
        this.besitzer = besitzer;
    }

    getAllCar():string[]{
        return [this.color, this.model, this.make];
    }

    getAllEngine():(string | number)[]{
        return this.engine.getAllEngine();
    }

    getAllBesitzer():(string | number)[]{
        return this.besitzer.getAllBesitzer();
    }
}