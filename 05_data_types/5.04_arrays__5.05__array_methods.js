//Массивы

//объявление:
let newArr = ["a", 2, () => {
}, {}]; //или пустой
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

let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 28};

let users = [vasya, petya, masha];
let names = users.map((user) => user.name);
// console.log(names);

//Задача 8:

//У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и
// fullName, где fullName – состоит из name и surname.

let marina = {name: "Марина", surname: "Пупкина", id: 1};
let nikita = {name: "Никита", surname: "Иванов", id: 2};
let alex = {name: "Алекей", surname: "Петров", id: 3};

let users2 = [marina, nikita, alex];

let usersMapped = users2.map((item) => {
    return {id: item.id, fullName: `${item.name} ${item.surname}`};
});

// console.log(usersMapped);

//Задача 9:
//Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

let maxim = {name: "Максмм", age: 25};
let stepan = {name: "Степан", age: 30};
let veronika = {name: "Вероника", age: 28};

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

let lolita = {name: "Лолита", age: 25};
let margarita = {name: "Маргарита", age: 30};
let nikolai = {name: "Николай", age: 29};

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