//JSON, toJSON --JS Object Notation

//Методы: JSON.stringify -- в строку
//JSON.parse -- обратно

//JSON поддерживает:
// Объекты
// Массивы
// Примитивы:
//    строки,
//    числа,
//    логические значения true/false,
//    null.

//JSON НЕ поддерживает:
// Свойства-функции (методы).
// Символьные свойства.
// Свойства, содержащие undefined.

// Вложения конвертируются
//Важно, чтобы не бло циклических ссылок (объекты, ссылающиеся друг на друга)

//Полный синтакис JSON.stringify:

let user = {
    name: "Ivan",
    age: 33,
    children: {
        lena: 8,
    },
    hasCar: true,
};
let user1 = {
    name: "Irina",
    age: 33,
    children: {
        lena: 8,
    },
    hasCar: true,
};
user.wife = user1;
user1.husband = user;

// console.log(JSON.stringify(user, ["children"])); //{"children":{}} даже внутреннее свойство не передалось
// console.log(JSON.stringify(user, ["children", "lena"])); //{"children":{"lena":8}} --теперь передалось и корректно

user.wife = user1;
user1.husband = user;

// console.log(JSON.stringify(user)); //ошибка -- цикличная ссылка
// console.log(
//   JSON.stringify(user, ["name", "age", "children", "lena", "hasCar"])//{"name":"Ivan","age":33,"children":{"lena":8},"hasCar":true}
// ); --работает

//Чтобы всё не перечислять, можно использовать функцию:

// console.log(
//   JSON.stringify(user, function replacer(key, value) {
//     return key === "wife" ? undefined : value;
//   })
// ); //{"name":"Ivan","age":33,"children":{"lena":8},"hasCar":true} -- прокатило

// console.log(JSON.stringify(user, ["hasCar", "children", "lena"], 5));
//{
//      "hasCar": true,
//      "children": {
//           "lena": 8
//      }
// } --> space - количество пробелов-табуляций

//Можно задать объекту свой toJSON:

let example = {
    text: "I want to show this",
    badText: "I don'nt want anybody to see this",
    toJSON() {
        return this.text;
    },
};

let biggerExample = {
    text: "Show me",
    quantumNum: 4,
    example,
};

// console.log(JSON.stringify(example)); //"I want to show this"
// console.log(JSON.stringify(biggerExample)); //{"text":"Show me","quantumNum":4,"example":"I want to show this"}

//Полный синтаксис JSON.parse
//let value = JSON.parse(str, [reviver]);

//reviver -- функция, позволяющая настроить декодирование:

let datesObj = {
    date1: new Date(355561321),
    date2: new Date(645354321),
    date3: new Date(897456321),
};

// console.log(JSON.parse(JSON.stringify(datesObj))); //{date1: "1970-01-05T02:46:01.321Z", date2: "1970-01-08T11:15:54.321Z", date3: "1970-01-11T09:17:36.321Z"}
//Вернулись строки. А надо даты:

// console.log(
//   JSON.parse(JSON.stringify(datesObj), (key, value) => {
//     if (key.includes("date")) {
//       return new Date(value);
//     }
//     return value;
//   })
// );

//Задача 1:
//Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
//Сделала выше сорок раз

//Задача 2:
//В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.
// Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах.
// Поэтому можно проверять свойство по значению.
// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

let room = {
    number: 23,
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     return key !== "" && value === meetup ? undefined : value;
//   })
// );
