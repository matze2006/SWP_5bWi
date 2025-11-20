export class Car {
    static wheels = 4;
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    drive() {
        console.log(`${this.color}es Auto fährt auf ${Car.wheels} Rädern.`);
    }
}

const car1 = new Car("rot");
const car2 = new Car("blau");


car1.drive();
car2.drive();

console.log(`Alle Autos haben ${Car.wheels} Räder.`);

const maxSpeed = 200;
//maxSpeed = 250; 
console.log(`Die maximale Geschwindigkeit ist ${maxSpeed} km/h.`);

