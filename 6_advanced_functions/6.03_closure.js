//Замыкание
function makeCounter() {
    let count = 0;
    return function () {
        return count++; // есть доступ к внешней переменной "count"
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

// // console.log(counter()); // 0
// // console.log(counter()); // 1
// // console.log(counter2()); // 0
// // console.log(counter2()); // 1

//Задача 1:

//Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.
// Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?
//Пример выше идентичен

//Задача 2:

//Здесь объект счётчика создан с помощью функции-конструктора.
// Будет ли он работать? Что покажет?

function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}

let counter3 = new Counter();

// console.log(counter3.up()); // ?
// console.log(counter3.up()); // ?
// console.log(counter3.down()); // ?
//Будет работать. Покажет 1, 2, 1

//Задача 3:

//Посмотрите на код. Какой будет результат у вызова на последней строке?

let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}

// sayHi(); //Hello, John Непон. Обещали ошибку, т.к. доступа к sayHi снаружи нет

//Задача 4:
//Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).
// Например:

function sum(a) {
    return function (b) {
        console.log(a + b);
    };
}

// sum(1)(2)
// sum(5)(-1)

//Задача 5:
//У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f.
// Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.

// Они должны использоваться таким образом:
// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

function inBetween(min, max) {
    return function (item) {
        return item >= min && item <= max;
    };
}

function inArray(arr) {
    return function (item) {
        return arr.includes(item);
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr.filter(inBetween(2, 4)));
// console.log(arr.filter(inArray([1, 6, 8])));

//Задача 6:
// У нас есть массив объектов, который нужно отсортировать:

let users = [
    {name: "John", age: 20, surname: "Johnson"},
    {name: "Pete", age: 18, surname: "Peterson"},
    {name: "Ann", age: 19, surname: "Hathaway"},
];

//Можем ли мы сделать его, скажем, вот так:

users.sort(byField("name"));
// users.forEach((user) => console.log(user));
users.sort(byField("age"));

// users.forEach((user) => console.log(user));

function byField(field) {
    return function (a, b) {
        return a[field] > b[field] ? 1 : -1;
    };
}

//Задача 7:

//Следующий код создаёт массив из стрелков (shooters).
// Каждая функция предназначена выводить их порядковые номера.
// Но что-то пошло не так…

function makeArmy() {
    let shooters = [];
    for (let i = 0; i < 10; i++) {
        let shooter = function () {
            console.log(i);
        };
        shooters.push(shooter);
    }
    return shooters;
}

let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// army[9](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

//Почему у всех стрелков одинаковые номера? --> потому что для цикла while не создавалось
//особенное лексическое окружение для каждой функции
// Почините код, чтобы он работал как задумано.
