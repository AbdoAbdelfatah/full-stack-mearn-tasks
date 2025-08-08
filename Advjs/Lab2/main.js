function Vehicle(speed, color) {
    this.speed = speed;
    this.color = color;
}

Vehicle.prototype.turnLeft = function () {
    console.log("Turning left");
};
Vehicle.prototype.turnRight = function () {
    console.log("Turning right");
};
Vehicle.prototype.start = function () {
    console.log("Started...");
    return true;
};
Vehicle.prototype.stop = function () {
    console.log("Stopped... ");
    return true;
};
Vehicle.prototype.goBackward = function (speed, accel) {
    console.log("backward with speed: "+speed+" and acceleration: "+accel);
};
Vehicle.prototype.goForward = function (speed, accel) {
    console.log("forward with speed: "+speed+" and acceleration: "+accel);
};

//Inherite from Vehicle----------------------------------------------------------------------------

function Bicycle(speed, color) {
    Vehicle.call(this, speed, color);
}
Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

Bicycle.prototype.ringBell = function () {
    console.log("------ ringBell ------");
};


//Inherite from Vehicle----------------------------------------------------------------------------

function MotorVehicle(speed, color, sizeOfEngine, licencePlate) {
    Vehicle.call(this, speed, color);
    this.sizeOfEngine = sizeOfEngine;
    this.licencePlate = licencePlate;
}
MotorVehicle.prototype = Object.create(Vehicle.prototype);
MotorVehicle.prototype.constructor = MotorVehicle;
MotorVehicle.prototype.getSizeOfEngine = function () {
    return this.sizeOfEngine;
};
MotorVehicle.prototype.getLicensePlate = function () {
    return this.licencePlate;
};

//Inherite from MotorVehicle----------------------------------------------------------------------------

function DumpTruck(speed, color, sizeOfEngine, licencePlate, loadCapacity, numWheels, weight) {
    MotorVehicle.call(this, speed, color, sizeOfEngine, licencePlate);
    this.loadCapacity = loadCapacity;
    this.numWheels = numWheels;
    this.weight = weight;
}
DumpTruck.prototype = Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor = DumpTruck;
DumpTruck.prototype.raiseLoad = function () {
    console.log("--- raiseLoad ---");
};
DumpTruck.prototype.lowerLoad = function () {
    console.log("--- lowerLoad ---");
};


//Inherite from MotorVehicle----------------------------------------------------------------------------

function Car(speed, color, sizeOfEngine, licencePlate, numOfDoors, numWheels, weight) {
    MotorVehicle.call(this, speed, color, sizeOfEngine, licencePlate);
    this.numOfDoors = numOfDoors;
    this.numWheels = numWheels;
    this.weight = weight;
}
Car.prototype = Object.create(MotorVehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.getNumOfDoors = function () {
    return this.numOfDoors;
};
Car.prototype.switchOnAirCon = function () {
    console.log("--- Air conditioning turned on ---");
};


var bike = new Bicycle(200, "Black");
bike.start();
bike.turnLeft();
bike.turnRight();
bike.goForward(15, 2);
bike.goBackward(30,1);
bike.ringBell();
bike.stop();

console.log(bike.color);

var car = new Car(300, "red", 4.0, "hrm777", 4, 4, 500);
car.switchOnAirCon();
console.log("Num of doors: ", car.getNumOfDoors());
console.log(car.color);


var truck=new DumpTruck(300, "green", 8.0, "Abdo666", 1000, 4, 3000);
truck.raiseLoad();
truck.lowerLoad();
console.log(truck.color);
