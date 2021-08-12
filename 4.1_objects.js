//Объекты основы

//Вычисляемый ключ
let fruit = "apple";
let bag = {
    [fruit]: 5, // --> bag {apple: 5} Чтобы добавить вычисляемый ключ, заворачиваем его в квадратные скобки.
};
// Свойство объекта из переменной

let newPet = (name, type, legs) => {
    return {
        name, // вместо name: name
        type,
        legs,
    };
};
let myDog = newPet("Bobik", "dog", 4);

// Задание 1:
//1. Создайте пустой объект 'user'
let user = {};
//2. Добавьте свойство 'name' со значением 'John'
user.name = "John";
//3. Добавьте свойство surname со значением Smith.
user.surname = "Smith";
//4. Измените значение свойства name на Pete.
user.name = "Pete";
//5. Удалите свойство name из объекта.
delete user.name;

//Задание 2:
//.Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

let isEmpty = (obj) => {
    let counter = 0;
    for (let elem in obj) {
        counter++;
    }
    return Boolean(counter);
};
isEmpty({});

//Задание 3:
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
// Ответ: Да, потому что const защищает от перезаписи только всю переменную. Содержимое можно менять.

const user2 = {
    name: "John",
};
user2.name = "Pete";
//console.log(user2) --> {name: "Pete"}, всё работает

// user2 = {
//     name: 'Pete'
// } --> Выдаст ошибку

// Задание 4:

// У нас есть объект, в котором хранятся зарплаты нашей команды
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// Если объект salaries пуст, то результат должен быть 0.

let sumSalaries = (salaries) => {
    let sumSalaries = 0;
    for (let worker in salaries) {
        sumSalaries += salaries[worker];
    }
    return sumSalaries;
};

// Задание 5:
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

let multiplyNumeric = (obj) => {
    for (let elem in obj) {
        if (typeof obj[elem] === "number") {
            obj[elem] *= 2;
        }
    }
};