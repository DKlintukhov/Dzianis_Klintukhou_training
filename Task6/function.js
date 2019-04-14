// абстрактный класс
function Vehicle(speed, maxSpeed) {
    this.speed = speed;
    this.maxSpeed = maxSpeed;

      // добавить скорость
  this.addSpeed = function(km) {
    if(km < 0) km = 0;
    if(km > this.maxSpeed) km = this.maxSpeed;
    this.speed += km;
    if(this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  }

  // сбросить скорость
  this.brake = function(km) {
    if(km < 0) km = 0;
    if(km > this.maxSpeed) km = this.maxSpeed;
    this.speed -= km;
  }

  // остановиться
  this.stop = function() {
    this.speed = 0;
  }

  // статус движения
  this.status = function() {
    console.log(`The speed is a ${this.speed}km`);
  }
}

function Car(speed, maxSpeed) {

  // наследуемся
  Vehicle.call(this, speed, maxSpeed);

  // полиморфим status
  this.getStatus = function() {
      this.status();
      if(this.speed > 0) console.log(`The Car is moving...`);
      else console.log("Isn't moving");
    }
}

function Plane(speed, maxSpeed)  {

  // наследуемся
  Vehicle.call(this, speed, maxSpeed);
  
  // полиморфим status
  this.getStatus = function() {
    this.status();
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