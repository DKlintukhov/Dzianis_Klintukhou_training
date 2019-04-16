// абстрактный класс
function Vehicle(speed, maxSpeed) {
    this.speed = speed;
    this.maxSpeed = maxSpeed;

    // добавить скорость
    this.addSpeed = function (km) {
        this.speed = Math.min((this.speed += km), this.maxSpeed);
        return this.speed;
    }

    // сбросить скорость
    this.brake = function (km) {
        this.speed = Math.max((this.speed - km), 0);
        return this.speed;
    }

    // остановиться
    this.stop = function () {
        this.speed = 0;
    }

    // статус движения
    this.status = function () {
        console.log(`The speed is a ${this.speed}km`);
    }
}

function Car(speed, maxSpeed) {

    // наследуемся
    Vehicle.call(this, speed, maxSpeed);

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

    // наследуемся
    Vehicle.call(this, speed, maxSpeed);

    // полиморфим status
    this.getStatus = function () {
        this.status();
        if (this.speed > 0) {
            console.log(`The plane is flying...`);
        }
        else {
            console.log("Isn't flying");
        }
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