//Класс, базовый синтаксис:

class NewClass {
  //методы
  constructor(name, age) {
    this.name = name;
    this.age = age;
  } //не забываем конструктор
  sayHi() {
    console.log(`Hi, ${this.name}`);
  }
}

let objFromClass = new NewClass("Osyotr", 4);

// objFromClass.sayHi(); //Hi, Osyotr

//Класс - це функция
// console.log(typeof newClass); //function

//Можем сделать всё то же самое (очти) вручную

function SyntaxSugar(name, age) {
  this.name = name;
  this.age = age;
}

SyntaxSugar.prototype.sayHi = function () {
  console.log(`Hi, ${this.name}`);
};

let sugar = new SyntaxSugar("Karas");
// sugar.sayHi(); //Hi, Karas

//Но есть отличия:

// console.log(NewClass());//Uncaught TypeError: Class constructor NewClass cannot be invoked without 'new'
// console.log(SyntaxSugar()); //undefined
//--> Классовая функция не вызывается без new

//Методы класса enumerable

//Классы используют use strict

//Class Expression (+ Named)

let Expressed = class NamedClass {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  sayHi() {
    console.log(`Hi, ${NamedClass}`);
  }
};
let exp = new Expressed("Michael", "Jackson");

// exp.sayHi(); //Hi, class NamedClass {constructor(name, lastName)...)
// console.log(NamedClass); //ошибка -- вне класса нет доступа

//Динамическое создание классов

function ClassMaker() {
  return class {
    sayHi() {
      console.log("Hellow");
    }
  };
}

let MadeClass = ClassMaker();

// new MadeClass().sayHi();//Hellow

//В классах тоже есть геттеры/сеттеры

class ShowMeYourGetter {
  firstName = "Semyon"; //свойство класса, хз зачем оно надо
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }
}

let show = new ShowMeYourGetter("Tony", "Stark");

// console.log(show.fullName); //Tony Stark
show.fullName = "Iron Man";
// console.log(show.firstName); //Iron

//Задача 1:
//Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.

// function Clock({ template }) {
//   let timer;
//
//   function render() {
//     let date = new Date();
//
//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;
//
//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;
//
//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;
//
//     let output = template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);
//
//     console.log(output);
//   }
//
//   this.stop = function () {
//     clearInterval(timer);
//   };
//
//   this.start = function () {
//     render();
//     timer = setInterval(render, 1000);
//   };
// }
//
// let clock = new Clock({ template: "h:m:s" });

// clock.start();

class ClassClock {
  constructor(tmp) {
    this.tmp = tmp;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.tmp
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  start() {
    this.render();
    this.timer = setInterval(() => {
      this.render();
    }, 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}

let clock = new ClassClock("h__m__s");
// clock.start();
