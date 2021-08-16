// Методы у примитивов

// Чтобы примитивы могли использовать методы, как могут объекты, для них создаётся объект-обёртка, которая после выполнения метода, удаляется
// Самостоятельно создавать объекты-обёртки технически возможно, но очень не надо.
// А если уж взялся, то надо помнить, что создавая объект-обёртку, мы создадим объект.

//У null/undefined нет методов и объектов-обёрток

//Задача 1:
//Взгляните на следующий код:

let str = "Привет";
str.test = 5;

// alert(str.test);
//Как вы думаете, это сработает? Что выведется на экран?

//undefined -- объект-обёртка получил свойство test, но оно удалилось вместе с обёрткой

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

//Задача 3:
//Этот цикл – бесконечный. Он никогда не завершится, почему?

//let i = 0;
// while (i != 10) {
//   i += 0.2;
// }
//Скорее всего потому, что из-за кривого округления, мы проскочим десятку.
// Будет что-то вроде 10.00000000004.

//Задача 4 + Задача 5:

//Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

//Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

let getRandomNumber = (min, max, float) => {
  console.log((Math.random() * (max - min) + min).toFixed(float));
};

//Строки
//С кавычками всё понятноб лень писать

//Спецсимволы: экранируются обратным слешем:
//
// console.log("Привет \n друг"); //Привет
// //                                друг --> перенос строки
//
// console.log("Привет \" ' друг"); //Привет " ' друг --> экранирование кавычек
// console.log("Привет, \\ друг"); //Привет, \ друг --> экранирование слеша
// console.log("Привет \t друг"); //Привет 	 друг --> tab
// console.log("Привет, \xDD друг"); //Привет, Ý друг --> hexadecimal юникод
// console.log("Привет, \u1234  друг"); //Привет, ሴ  друг --> UTF-16
// console.log("Привет, \u{AFAD} друг"); //Привет, 꾭 друг --> UTF-32
//
// // Длина строки:
//
// console.log("Привет, \u{AFAD} друг".length); // --> 14, всё под слешом -- один символ
//
// //Найти символ на позиции:
//
// console.log("Привет, \u{AFAD} друг"[4]); //--> e; Если символа на полизии нет, вернёт undefined
// console.log("Привет, \u{AFAD} друг".charAt(5)); //--> т; Если символа на полизии нет, вернёт пустую строку
//
// //Перебрать посимвольно:
// for (let letter of "Привет, \u{AFAD} друг") {
//   console.log(letter); //П р и в е т , 꾭 д р у г
// }

//Строка неизменяема. Переменную можно только перезаписать

let hiFriend = "Привет, друк";
hiFriend[11] = "г";
// console.log(hiFriend); --> //Привет, друк

hiFriend = "Привет, друг";
// console.log(hiFriend); // --> Привет, друг

//Регистр:
// console.log(hiFriend.toUpperCase()); // --> ПРИВЕТ, ДРУГ
// console.log(hiFriend.toLowerCase()); // --> привет, друг

//Поиск подстроки (позиции)

// let hardString = "Hi2 hi6 Hi10";

// console.log(hardString.indexOf("Hi")); // --> 0
// console.log(hardString.indexOf("Hi", 2)); //--> 8, начал искать с позиции 2, hi с маленькой буквы не засчитал
// console.log(hardString.indexOf("Bye")); //--> -1, не нашёл

// console.log(hardString.lastIndexOf("Hi")); // --> 8, Нашёл с конца
// console.log(hardString.lastIndexOf("Hi", 7)); // --> 0

//Метод посовременнее, но не даёт позицию, только true/false:
// console.log(hardString.includes("Hi")); // --> true
// console.log(hardString.includes("hi", 7)); //--> false

// console.log(hardString.startsWith("Hi")); // --> true
// console.log(hardString.endsWith("hi")); // --> false

//Получение подстроки:

