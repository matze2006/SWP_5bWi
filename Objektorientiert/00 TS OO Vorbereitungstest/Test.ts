interface Vehicle {
  drive(): void;
}

class Car implements Vehicle {
  drive() {
    console.log("Driving a car");
  }

  getMake() {
    console.log("Toyota");
  }
}

class MotorCycle implements Vehicle {
    drive(): void {
        console.log("Driving a motorcycle")
    }

    getMake () {
        console.log("KTM")
    }
}

class RaceCar extends Car {
  setPowerMode() {
    console.log("Power mode activated!");
  }

  drive() {
    console.log("Driving a race car fast!");
  }
}

class RacingMotorCycle extends MotorCycle {
    setTopSpeed() {
        console.log("300 km/h")
    }

    drive() {
        console.log("Driving a fast racing motorcycle")
    }
}

let type:string = "Motorcycle";
const c:Car = new Car();
const mc:MotorCycle = new MotorCycle();
const rc:RaceCar = new RaceCar();
const rmc:RacingMotorCycle = new RacingMotorCycle();

if (type == "Car")
{
    console.log("Car:")
    c.drive();
    c.getMake();
}
else if (type == "Motorcycle")
{
    console.log("Motorcycle:")
    mc.drive();
    mc.getMake();
}
else if (type == "Racecar")
{
    console.log("Racecar:")
    rc.drive();
    rc.getMake();
    rc.setPowerMode();
}
else if (type == "Racing Motorcycle")
{
    console.log("Racing Motorcycle:")
    rmc.drive();
    rmc.getMake();
    rmc.setTopSpeed();
}
else
{
    console.log("gibts nicht")
}


