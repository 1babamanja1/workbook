//Приватные и защищённые методы

//Делаем кофеварку на жаваскрипт

class CoffeeMachine {
    waterAmount = 0;

    constructor(power) {
        this.power = power;
        console.log(`Coffee Machine is created, power: ${power}`);
    }
}

// let coffeeMachineSample = new CoffeeMachine(5000); //Coffee Machine is created, power: 5000
// coffeeMachineSample.waterAmount = 300;

//Защитим воду от кражи:

class CoffeeMachine2 {
    _waterAmount = 0;

    constructor(power) {
        this.power = power;
    }

    set waterAmount(val) {
        val < 0
            ? console.error("Water is completely stolen")
            : (this._waterAmount = val);
    }

    get waterAmount() {
        return this._waterAmount;
    }
}

let protectedCoffeeMachine = new CoffeeMachine2(5100);
// protectedCoffeeMachine.waterAmount = -4; //Water is completely stolen

//сделаем свойство power доступным только для чтения

class CoffeeMachine3 {
    _waterAmount = 0;

    constructor(power) {
        this._power = power;
    }

    set waterAmount(val) {
        val < 0
            ? console.error("Water is completely stolen")
            : (this._waterAmount = val);
    }

    get waterAmount() {
        return this._waterAmount;
    }

    get power() {
        return this._power;
    }
}

let poweredCoffeeMachine = new CoffeeMachine3(10000);

// console.log(poweredCoffeeMachine.power); //10000
poweredCoffeeMachine.power = 12;
// console.log(poweredCoffeeMachine.power); //10000

//Защищёные методы наследуются

//Приватные (начинаются с #) не наследуются.