//slice: end не включается. Важно, чтобы start < end
// console.log(hardString.slice(2, 6)); // --> 2 hi --> 2 включилось, 6 нет
// console.log(hardString.slice(2)); // --> 2 hi6 Hi10 --> до конца строки
// console.log(hardString.slice(-7, -2)); // --> i6 Hi --> минус значит, что отсчёт идёт с конца. Но первый параметр всё равно -- символ, который левее в строке.

//substring: the same, только start и end можно менять местами:
// console.log(hardString.substring(2, 6)); // --> 2 hi
// console.log(hardString.substring(6, 2)); // --> 2 hi
// console.log(hardString.substring(-6, 3)); // --> Hi2 --> отрицательное значение приравнялось к нулю

//substr: возвращает от start (включительно) строку длины length:

// console.log(hardString.substr(2, 5)); // --> 2 hi6
// console.log(hardString.substr(-2, 5)); // --> 10 --> минус работает, взят второй символ с конца
// console.log(hardString.substr(5, -5)); // --> я бы удивилась, если бы сработало. Выдаёт пустую строку

//Сравнение строк происходит побуквенно.
//Сравниваются коды символов в UTF-16, каждая следующая буква алфавита будет "больше" предыдущей
// console.log("amanda" > "bella"); // --> false
//У заглавных и строчных коды разные.
// console.log("amanda" > "Bella"); // --> true

//Кодирование и декодирование символа в UTF-16
// console.log("amanda".codePointAt(0)); // --> 97
// console.log("bella".codePointAt(0)); // --> 98
// console.log("Bella".codePointAt(0)); // --> 68

// console.log(String.fromCodePoint(40)); // --> (

//Сравнение с учётом языковых особенностей

let localString1 = "Høst";
let localString2 = "Øl";

// console.log(localString1.localeCompare(localString2)); // --> -1 (строка слева -- меньше)
// console.log(localString2.localeCompare(localString1)); // --> 1 --> (строка слева -- больше)
// console.log(localString1.localeCompare(localString1)); // --> 0 --> строки равны

//Задача 1:
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
let ucFirst = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

// console.log(ucFirst("big"));

//Задача 2:
//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

let checkSpam = (str) => {
  return (
    str.toLowerCase().includes("xxx") || str.toLowerCase().includes("viagra")
  );
};

// console.log(checkSpam("buy ViAgRA now")); // --> true
// console.log(checkSpam("free xxxxx")); // --> true
// console.log(checkSpam("innocent rabbit")); // --> false

//Задача 3:

//Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength,
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

let truncate = (str, maxLength) => {
  return str.length > maxLength ? str.slice(0, maxLength - 1) + "\u2026" : str;
};

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));

//Задача 4:
//Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

let extractCurrencyValue = (str) => {
  return +str.slice(1);
};
// console.log(extractCurrencyValue("$452")); // --> 452

//Массивы

//объявление:
let newArr = ["a", 2, () => {}, {}]; //или пустой
let newArr2 = new Array();

//Преобразование к строке

//Массивы. Задачи
//Задача 1:
//Давайте произведём 5 операций с массивом.
// Создайте массив styles с элементами «Джаз» и «Блюз».
let styles = ["jazz", "blues"];
// console.log(styles);
// Добавьте «Рок-н-ролл» в конец.
styles.push("rock-n-roll");
// console.log(styles);
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
styles[Math.floor(styles.length / 2)] = "classic";
// console.log(styles);
// Удалите первый элемент массива и покажите его.
styles.shift();
// console.log(styles);
// Вставьте «Рэп» и «Регги» в начало массива.
styles.unshift("rap", "reggae");
// console.log(styles);

//Задача 2:
//Каков результат? Почему?
let arr = ["a", "b"];

arr.push(function () {
  console.log(this);
});

// arr[2](); // Выведет в консоль массив, так как он по своей сути-- объект.

//Задача 3:

//Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

