//Опциональная цепочка ?.
//Нужна для того, чтобы не выскакивала ошибка, если какого-то свойства в середине цепочки не существует.
//Свойство перед ?. становится необязательным. Свойств после ?. это не касается, этот знак надо дублировать.
//Если свойсто перед ?. не существует, вычисление останавливается с результатом undefined.

let dressRoom = {
    shelf1: "coat",
    shelf2: {
        subShelf1: "socks",
        subShelf2: "pants",
    },
};

delete dressRoom.shelf2;
// console.log(dressRoom.shelf2.subShelf1); Error
// console.log(dressRoom?.shelf2?.subShelf1); Undefined

//Переменная перед ?. должна быть объявлена, иначе будет ошибка
// console.log(notDeclared?.anyProp); --> Error notDeclared is not defined

//?.() вызывает потенциально несуществующий метод

let cat = {
    sayMeow: function () {
        console.log("meow");
    },
    "release claws": true,
};

let dog = {};

// cat.sayMeow?.(); --> meow
// dog.sayMeow?.(); --> ничего

// синтаксис ?.[] делает то же самое для свойств, для доступа к которым нужны []:

// console.log(cat?.["release claws"]); --> true
// console.log(dog?.["release claws"]); --> undefined

// Использовать ?. для записи глупо, и поэтому нельзя, так как мы пытаемся присводить значение несуществующему свойству.

// Тип данных Symbol()
// может использоваться в качетве ключа для свойства объекта. (Кроме строки и символа больше ничего не может)

let id = Symbol("id"); //description в скобках не обязателен и нужен только для кожаных мешков

//каждый символ уникален, даже если у них одинаковый description:
let id2 = Symbol("id");
// console.log(id === id2); --> false

//Символы не преобразуются в строки неявно; если попробовать, будет ошибка.
//Явно при помощи toString() можно

// alert(id); --> ошибка
// alert(id.toString()); --> Symbol(id)