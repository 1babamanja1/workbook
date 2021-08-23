//Флаги и дескрипотры свойств

//Флаги свойств объектов:

//writable -- если false, то только для чтения
//enumerable -- если true, перечисляется в циклах
//configurable -- если true, свойство можно удалить, а атрибуты изменять.

//По дефолту всё -- true

let obj = {
    name: "name",
};

// console.log(Object.getOwnPropertyDescriptor(obj, "name")); //{value: "name", writable: true, enumerable: true, configurable: true}
obj.name = "not name";
// console.log(obj); //{name: "not name"} -- перезапись работает

//Отключим:
Object.defineProperty(obj, "name", {writable: false});
// console.log(Object.getOwnPropertyDescriptor(obj, "name")); //{value: "name", writable: false, enumerable: true, configurable: true}
obj.name = "name";
// console.log(obj); //{name: "not name"} -- пеоезапись не работает

//Можно через defineProperty создать новое свойство с заданными флагами.

Object.defineProperty(obj, "newProp", {value: "new Val", writable: true});
// console.log(obj); //{name: "not name", newProp: "new Val"}
// console.log(Object.getOwnPropertyDescriptor(obj, "newProp")); //{value: "new Val", writable: true, enumerable: false, configurable: false}
//Флаги, которые не указали явно, стали false

//За одно посмотрим, как работает enumerable: false
for (let item in obj) {
    // console.log(item); //name --> newProp в цикл не попало.
}
// console.log(Object.keys(obj)); //["name"] --> тоже не попало.

//Неконфигурируемое свойство -- замораживает флаги раз и навсегда, ничего нельзя будт поменять.
// Object.defineProperty(obj, "newProp", { configurable: true }); //Uncaught TypeError: Cannot redefine property: newProp

//Object.defineProperties позволяет менять сразу несколько свойств
Object.defineProperties(obj, {
    lastName: {value: "Smith", writable: true},
    age: {value: 55, configurable: true},
    hasPet: {value: true, enumerable: true},
});
// console.log(Object.getOwnPropertyDescriptors(obj)); //{name: {…}, newProp: {…}, lastName: {…}, age: {…}, hasPet: {…}}
//Получили всё сразу

//Есть методы, который запечатывают не конкретное свойство, а объект целиком:

let objExt = {name1: "value1"};
Object.preventExtensions(objExt); //Запрещает добавлять новые свойства
objExt.surname = "Ivanov";
// console.log(objExt); //{name1: "value1"}

let objSeal = {name2: "value2"};
Object.seal(objSeal);
delete objSeal.name2;
// console.log(objSeal); //{name2: "value2"} //Запрещает удаление свойств

objSeal.name3 = "new Val";
// console.log(objSeal); //{name2: "value2"} // Запрещает добавление свойств

// console.log(Object.getOwnPropertyDescriptors(objSeal)); //configurable: false; enumerable: true; value: "value2"; writable: true
//Устанавливает всем сществующим свойствам configurable: false

let objFreeze = {name3: "value3"};
Object.freeze(objFreeze); //Запрещает всё: удалять, добавлять, изменять. Устанавливает configurable: false, writable: false

//Проверить объект на наличие метода:

// console.log(Object.isExtensible(objExt)); //false -- не расширяемо
// console.log(Object.isSealed(objSeal)); //true -- запечатано
// console.log(Object.isFrozen(objFreeze)); //true -- заморожено