let sumInput = () => {
  let isOk = true;
  let arr = [];
  while (isOk) {
    let num = prompt("Введите число");
    if (num === null || num === "" || !isFinite(+num)) {
      isOk = false;
    } else arr.push(+num);
  }
  return arr.length === 0 ? "Empty" : arr.reduce((accum, curr) => accum + curr);
};
// console.log(sumInput());

//Задача 4:

//На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.

let getMaxSum = (arr) => {
  let currentSum = 0;
  let maxSum = 0;
  arr.forEach((elem) => {
    if (elem >= 0) {
      currentSum += elem;
      maxSum = Math.max(maxSum, currentSum);
    } else currentSum = 0;
  });
  return maxSum;
};

// console.log(getMaxSum([-1, 2, 3, -9])); //5
// console.log(getMaxSum([-1, 2, 3, -9, 11])); //11
// console.log(getMaxSum([-2, -1, 1, 2])); //3
// console.log(getMaxSum([100, -9, 2, -3, 5])); //100
// console.log(getMaxSum([1, 2, 3])); //6
// console.log(getMaxSum([-1, -2, -3])); //0

//Методы массивов

//delete удаляет значение, но оставляет "пустое место"
//поэтому splice может всё

let testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(testArray.splice(1, 2)); //[1, 2]
// console.log(testArray); //[0, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(testArray.splice(3, 5, "a", "b", "c")); //[5, 6, 7, 8, 9]
// console.log(testArray); //[0, 3, 4, "a", "b", "c", 10]
// console.log(testArray.splice(-4, 0, "d", "e", "f"));//[]
// console.log(testArray); //[0, 3, 4, "d", "e", "f", "a", "b", "c", 10]

//slice -- копирует, а не вырезает

// console.log(testArray.slice(2, 5)); //[2, 3, 4] -- с первого индекса по последний не включительно
// console.log(testArray); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] - исходный не поменялся
// let newArr3 = testArray.slice();
// console.log(newArr3); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] -- полная копия
// console.log(newArr3 === testArray); //false

//concat -- конкатенация массивов

// console.log([1, 2, 3].concat(["a", "b", "c"], 4, 5, 6, { name: "Barsik" })); //[1, 2, 3, "a", "b", "c", 4, 5, 6, {…}]

//indexOf, lastIndexOf, includes -- для примитивов, в скобках пишется значение
//find, findIndex - для объектов, в скобках пишется функция
//filter -- фильтрует (функция)
//map -- преобразует массив поэлементно
//sort -- сортирует. Но осторожно с цифрами

// console.log([5, 1, "b", "a", 16, 4].sort((a, b) => a - b)); //[1, 5, "b", "a", 4, 16]

//reduce --накапливает результат

//Проверка на массивность:
// console.log(Array.isArray([1, 2, 3])); //true
// console.log(Array.isArray({ name: [1, 2, 3] })); //false

//Выравнивание вложенных массивов:
// console.log(
//   [
//     [1, 2],
//     [
//       [
//         [3, 4],
//         [5, 6],
//       ],
//       [7, 8],
//     ],
//     [9, 10],
//   ].flat(Infinity)
// );

//Задача 1:

//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

let camelize = (str) => {
  str = str.split("-").map((item, index) => {
    return (item = index === 0 ? item : item[0].toUpperCase() + item.slice(1));
  });
  return str.join("");
};
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

//Задача 2:

//Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.

let filterRange = (arr, a, b) => {
  return arr.filter((item) => item >= a && item <= b);
};

let initArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(filterRange(initArr, 3, 8)); //[3, 4, 5, 6, 7, 8]
// console.log(initArr); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

//Задача 3:
//Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b.
// То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

let filterRangeInPlace = (arr, a, b) => {
  arr.forEach((item, index) => {
    if (item < a || item > b) {
      arr.splice(index, 1);
    }
  });
};

