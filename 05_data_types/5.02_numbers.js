//Числа

//Есть два типа данных: number и bigInt для больших чисел

//способы записи:

let million = 1000000;
let twoMillions = 2e6;
let small = 0.000000001;
let smol = 1e-6;

//Поддерживаемые системы счисления: двоичная, восьмеричная, шеснадцатиричная:

// console.log(0xff); //--> 255/ x means hexadecimal
// console.log(0b0101010); //--> 42/ b -- binary
// console.log(0o6765); //--> 3573/ o -- octal (06765 -- тож octal)

//Методы:

let num = 42;
// console.log(num.toString()); //--> 42 (строка)
// console.log(num.toString(2));  //--> 101010 (строка) - минимальное base
// console.log(num.toString(36)); //--> 16 (строка) - максимальное base

//Если надо вызвать метод прямо на числе, то надо использовать две точки, т.к. первая -- десяичный разделитель

// console.log((2547).toString(16)); //--> 9f3

//Округление:

let realNum = 4.6;
let realNum2 = 6.4;

// console.log(Math.floor(realNum) + " " + Math.floor(realNum2)); //--> 4 6 /округление вниз
// console.log(Math.ceil(realNum) + " " + Math.ceil(realNum2)); //--> 5 7 /округление вверх
// console.log(Math.round(realNum) + " " + Math.round(realNum2)); //--> 5 6 /округление в зависимости от пятёрки
// console.log(Math.trunc(realNum) + " " + Math.trunc(realNum2)); //--> 4 6 /отбрасывание хвоста

let bigTailNum = 17.3657656876516546;
// console.log(bigTailNum.toFixed(5)); //--> 17.36577 (строка)/ округление до нужной цифры после запятой
// console.log(realNum.toFixed(6)); //--> 4.600000 /добавил нулей

//Проверка IsNaN и IsFinite:
// console.log(isNaN(NaN) + " " + isNaN("hello")); //--> true true

// console.log(
//   isFinite(Infinity) + //--> false
//     " " +
//     isFinite(-Infinity) + //--> false
//     " " +
//     isFinite(NaN) + //--> false
//     " " +
//     isFinite("str") + //--> false
//     " " +
//     isFinite(" ") //--> true: преобразовалось в 0
// );

//Object.is(prim1, prim2) почти как 'prim1 === prim2', кроме:
// console.log(Object.is(NaN, NaN) + " " + (NaN === NaN)); //--> true false
// console.log(Object.is(0, -0) + " " + (0 === -0)); //--> false true

//parseInt и parseFloat вычленяют число из строки (если оно там есть, конечно)
// console.log(parseInt("100px100")); //--> 100 на первой ошибке останавливает запись
// console.log(parseInt("100.5")); //--> 100, для точки есть второй метод/
// console.log(parseFloat("1522.32.54")); // --> 1522.32 -- вторая точка уже ошибка
// console.log(parseFloat("s12"));// --> NaN -- ошибка остановила метод на первом символе

//Вторым аргументом в parseInt можно передать систему счисления:
// console.log(parseInt("ff", 16)); //--> 255

//Ещё немного методов:
// console.log(Math.random()); // --> возвращает рандомное число от 0(вкл) до 1(не вкл), много цифр после запятой
// console.log(Math.max(2, -8, 0, 6)); // --> 6
// console.log(Math.min(2, -8, 0, 6)); // --> -8
//Math.pow(a,b) для тех, кто не знает a**b

// //Преколы:

//Слишком большие числа приведутся к бесконечности (возможно, это разрулит BigInt)
// console.log(1e500) //--> Infinity

//Неточности в дробях
// console.log(0.1 + 0.2); //--> 0.30000000000000004, надо округлять.

//То же самое со слишком большими числами
// console.log(12121212121212121212); //--> 12121212121212121000 последние разряды округляются, тк не хватает памяти на это всё.

// Есть 0 и -0
// console.log(0 === -0); --> true, и на том спасибо

//Преколы закончились

//Задача 1:
//Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

let sumNums = () => {
    let a = +prompt("Введите одно", 0);
    let b = +prompt("Введите второе", 0);
    if (typeof a !== "NaN" && typeof b !== "NaN") {
        alert(a + b);
    } else {
        alert("Попробуйте ещё раз");
        sumNums();
    }
};
// sumNums();

//Задача 2:

//Почему 6.35.toFixed(1) == 6.3?
//Потому, что там на самом деле 6,34(9)
//Каким образом можно исправить ошибку в округлении числа 6.35?

// console.log(Math.round(6.35 * 10) / 10); // --> 6.4

//Задача 3:

//Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

let makeUserWriteANumber = () => {
    let num = prompt("Я не отстану, пока не напишешь число");
    if (num === null || num === "") {
        alert(null);
        return null;
    }
    if (!isFinite(+num)) {
        makeUserWriteANumber();
    } else {
        alert(+num);
        return +num;
    }
};
// makeUserWriteANumber();

//Задача 4:
//Этот цикл – бесконечный. Он никогда не завершится, почему?

//let i = 0;
// while (i != 10) {
//   i += 0.2;
// }
//Скорее всего потому, что из-за кривого округления, мы проскочим десятку.
// Будет что-то вроде 10.00000000004.

//Задача 5 + Задача 6:

//Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

//Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

let getRandomNumber = (min, max, float) => {
    console.log((Math.random() * (max - min) + min).toFixed(float));
};
