//Преобразование объектов к примитивам:

let emptyObj = {};
let notEmptyObj = {
    name: "Object Name",
    count: 123,
};

// Логически объекты всегда true
// console.log(Boolean(notEmptyObj)); --> true
// console.log(Boolean(emptyObj)); --> true

//К строке неявно -- там, где ожидается строка:
// alert(notEmptyObj); --> [object Object]
let newerObj = {};
newerObj[notEmptyObj] = 14;
// console.log(newerObj); --> {[object Object]: 14}

//К строке явно:
// console.log(notEmptyObj.toString()); --> [object Object]

//К числу неявно -- при математических операциях (с плюсом осторожно) и сравнении больше/меньше
// console.log(+notEmptyObj); --> NaN
// console.log(emptyObj - notEmptyObj); --> NaN

// console.log(emptyObj + notEmptyObj); --> [object Object][object Object] -- произошла конкатенация

// К числу явно -- Number:
// console.log(Number(notEmptyObj)); --> NaN

//Настройка преобразования объекта:

let newObject = {
    name: "Name of the object",
    count: 123,
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case "number": {
                return this.count;
            }
            case "string": {
                return this.name;
            }
            case "default": {
                return -1; //Единственное правило -- возвращать примитив
            }
        }
    },
};

// alert(newObject); --> Name of the object
// console.log(+newObject); --> 123
// console.log(newObject + newObject); --> -2

//Более старая версия Symbol.toPrimitive -- toString() и valueOf(). Принцип такой же, только это не символы, а обычные методы
