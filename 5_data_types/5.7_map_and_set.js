//Map и Set

//Map похож на Object, только ключом может быть что угодно:

let testMap = new Map();
testMap
    .set("key", "value")
    .set({name: "key"}, "value")
    .set(["k", "e", "y"], "value")
    .set(() => {
        console.log("key");
    }, "value");

// console.log(testMap);

//Методы и свойства:
// get
// has
// delete
// clear
// size

//Для перебора:
//keys
//values
//entries -- возвращает пару []лючб значение (по дефолту в for of)
//Перебор в том же порядке, что и добавление
//Для map тоже есть метод forEach

//Map можно задать с помощью двумерного массива

let newMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"],
]);

// console.log(newMap)

//Map из объекта:

let objToMap = {
    name: "Sara",
    age: 45,
    married: true,
};

let mapFromObj = new Map(Object.entries(objToMap));
// console.log(mapFromObj);

//Обратная операция:

let objFromMap = Object.fromEntries(mapFromObj);
// console.log(objFromMap)

//Set - множество значений без ключей, но уникальных
//Основные методы:
//new Set(iterable)
//set.add (возвр set)
//set.delete(val)
//set.has(val) (возвр boolean)
//set.clear
//set.size

//Перебирается с помощью for of и forEach(value, valueAgain, set) -- нет ключа

//Задача 1:
//Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

let values = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
];

let newSet = new Set(values);
// console.log(Array.from(newSet)); //["Hare", "Krishna", ":-O"]

//Задача 2:
//Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

let arr6 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
let arr7 = arr6.map((item) => {
    return item.split("").sort().join("").toLowerCase();
});
let newMap3 = new Map();
for (let i = 0; i < arr6.length; i++) {
    newMap3.set(arr7[i], arr6[i]);
}
// console.log(Array.from(newMap3.values()));

//Задача 3:

//Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
// Но это не выходит:
let map = new Map();

map.set("name", "John");
let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
// keys.push("more");

//Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
// console.log(keys); //MapIterator{"name"} -- это не массив, у него нет метода push

let keys2 = Array.from(map.keys());
keys2.push("more");
// console.log(keys2);//["name", "more"]