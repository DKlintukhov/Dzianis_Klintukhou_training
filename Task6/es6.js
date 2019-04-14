// абстрактный класс
class Vehicle {
  constructor(speed = 0, maxSpeed = 200) {
    this.speed = speed;
    this.maxSpeed = maxSpeed;
  }

  // добавить скорость
  addSpeed(km) {
    if(km < 0) km = 0;
    if(km > this.maxSpeed) km = this.maxSpeed;
    this.speed += km;
    if(this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  }

  // сбросить скорость
  brake(km) {
    if(km < 0) km = 0;
    if(km > this.maxSpeed) km = this.maxSpeed;
    this.speed -= km;
  }

  // остановиться
  stop() {
    this.speed = 0;
  }

  // статус движения
  status() {
    console.log(`The speed is a ${this.speed}km`);
  }
}

// наследование...
class Car extends Vehicle {
  constructor(speed, maxSpeed) {
    super(speed, maxSpeed);
  }
  
  // полиморфим status
  getStatus() {
    super.status();
    if(this.speed > 0) console.log(`The Car is moving...`);
    else console.log("Isn't moving");
  }
}

class Plane extends Vehicle {
  constructor(speed, maxSpeed) {
    super(speed, maxSpeed);
  }
  
  // полиморфим status
  getStatus() {
    super.status();
    if(this.speed > 0) console.log(`The plane is flying...`);
    else console.log("Isn't flying");
  }
}

let Mersedes = new Car(90, 200);
let Boing = new Plane(900, 990);

Mersedes.stop();
Boing.stop();

Mersedes.getStatus();
Boing.getStatus();

console.log("-".repeat(20));

Mersedes.addSpeed(120);
Boing.addSpeed(950);

Mersedes.getStatus();
Boing.getStatus();

console.log("-".repeat(20));

Mersedes.brake(60);
Boing.brake(50);

Mersedes.getStatus();
Boing.getStatus();

console.log("-".repeat(20));