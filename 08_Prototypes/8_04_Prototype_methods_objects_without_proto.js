//Методы прототипов, объекты без свойства __proto__

//Более современные методы на замену __proto__

let objProto = {
    name: "Jonson",
};

objForProto = Object.create(objProto, {
    sleep: {value: "deep"},
    nose: {value: "true"},
});
// console.log(objForProto); //{sleep: "deep", nose: "true"}

// console.log(Object.getPrototypeOf(objForProto)); //{name: "Jonson"}

let newObjProto = {
    lasName: "Baby",
};

Object.setPrototypeOf(objForProto, newObjProto);
// console.log(Object.getPrototypeOf(objForProto)); //{lasName: "Baby"}

// клон obj c тем же прототипом (с поверхностным копированием свойств)
let clone = Object.create(
    Object.getPrototypeOf(objForProto),
    Object.getOwnPropertyDescriptors(objForProto)
);
// console.log(clone); //{sleep: "deep", nose: "true"}
// console.log(Object.getPrototypeOf(clone));//{lasName: "Baby"}

//"Простейший" объект

//Если нам вдруг захочется ввести в качестве ключа '__proto__'
let objForPrime = {};

let key = "__proto__";
objForPrime[key] = "Some Value";
// console.log(objForPrime[key]); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ,…}
// Строка не стала прототипом, но тем не менее, её можно случайно перезаписать

//Чтобы использовать __proto__  в качестве ключа, можно использовать Map
//или создать чистый, "простейший" массив

let simpleDimple = Object.create(null);
simpleDimple.__proto__ = "Four";
// console.log(simpleDimple); //{__proto__: "Four"} //__proto__ просто как ключ
