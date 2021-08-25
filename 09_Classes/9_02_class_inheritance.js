//Наследование классов

class Parent {
    constructor() {
        this.legs = 2;
        this.head = "Ginger";
        this.love = true;
    }

    breath() {
        console.log("Whoooa");
    }
}

class Child extends Parent {
    constructor() {
        super(); //забрали всё родительское, обязательно вызвать перед this
        this.head = "White";
    }

    run() {
        this.legs = 4;
    }

    breath() {
        super.breath(); // выполнился родительский breath
        this.run(); // расширили его своим функционалом
    }
}

let baby = new Child();

// console.log(baby); //Child{legs: 2, head: "White", love: true}
// baby.breath(); //Whoooa
// console.log(baby); //Child{legs: 4, head: "White", love: true} -прошёл метод run
// console.log(baby.__proto__); //Parent{constructor: ƒ, run: ƒ}

//Задача 1:

//В коде ниже класс Rabbit наследует Animal.
// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super();
        this.name = name;
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// console.log(rabbit.name); //Белый кролик; Done

//Задача 2:

//У нас есть класс Clock. Сейчас он выводит время каждую секунду

class Clock {
    constructor({template}) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = "0" + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = "0" + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = "0" + secs;

        let output = this.template
            .replace("h", hours)
            .replace("m", mins)
            .replace("s", secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

//Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками».
// Установите значение в 1000 (1 секунда) по умолчанию.
// Сохраните ваш код в файл extended-clock.js
// Не изменяйте класс clock.js. Расширьте его.

class ExtendedClock extends Clock {
    constructor(options) {
        super(options);
        let {precision = 1000} = options;
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

let extClock = new ExtendedClock({
    template: "h:m:s",
    precision: 5000,
});

// extClock.start();
