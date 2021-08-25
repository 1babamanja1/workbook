//NFE

//Задача 1:

//Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции.
// Или сделать два варианта решения: и так, и так.

function makeCounter() {
    counter.count = 0;
    counter = function () {
        return counter.count++;
    };
    counter.set = function (num) {
        counter.count = num;
    };
    counter.decrease = function () {
        counter.count--;
    };
    return counter;
}

// let counter = makeCounter();

// console.log(counter()); //0
// console.log(counter()); //1
// console.log(counter()); //2
// counter.set(15);
// console.log(counter()); //15
// counter.decrease();
// counter.decrease();
// console.log(counter()); //14

//Задача 2:
//Напишите функцию sum, которая бы работала следующим образом:
// console.log(sum(1)(2).toString());
// console.log(sum(1)(2)(3).toString());
// console.log(sum(5)(-1)(2).toString());
// console.log(sum(6)(-1)(-2)(-3).toString());
// console.log(sum(0)(1)(2)(3)(4)(5).toString());

function sum(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () {
        //пишем свой toString для этой функции
        return currentSum;
    };

    return f;
}
