//Встроенные прототипы
let obj = {};
// console.log(obj.__proto__); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, ...)
let arr = [];
// console.log(arr.__proto__); //[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ,…]

//Встроенные прототипы можно изменять (но лучше не надо, только для полифилов):

String.prototype.cons = function () {
    console.log(this);
};

// "Stepan".cons(); //String{"Stepan"}

//Заимствование у прототипов

notArr = {
    0: "one",
    1: "two",
    length: 2,
};

notArr.join = Array.prototype.join;
// console.log(notArr.join(","));//one,two

//Задача 1:

//Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
// После этого должен работать такой код:
// Function.prototype.defer = function (ms) {
//   setTimeout(this, ms);
// };

// function f() {
//   console.log("Hello!");
// }

// f.defer(1000); // выведет "Hello!" через 1 секунду

//Задача 2:

//Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
// Например, должно работать так:

Function.prototype.defer = function (ms) {
    let func = this;
    return function (...args) {
        setTimeout(() => {
            func(...args);
        }, ms);
    };
};

function f(a, b) {
    console.log(a + b);
}

// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
