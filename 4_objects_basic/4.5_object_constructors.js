//Функция-конструктор

//Называется с большой буквы и с помощью слова new

function MakeCat(name) {
  this.legs = 4;
  this.tail = true;
  this.name = name;
}

let newCat = new MakeCat("barsik");
// console.log(newCat); --> MakeCat {legs: 4, tail: true, name: "barsik"}
// Так можно наделать много котов очень легко.

// можно вывать функцию-конструктор и сразу записать её в переменную, но переиспользовать эту конструкцию будет невозможно

let compliCat = new (function () {
  this.legs = 3;
  this.love = Infinity;
})();

//Скобки вокруг функции и скобки вызова добавил Prettier. По идее должно работать и без них

// Что в таких функциях делает return, если его туда добавить:
// если return{объект1}, то вернёт объект1. В любом другом случае вернёт this, что он делает и без этой конструкции

//В конструкторах, разумеется, можно создавать методы:

function MakeDog(name) {
  this.name = name;
  this.bark = function () {
    console.log(`Bark! I'm ${name}. Bark!`);
  };
}

let newDog = new MakeDog("Barbos");
// newDog.bark(); //--> Bark! I'm Barbos. Bark!

//Задание 10:

//Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?
//Если да – приведите пример вашего кода.

let newObj = {};

function A() {
  return newObj;
}

function B() {
  return newObj;
}

let a = new A();
let b = new B();

// console.log(a === b); //--> true, так как обе функции возвращают один объект.

//Задание 11:

//Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
//
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.

let Calculator2 = function () {
  this.read = function (num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  };
  this.mul = function () {
    return this.num1 * this.num2;
  };
  this.sum = function () {
    return this.num1 + this.num2;
  };
};

let newCalc2 = new Calculator2();
newCalc2.read(6, 9);
// console.log(newCalc2.mul()); //--> 54
// console.log(newCalc2.sum()); //--> 15

//Задание 12:
//Напишите функцию-конструктор Accumulator(startingValue).
//
// Объект, который она создаёт, должен уметь следующее:
//
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

let Accumulator = function (startingValue) {
  this.value = startingValue;
  this.read = function (addedValue) {
    this.value += addedValue;
  };
};

let accum = new Accumulator(5);
accum.read(40);
accum.read(7);
// console.log(accum.value); //--> 52
