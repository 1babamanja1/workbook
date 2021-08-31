//Прокси

let secretInfo = ["cats", "are", "the", "same", "cute", "as", "dogs"];

secretInfo = new Proxy(secretInfo, {
    get(target, pass) {
        if (pass === "doggo") return target;
        else return "It's a very secret info";
    },
});

// console.log(secretInfo["doggo"]); //["cats", "are", "the", "same", "cute", "as", "dogs"]
// console.log(secretInfo["catto"]); //It's a very secret info

//Валидация Set

let numberArr = [1, 2];

numberArr = new Proxy(numberArr, {
    set(target, prop, val) {
        if (typeof val === "number") {
            target[prop] = val;
            return true; //не забывать возвращать
        }
        else {
            console.log("Its not a number");
            return false;
        }
    },
});

// numberArr.push(6);
// console.log(numberArr); //Proxy {0: 1, 1: 2, 2: 6}
//
// try {
//   numberArr.push("six"); // Its not a number
// } catch (e) {
//   console.log(e.message); //'set' on proxy: trap returned falsish for property '3'
// }

//Object.keys

let user = {
    name: "John",
    surname: "Galt",
    _whoIs: "Secret",
};

user = new Proxy(user, {
    ownKeys(target) {
        return Object.keys(target).filter((key) => !key.startsWith("_"));
    },
});
// for (let key in user) console.log(key); //name; surname

//Защитим данные понадёжнее

let safeUser = {
    name: "John",
    surname: "Galt",
    _whoIs: "Secret",
};

safeUser = new Proxy(safeUser, {
    get(target, prop) {
        if (prop.startsWith("_")) {
            throw new Error("get access denied");
        }
        else {
            let value = target[prop];
            return typeof value === "function" ? value.bind(target) : value;
        }
    },

    set(target, prop, val) {
        if (prop.startsWith("_")) {
            throw new Error("set access denied");
        }
        else {
            target[prop] = val;
            return true;
        }
    },
    deleteProperty(target, prop) {
        if (prop.startsWith("_")) {
            throw new Error("delete access denied");
        }
        else {
            delete target[prop];
            return true;
        }
    },
    ownKeys(target) {
        return Object.keys(target).filter((key) => !key.startsWith("_"));
    },
});

//Защитилисб от всего, теперь попробуем взломать:

// try {
//   console.log(safeUser._whoIs);
// } catch (e) {
//   console.error(e.message); //get access denied
// }
//
// try {
//   safeUser._whoIs = true;
// } catch (e) {
//   console.error(e.message); //set access denied
// }
//
// try {
//   delete safeUser._whoIs;
// } catch (e) {
//   console.error(e.message); //delete access denied
// }
//
// for (let key in safeUser) console.log(key); // name; surname

//Задача 1:
//Обычно при чтении несуществующего свойства из объекта возвращается undefined.
// Создайте прокси, который генерирует ошибку при попытке прочитать несуществующее свойство.
let user3 = {
    name: "John",
};

function wrap(target) {
    return new Proxy(target, {
        get(target, prop, receiver) {
            if (typeof target[prop] === "undefined") {
                throw new Error("such prop is absent");
            }
        },
    });
}

user3 = wrap(user3);

console.log(user3.name); // John
console.log(user3.age); // Ошибка: т

//Задача 2:

//В некоторых языках программирования возможно получать элементы массива,
// используя отрицательные индексы, отсчитываемые с конца.

//let array = [1, 2, 3];
// array[-1]; // 3, последний элемент
// array[-2]; // 2, предпоследний элемент
// array[-3]; // 1, за два элемента до последнего

//Другими словами, array[-N] – это то же, что и array[array.length - N].
// Создайте прокси, который реализовывал бы такое поведение.

let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, prop, receiver) {
        if (prop < 0) {
            prop = +prop + target.length;
        }
        return Reflect.get(target, prop, receiver);
    },
});

// console.log(array[-1]); // 3
// console.log(array[-2]); // 2
