//Прототипное наследование:
let animal = {
    eats: true,
};

let rabbit = {
    jump: "high",
};

// console.log(rabbit.eats); //undefined
rabbit.__proto__ = animal;
// console.log(rabbit.eats);//true

//Геттеры-сеттеры тоже наследуются

let user = {
    name: "Benedict",
    lastName: "Cumberbatch",

    get fullName() {
        return `${this.name} ${this.lastName}`;
    },

    set fullName(val) {
        [this.name, this.lastName] = val.split(" ");
    },
};

let user2 = {
    __proto__: user,
    age: 40,
};

// console.log(user2.fullName); //Benedict Cumberbatch
user2.fullName = "Battlefield Overwatch";
// console.log(user2.name); //Battlefield
// console.log(user.name);//Benedict

//Цикл for...in бегает по прототипным свойствам тоже:
// for (let item in rabbit) console.log(item); //jump; eats

//Проверить, собственное ли свойство или наследованное можно через
// console.log(rabbit.hasOwnProperty("eats")); //false
// console.log(rabbit.hasOwnProperty("jump")); //true
//Отсортировать можно циклом.

//Методы, унаследованные от оъекта Object -- enumerable, поэтому в цикл не попадают

//Задача 1:

//В приведённом ниже коде создаются и изменяются два объекта.
// Какие значения показываются в процессе выполнения кода?

let animal2 = {
    jumps: null,
};
let rabbit2 = {
    __proto__: animal2,
    jumps: true,
};

// console.log(rabbit2.jumps); // ? (1) true

delete rabbit2.jumps;

// console.log(rabbit2.jumps); // ? (2) null

delete animal2.jumps;

// console.log(rabbit2.jumps); // ? (3) undefined

//Задача 2:
//Задача состоит из двух частей.
// У нас есть объекты:

let head = {
    glasses: 1,
};

let table = {
    pen: 3,
    __proto__: head,
};

let bed = {
    sheet: 4,
    pillow: 2,
    __proto__: table,
};

let pockets = {
    money: 2000,
    __proto__: table,
};

//С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути:
// pockets → bed → table → head. Например, pockets.pen должно возвращать
// значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).

// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses
// или через head.glasses? При необходимости составьте цепочки поиска и сравните их.
//Ответ: быстрее через head, чтобы не бежать по цепочке прототипов.

// console.log(pockets.pen); //3
// console.log(bed.glasses);//1

//Задача 3:
//Объект rabbit наследует от объекта animal.
// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal3 = {
    eat() {
        this.full = true;
    },
};

let rabbit3 = {
    __proto__: animal3,
};

rabbit3.eat();
//Получит rabbit:

// console.log(rabbit3.full); //true
// console.log(animal3.full); //undefined

//Задача 4:
//У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

let hamster = {
    eat(food) {
        this.stomach.push(food);
    },
};

let speedy = {
    stomach: [],
    __proto__: hamster,
};

let lazy = {
    stomach: [],
    __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat("apple");
// console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
// console.log(lazy.stomach); // apple

//Разделила желудки хомяков.
