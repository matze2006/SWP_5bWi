// interfaces
export interface Lockable {
  lock(): void;
  unlock(): void;
  isLocked(): boolean;
}

export interface Securable {
  checkSecurity(): boolean;
}

// Door
export class Door implements Lockable {
  private locked: boolean = false;

  lock(): void {
    this.locked = true;
  }

  unlock(): void {
    this.locked = false;
  }

  isLocked(): boolean {
    return this.locked;
  }
}

// Window
export class Window implements Lockable {
  private locked: boolean = false;

  lock(): void {
    this.locked = true;
  }

  unlock(): void {
    this.locked = false;
  }

  isLocked(): boolean {
    return this.locked;
  }
}

// Car
export class Car implements Securable {
  constructor(public doors: Door[]) {}

  areAllDoorsLocked(): boolean {
    return this.doors.every(d => d.isLocked());
  }

  checkSecurity(): boolean {
    return this.areAllDoorsLocked();
  }
}

// House
export class House implements Securable {
  constructor(public doors: Door[], public windows: Window[]) {}

  private areAllDoorsLocked(): boolean {
    return this.doors.every(d => d.isLocked());
  }

  private areAllWindowsLocked(): boolean {
    return this.windows.every(w => w.isLocked());
  }

  isFullySecured(): boolean {
    return this.areAllDoorsLocked() && this.areAllWindowsLocked();
  }

  checkSecurity(): boolean {
    return this.isFullySecured();
  }
}

// SecurityService
export class SecurityService {
  checkSecurity(object: Securable): string {
    const secured = object.checkSecurity();
    return secured ? "All secure" : "Not fully secured";
  }
}


// --- Demo Usage ---
// Example instances
const door1 = new Door();
const door2 = new Door();
door1.lock();
door2.unlock();

const window1 = new Window();
window1.lock();

const myCar = new Car([door1, door2]);
const myHouse = new House([door1, door2], [window1]);

const securityService = new SecurityService();

console.log("Car:", securityService.checkSecurity(myCar));
console.log("House:", securityService.checkSecurity(myHouse));