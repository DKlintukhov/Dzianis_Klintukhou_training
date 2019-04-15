// функция для наследования 
function inherit(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

// абстрактный класс
function Vehicle(speed, maxSpeed) {
    this.speed = speed;
    this.maxSpeed = maxSpeed;
}

// добавляем методы в прототип Vehicle

// статус движения
Vehicle.prototype.status = function () {
    console.log(`The speed is a ${this.speed}km`);
}

// остановиться
Vehicle.prototype.stop = function () {
    this.speed = 0;
}

// сбросить скорость
Vehicle.prototype.brake = function (km) {
    this.speed = Math.max((this.speed - km), 0);
    return this.speed;
}

// добавить скорость
Vehicle.prototype.addSpeed = function (km) {
    this.speed = Math.min((this.speed += km), this.maxSpeed);
    return this.speed;
}


function Car(speed, maxSpeed) {
    this.speed = speed;
    this.maxSpeed = maxSpeed;

    // полиморфим status
    this.getStatus = function () {
        this.status();
        if (this.speed > 0) {
            console.log(`The Car is moving...`);
        }
        else {
            console.log("Isn't moving");
        }
    }
}

function Plane(speed, maxSpeed) {
    this.speed = speed;
    this.maxSpeed = maxSpeed;

    // полиморфим status
    this.getStatus = function () {
        this.status();
        if (this.speed > 0) console.log(`The plane is flying...`);
        else console.log("Isn't flying");
    }
}

// наследование...
inherit(Car, Vehicle);
inherit(Plane, Vehicle);

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