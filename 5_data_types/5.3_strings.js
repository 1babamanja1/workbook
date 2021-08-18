//Строки
//С кавычками всё понятно, лень писать

//Спецсимволы: экранируются обратным слешем:
//
// console.log("Привет \n друг"); //Привет
// //                                друг --> перенос строки

// console.log("Привет \" ' друг"); //Привет " ' друг --> экранирование кавычек
// console.log("Привет, \\ друг"); //Привет, \ друг --> экранирование слеша
// console.log("Привет \t друг"); //Привет 	 друг --> tab
// console.log("Привет, \xDD друг"); //Привет, Ý друг --> hexadecimal юникод
// console.log("Привет, \u1234  друг"); //Привет, ሴ  друг --> UTF-16
// console.log("Привет, \u{AFAD} друг"); //Привет, 꾭 друг --> UTF-32

// Длина строки:

// console.log("Привет, \u{AFAD} друг".length); // --> 14, всё под слешом -- один символ

// //Найти символ на позиции:

// console.log("Привет, \u{AFAD} друг"[4]); //--> e; Если символа на полизии нет, вернёт undefined
// console.log("Привет, \u{AFAD} друг".charAt(5)); //--> т; Если символа на полизии нет, вернёт пустую строку

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
