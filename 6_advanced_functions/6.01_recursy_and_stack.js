//Рекурсия

//Ситуация, когда функция вызывает сама себя

//Напишем функцию возведения в степень через умножение:

let powNum = (num, pow) => {
    return pow === 1 ? num : num * powNum(num, pow - 1);
};
// console.log(powNum(2, 3));

//Контекст выполнения, стек

//Контекст -- место, где была вызвана функция, соответствующий this и "прочая служебная информация"

//Рекурсивный обход -- можно залезть во вложенные объекты с помощью рекурсии
//Связный список:

let linkedList = {
    value: "val0",
    item: {
        value: "val1",
        item: {
            value: "val2",
            item: {
                value: "val3",
                item: null,
            },
        },
    },
};

// console.log(linkedList.item.value); //val1
// console.log(linkedList.item.item.value); //val2

//добавим новый пунк списка в начало:

itembefore = {value: "valbefore", item: linkedList};
// console.log(itembefore); //{value: "valbefore", item: {…}}

//Удалим объект со значением val2

itembefore.item.item.item = itembefore.item.item.item.item;
// console.log(itembefore);

//Задача 1:

//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
//С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

let sumToLoop = (n) => {
    let counter = 0;
    for (let i = 0; i <= n; i++) counter += i;
    return counter;
};

let sumToRec = (n) => {
    return n === 0 ? n : n + sumToRec(n - 1);
};

let sumToArithmetic = (n) => {
    return ((2 + (n - 1)) / 2) * n;
};

//Задача2:
//Написать функцию factorial(n), которая возвращает n!, используя рекурсию.

let factorial = (n) => {
    return n === 1 ? n : n * factorial(n - 1);
};

//Задача 3:
//Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

let fib = (n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};
// console.log(fib(77)); //очень долго, не подходит

//Рекурсия, но быстрее
let fasterFib = (n, a = 0, b = 1) => {
    return n === 1 ? b : fasterFib(n - 1, b, a + b);
};
// console.log(fasterFib(77));

let fastFib = (n) => {
    let a = 1;
    let b = 1;
    for (let i = 1; i < n; i++) {
        a += b;
        b = a - b;
    }
    return b;
};
// console.log(fastFib(77)); //быстро и правильно. Решила круче, чем в лёрн жс

//Задача 4:
//Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};
//Напишите функцию printList(list), которая выводит элементы списка по одному.
//Сделайте два варианта решения: используя цикл и через рекурсию.

let printListRec = (list) => {
    console.log(list);
    list.next ? printListRec(list.next) : null;
};

// printListRec(list);

let printListLoop = (list) => {
    let middleware = list;
    while (middleware) {
        console.log(middleware);
        middleware = middleware.next;
    }
};
// printListLoop(list);

//Задача 5:
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.

let revPrintListRec = (list) => {
    list.next ? revPrintListRec(list.next) : null;
    console.log(list);
};

// revPrintListRec(list);

let revPrintListLoop = (list) => {
    let middleware = list;
    let arr = [];
    while (middleware) {
        arr.push(middleware);
        middleware = middleware.next;
    }
    arr.reverse().forEach((item) => console.log(item));
};

revPrintListLoop(list);