filterRangeInPlace(initArr, 2, 8);
// console.log(initArr); //[2, 3, 4, 5, 6, 7, 8]

//Задача 4:

//Сортировать в порядке по убыванию
// let arr3 = [5, 2, 1, -10, 8];
// console.log(arr3.sort((a, b) => b - a));

//Задача 5:
//У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let copySortedArr = (arr) => {
  return arr.slice().sort((a, b) => a - b);
};

let arr4 = ["HTML", "JavaScript", "CSS"];
let arr5 = [10, 5, 69, 41, 2, 8, -9];

// console.log(copySortedArr(arr4)); //["HTML", "JavaScript", "CSS"]
// console.log(arr4); //["HTML", "JavaScript", "CSS"]
// console.log(copySortedArr(arr5)); //[-9, 2, 5, 8, 10, 41, 69]
// console.log(arr5);//[10, 5, 69, 41, 2, 8, -9]

//Задача 6

//Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа
// "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат.
// Метод должен понимать плюс + и минус -.

//Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
// Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:

let Calculator = function () {
  this.calculate = function (str) {
    let arr = str.split(" ");
    let a = +arr[0];
    let b = +arr[2];
    let operator = arr[1];
    return this.methods[operator](a, b);
  };
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
};

let calc = new Calculator();

calc.addMethod("/", (a, b) => a / b);
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("**", (a, b) => a ** b);

//Задача 7:

//У вас есть массив объектов user, и в каждом из них есть user.name.
// Напишите код, который преобразует их в массив имён.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];
let names = users.map((user) => user.name);
// console.log(names);

//Задача 8:

//У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и
// fullName, где fullName – состоит из name и surname.

let marina = { name: "Марина", surname: "Пупкина", id: 1 };
let nikita = { name: "Никита", surname: "Иванов", id: 2 };
let alex = { name: "Алекей", surname: "Петров", id: 3 };

let users2 = [marina, nikita, alex];

let usersMapped = users2.map((item) => {
  return { id: item.id, fullName: `${item.name} ${item.surname}` };
});

// console.log(usersMapped);

//Задача 9:
//Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

let maxim = { name: "Максмм", age: 25 };
let stepan = { name: "Степан", age: 30 };
let veronika = { name: "Вероника", age: 28 };

let arr2 = [maxim, stepan, veronika];

let sortByAge = (arr) => {
  return arr.sort((a, b) => a.age - b.age);
};
// console.log(sortByAge(arr2));

//Задача 10:
//Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

let arr3 = ["a", "b", "c", "d", "e", "f"];

let shuffleArr = (arr) => {
  arr.forEach((item, index) => {
    let pos = Math.floor(Math.random() * arr.length);
    [arr[pos], arr[index]] = [arr[index], arr[pos]];
  });
  return arr;
};
// console.log(shuffleArr(arr3));
//Почемку вместо arr[index] не прокатило item?

//Задача 11:
//Напишите функцию getAverageAge(users), которая принимает массив объектов
// со свойством age и возвращает средний возраст.

let lolita = { name: "Лолита", age: 25 };
let margarita = { name: "Маргарита", age: 30 };
let nikolai = { name: "Николай", age: 29 };

let averageArr = [lolita, margarita, nikolai];

let getAverageAge = (arr) => {
  let ages = arr.reduce((accum, current) => accum + current.age, 0); //почему не прокатило без нуля?
  return ages / arr.length;
};

// console.log(getAverageAge(averageArr));

//Задача 12:
//Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

let unique = (arr) => {
  let res = [];
  arr.forEach((item) => {
    if (!res.includes(item)) {
      res.push(item);
    }
  });
  return res;
};

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];
// console.log(unique(strings));

//Перебираемые объекты (очень сложна)

let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        return this.current <= this.last
          ? { done: false, value: this.current++ }
          : { done: true };
      },
    };
  },
};

for (let num of range) {
  console.log(num);
}
