//Объекты основы

//Вычисляемый ключ
let fruit = 'apple'
let bag = {
    [fruit]: 5 // --> bag {apple: 5} Чтобы добавить вычисляемый ключ, заворачиваем его в квадратные скобки.
}
// Свойство объекта из переменной

let newPet = (name, type, legs) => {
    return {
        name, // вместо name: name
        type,
        legs,
    }
}
let myDog = newPet('Bobik', 'dog', 4)

// Задание 1:
//1. Создайте пустой объект 'user'
let user = {};
//2. Добавьте свойство 'name' со значением 'John'
user.name = 'John';
//3. Добавьте свойство surname со значением Smith.
user.surname = 'Smith';
//4. Измените значение свойства name на Pete.
user.name = 'Pete';
//5. Удалите свойство name из объекта.
delete user.name;

//Задание 2:
//.Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

let isEmpty = (obj) => {
    let counter = 0
    for (let elem in obj) {
        counter++
    }
    return (Boolean(counter))
};
isEmpty({})


//Задание 3:
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
// Ответ: Да, потому что const защищает от перезаписи только всю переменную. Содержимое можно менять.

const user2 = {
    name: 'John'
}
user2.name = 'Pete'
//console.log(user2) --> {name: "Pete"}, всё работает

// user2 = {
//     name: 'Pete'
// } --> Выдаст ошибку


// Задание 4:

// У нас есть объект, в котором хранятся зарплаты нашей команды
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// Если объект salaries пуст, то результат должен быть 0.

let sumSalaries = (salaries) => {
    let sumSalaries = 0
    for (let worker in salaries) {
        sumSalaries += salaries[worker]
    }
    return sumSalaries
}

// Задание 5:
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

let multiplyNumeric = (obj) => {
    for (let elem in obj) {
        if (typeof obj[elem] === 'number') {
            obj[elem] *= 2
        }
    }
};

// Копирование объектов и ссылки

// Объект копируется по ссылке, обе ссылки изменяют объект:
let one = {first: 1}
let two = one
// console.log(one === two) --> true

two.letter = 'a'
//console.log(one) --> {first: 1, letter: "a"}

//Объекты сравниваются по ссылке:
let three = {first: 1}
//console.log(one === three) --> false

//Клонирование объекта (разные ссылки, однаковые внутренности)
let clone = {}
for (let elem in two) {
    clone[elem] = two[elem]
}
//console.log(clone) --> {first: 1, letter: "a"}
//console.log(clone === two) --> false

//Object.assign -- тоже клонирует свойства одного объекта в другой

let assignClone = Object.assign({}, menu, salaries, two)
//console.log(assignClone) --> свойства трёх последних объектов скопировались в первый

// Вопрос: на https://learn.javascript.ru/object-copy
// Синтаксис такой: Object.assign(dest, [src1, src2, src3...])
// У меня после такой записи получился объект объектов:

let assignClone2 = Object.assign({}, [menu, salaries, two])
//console.log(assignClone2) --> {0: {…}, 1: {…}, 2: {…}}
//В учебнике ошибка или я что-то не так делаю? На MDN квадратных скобок нет.


//Глубокое клонирование
//Если в объекте есть ссылки на другие объекты, то описанными выше методами
//клонирование не получится:

let complObj = {
    innerObj: {
        hello: 'world'
    },
    innerPrime: 'I am prime'
}

let complCopy = Object.assign({}, complObj)
//console.log(complObj === complCopy) --> false
//console.log(complObj.innerObj === complCopy.innerObj) --> true

//Поэтому надо глубокое клонирование:
//  а) метод .cloneDeep(obj) из библиотеки lodash
//  б) Рекурсия:

let deepClone = (objFrom) => {
    let newObj = {}
    for (let elem in objFrom) {
        if (typeof objFrom[elem] === 'object') {
            newObj[elem] = deepClone(objFrom[elem])
        } else
            newObj[elem] = objFrom[elem]
    }
    return newObj
}
let newCompl = deepClone(complObj)

// console.log(complObj === newCompl) --> false
// console.log(complObj.innerObj === newCompl.innerObj) --> false

//Копирование функцй -- посмотреть/подумать

//Сборка мусора

// Сборщик мусора НЕ может удалить:
// глобальные переменные
// локальные переменные и параметры функции
// переменные и параметры в цепочке вложенных вызовов
// Это были корни
// Всёб к чему нельзя добраться по цепочке от корней, удалится сборщиком мусора:

let petShelter = {
    cats: {
        firstCat: 'Bublik',
        secondCat: 'Persik',
    },
    dogs: {
        firstDog: 'Sharik',
        secondDog: 'Portos',
    }
}

//Всех животных забрали в хорошие руки:

// delete petShelter.cats
// delete petShelter.dogs
// console.log (petShelter.cats.firstCat) --> ошибка, в приюте их нет

//Заспавним их дома:

let firstHome = {homeCat1: petShelter.cats.firstCat, homeCat2: petShelter.cats.secondCat}
let secondHome = {homeDog1: petShelter.dogs.firstDog, homeDog2: petShelter.dogs.secondDog}

delete petShelter.dogs
delete petShelter.cats

// console.log(firstHome.homeCat1) --> Bublik, слава богу, он дома

//Может случайно образоватьсянедостижимый остров: объекты ссылаются друг на друга, но к ним ничего не ведёт от корня


// Методы объекта, 'this'
// Метод -- функция, которая находится в объекте в качестве свойства

let methodObject = {
    sayHi: function () {    // или просто sayHi(){}
        console.log('Hi')
    }
}
// methodObject.sayHi() --> Hi one

//Кроме того, можно сначала создать функцию, а потом добавить в методы:

function sayBye() {
    console.log('Bye')
}

methodObject.sayBye = sayBye //важно передавать без скобок, мы передаём ссылку, ничего не вызываем.

// console.log(methodObject) --> {sayHi: ƒ, sayBye: ƒ}


// "This"
// This отправляет нас к родительскому объекту для получения доступа к информации внутри этого объекта:
// Можно было бы сделать и thisObj.name вместо this.name, но при копировании объекта и перезаписи исходного
// произойдёт неприятность

let thisObj = {
    name: 'Object Name',
    sayWhoAreYou() {
        console.log(this.name)
        console.log(thisObj.name)
    }
}
// thisObj.sayWhoAreYou() --> 'Object Name/Object Name'

let newThisObj = thisObj

thisObj = {}

// newThisObj.sayWhoAreYou() --> Object Name undefined

// Контекст выполнения

// Мы можем написать функцию с применением this вне объекта, это не будет ошибкой
// This для функции определяется в момент вызова

let firstUser = {name: 'Hanna'}
let secondUser = {name: 'Piotr'}

let sayHello = function () {
    console.log(this.name)
}

firstUser.sayHi = sayHello
secondUser.sayHi = sayHello

// firstUser.sayHi() --> Hanna
// secondUser['sayHi']() --> Piotr

//Если вызовем this вне объекта, получим undefined (если use strict -- ошибку)

//Как работает obj.method()
// Сперва . возвращает метод, потом () его выполняют














