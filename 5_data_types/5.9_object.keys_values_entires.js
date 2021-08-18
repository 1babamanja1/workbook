//Object keys, values, entries
//Объекты можно перебирать так же, как Map/Set/Array но с другим синтаксисом:

let iterationObj = {
    name: "Lisa",
    age: 18,
    hasCat: true,
};
// console.log(Object.keys(iterationObj)); //["name", "age", "hasCat"]
// console.log(Object.values(iterationObj)); //["Lisa", 18, true]
// console.log(Object.entries(iterationObj));//[Array(2), Array(2), Array(2)]

//Чтобы бегать по объекту методами массива (map, filter)
// надо провести фокус Object.entries -> методы массивов -> Object.fromEntries

let prices = {
    apple: 4,
    watermelon: 5,
    cucumber: 6,
};

//удорожим всё в три раза

let expensive = Object.entries(prices).map(([key, value]) => [key, value * 3]);
// console.log(Object.fromEntries(expensive));

//Задача 1:

//Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

let sumSalaries = (obj) => {
    let res = 0;
    for (let salary of Object.values(obj)) {
        res += salary;
    }
    return res;
};
// console.log(sumSalaries(salaries));

//Задача 2:
//Напишите функцию count(obj), которая возвращает количество свойств объекта:
//Постарайтесь сделать код как можно короче.
// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

let user = {
    name: "John",
    age: 30,
};

let count = (obj) => {
    return Object.keys(obj).length;
};

// console.log(count(user));
