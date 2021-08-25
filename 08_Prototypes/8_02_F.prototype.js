//F.prototype

//F.prototype = newObj:
//Для F newObj -- просто свойство
// Для детей F, созданных через new, newObj будет прототипом

let objForProto = {
    name: "Lady Bug",
};

function ObjMaker(age) {
    this.age = age;
}

ObjMaker.prototype = objForProto;

let newObj = new ObjMaker(15);

// console.log(ObjMaker); //ƒ ObjMaker(age) {this.age = age;}
// console.log(newObj); //ObjMaker{age: 15}
// console.log(newObj.__proto__); //{name: "Lady Bug"}

function Func(name) {
    this.name = `${name} Sergey`;
}

// console.log(Func.prototype.constructor === Func); //true -- прототип по умолчанию

//Если мы не знаем, какой конструктор использовался для создания объекта, но хотим такой же:

let newPyotr = new Func("Pyotr");
let newAlexey = new newPyotr.constructor("Alexey");
// console.log(newAlexey);//Func{name: "Alexey Sergey"}

//constructor легко потерять, поэтому не надо перезаписывать prototype.
//лучше добавлять свойства

Func.prototype.angry = false;
// console.log(newAlexey.__proto__);//{angry: false, constructor: ƒ}

//Либо конструктор можно вернуть явно:
// console.log(ObjMaker.prototype.constructor === ObjMaker); //false
ObjMaker.prototype.constructor = ObjMaker;
// console.log(ObjMaker.prototype); //{name: "Lady Bug", constructor: ƒ}

//Задача 1:

//В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
// Сначала у нас есть такой код:

function Rabbit() {}

Rabbit.prototype = {
    eats: true,
};

let rabbit = new Rabbit();

//Изменения делаются не по порядку, а по одному:

// Rabbit.prototype = {};
// console.log(rabbit.eats); //true -- создание нового прототипа не трогает созданный объект. Трогает только "мутация" (тк там всё -- ссылки)

// Rabbit.prototype.eats = false;
// console.log(rabbit.eats); // false -- прототипу задано новое значение

// delete rabbit.eats;
// console.log(rabbit.eats); // true -- eats удалилось у rabbit, но осталось у прототипа

// delete Rabbit.prototype.eats;
// console.log(rabbit.eats); // undefined -- свойство удалилось у прототипа

//Задача 2:
//Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором –
// мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.
// Можем ли мы сделать так?

//let obj2 = new obj.constructor();

//Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.

function Obj() {
    this.name = "objName";
}

let obj = new Obj();
let obj2 = new obj.constructor();
// console.log(obj2); //Obj{name: "objName"}
