//setTimeout, setInterval

// let timer = setTimeout(delayedFunc, 2000, "Timeouted");

// clearTimeout(timer); //nothing happens

// function delayedFunc(name) {
//   console.log(`Hello, ${name}`);
// }

// let interval = setInterval(delayedFunc, 1000, "Boy");

// setTimeout(() => {
//   clearInterval(interval);
// }, 10000);

//Рекурсивный SetTimeout надёжнее, чем SetInterval

//Задача 1:
//Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.
// Используя setInterval.
// Используя рекурсивный setTimeout.

function timeoutRec(from, to) {
    if (from <= to) {
        console.log(from++); //Непон. Почему нельзя консолить from, а не from++, а from++ передать в рекурсию
        setTimeout(timeoutRec, 1000, from, to);
    }
}

// setTimeout(timeoutRec, 1000, 4, 6);

function printNumbers(from, to) {
    let current = from;
    let timerId = setInterval(() => {
        current > to ? clearInterval(timerId) : console.log(current++);
    }, 1000);
}

// printNumbers(5, 10);

//Задача 2:

//В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.
//
// Когда будет выполнена запланированная функция?
//
// После цикла.
// Перед циклом.
// В начале цикла.
// Что покажет console.log?

// let i = 0;
// setTimeout(() => console.log(i), 100);
// // предположим, что время выполнения этой функции >100 мс
// for (let j = 0; j < 100000000; j++) {
//   i++;
// }

//Сначала должен закониться подсчёт, а потом выведется i = 100000000
