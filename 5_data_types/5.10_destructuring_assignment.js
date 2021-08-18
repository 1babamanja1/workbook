//Деструктурирующее присваивание

let arr8 = ["Hello ", "Its me"];
let [firstPhrase, secondPhrase] = arr8;
// console.log(firstPhrase + secondPhrase); //Hello Its me

let [firstName, , lastName] = "Harry Draco Potter".split(" ");
// console.log(lastName); //Potter

//Можно использовать любые итерируемые объекты:
let numbers = {};
[numbers.one, numbers.two, numbers.three] = "123";
// console.log(numbers); //{one: "1", two: "2", three: "3"}

//Выведем значения свойств numbers числами с помощью цикла с .entries:
for (let [key, value] of Object.entries(numbers)) {
    // console.log(+value);
}
//То же работает с Map:

let mapForDestruct = new Map([
    ["name", "Jack"],
    ["age", 50],
    ["children", false],
]);

for (let [key, value] of mapForDestruct) {
    // console.log(typeof value); // string number boolean
}

//Остаточные параметры "..."
//"Хвосты" можно поместить в переменную ...rest

let picasso =
    "Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso";
let [picassoFirstName, picassoSecondName, ...picassoRest] = picasso.split(" ");
// console.log(picassoRest.length); //18

//Значения по умолчанию:

let [userFirstName = "John", userLastName = "Doe"] = ["Mike"];
// console.log(userFirstName + " " + userLastName); //Mike Doe

//Деструктуризация объекта

let {item2, item1} = {item1: "Hello", item2: "Its me"};

let user = {
    name: "Jane",
    age: 45,
    hasCar: true,
};

let {name: n, age, hasPet, hasChildren: h = true} = user;

// console.log(n); //Jane
// console.log(hasPet);//undefined
// console.log(h);//true

//Остаток объекта

let hugeObj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    key5: "value5",
    key6: "value6",
};

let {
    key1: hugeDestr1,
    key2: hugeDestr2,
    key3: hugeDestr3,
    ...hugeDestrRest
} = hugeObj;
// console.log(hugeDestrRest); //{key4: "value4", key5: "value5", key6: "value6"}

//Без объявления переменной жс может перепутать деструктуризацию с блоком кода в {}

//Вложенная деструктуризация
//Если внутри объекта есть другой объектб его тоже можно деструктуризировать

let complexObj = {
    name: "John",
    pets: {
        petName1: "Bobik",
        petName2: "Murka",
    },
    age: 33,
    children: ["Nick", "Helena"],
};
let {
    name: userName,
    age: userAge,
    pets: {petName1: userPetName1, petName2: userPetName2},
    children: [child1, child2],
} = complexObj;

// console.log(userName); // John
// console.log(userAge); //33
// console.log(userPetName1); //Bobik
// console.log(userPetName2); //Murka
// console.log(child1);//Nick
// console.log(child2);//Helena

// console.log(pets);//ошибка

//свойства pets и children отсутствуют в списке переменных, тк мы взяли сразу их значения

//Умные параметры функций
//В качестве параметров функций можно передать деструктурированные переменные:

let sayInfoAboutUser = ({
                            name = "John",
                            age = 0,
                            pets: {petName1: pet1 = "unnamed Pet"},
                            profession = "unemployed",
                        }) => {
    console.log(`
  Hi! I'm ${name}, ${age} years old. I have a nice pet ${pet1}. I'm ${profession}
  `);
};

// sayInfoAboutUser(complexObj); //  Hi! I'm John, 33 years old. I have a nice pet Bobik. I'm unemployed

//Если нам надо все значения по умолчанию, надо передать пустой объект:
// sayInfoAboutUser({});// с собакой не прокатило

//Задача 1:

//У нас есть объект:

let user2 = {
    name: "John",
    years: 30,
};
//Напишите деструктурирующее присваивание, которое:
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

let {name, age: years, isAdmin = false} = user2;

// console.log(`name: ${name}, age: ${age}, is admin: ${isAdmin}`);

//Задача 2:
//У нас есть объект salaries с зарплатами:

let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

//Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

let topSalary = (salaries) => {
    let maxSalary = null;
    let maxPerson = undefined;
    for (let [person, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            maxPerson = person;
        }
    }
    return `Most of all get ${maxPerson}: ${maxSalary}`;
};
let empty = {};
// console.log(topSalary(salaries));
// console.log(topSalary(empty));