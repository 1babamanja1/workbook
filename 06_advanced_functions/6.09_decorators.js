//Декораторы и переадресация вызова

//Сделаем ресурсоёмкую, но стабильную функцию

function big(x) {
    let count = 0;
    for (let i = -100000000; i <= 100000000; i++) {
        count = Math.random();
    }
    return Math.floor(count) + x;
}

// console.log(big(10)); //Работает медленно, всегда возвращает x

//Чтобы не считать одно и то же каждый раз, закешируем:

function cacher(func) {
    //функция - декоратор, кэширующая обёртка
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) {
            console.log(`Значение ${x} уже есть в кэше`);
            return cache.get(x);
        }
        let res = func(x);
        cache.set(x, res);
        console.log(`В кэще ещё нет ${x}`);
        return res;
    };
}

big = cacher(big);

// console.log(big(4));
// console.log(big(5));
// console.log(big(4)); //горздо быстрее

//Без привязки контекста наш кэшер не сработает для методов объектов

let worker = {
    method() {
        return "I'm method inside object worker";
    },
    oneMoreBig(x) {
        let count = 0;
        for (let i = -100000000; i <= 100000000; i++) {
            count = Math.random();
        }
        return Math.ceil(count) + x + this.method();
    },
};

// console.log(worker.oneMoreBig(10)); //11I'm method inside object worker --> работает

//Завернём в кэшер

// worker.oneMoreBig = cacher(worker.oneMoreBig);
// console.log(worker.oneMoreBig(10)); //ошибка this.method is not a function

//Непон, куда делось this. В учебнике не понятно, в комментариях все плачут

//Переделаем кэшер:

function advancedCacher(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) {
            console.log(`Значение ${x} уже есть в кэше`);
            return cache.get(x);
        }
        let res = func.call(this, x); //вызывает функцию со своим this
        cache.set(x, res);
        console.log(`В кэще ещё нет ${x}`);
        return res;
    };
}

worker.oneMoreBig = advancedCacher(worker.oneMoreBig);
// console.log(worker.oneMoreBig(10)); //В кэще ещё нет 10; 11I'm method inside object worker --> работает

//Сделаем тяжёлую функцию с несколькими аргументами:

function multiBig(...args) {
    let count = 0;
    for (let i = -100000000; i <= 100000000; i++) {
        count = Math.random();
    }
    return Math.ceil(count) + args;
}

//Переделаем кэшер под это дело:

function multiAdvancedCacher(func) {
    let cache = new Map();
    return function (...args) {
        //непон чей это args
        let key = args.join();
        if (cache.has(key)) {
            console.log(`Значение ${key} уже есть в кэше`);
            return cache.get(key);
        }
        let res = func.call(this, args);
        cache.set(key, res);
        console.log(`В кэще ещё нет ${key}`);
        return res;
    };
}

multiBig = multiAdvancedCacher(multiBig);

// console.log(multiBig(2, 3, 5, 8)); //В кэще ещё нет 2,3,5,8; 12,3,5,8 --> работает

//Задача 1:

//Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.

function simpleWorker(a, b) {
    return `res = ${a + b}`;
}

function spy(func) {
    wrapper.calls = [];

    function wrapper(...args) {
        wrapper.calls.push([...args]);
        return func(...args);
    }

    return wrapper;
}

simpleWorker = spy(simpleWorker);

// console.log(simpleWorker(1, 2));
// console.log(simpleWorker.calls);
// console.log(simpleWorker(4, 5));
// console.log(simpleWorker.calls);
// console.log(simpleWorker(16, 56));
// console.log(simpleWorker.calls);

//Задача 2:
//Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

function delayed(a, b) {
    console.log(`Delayed ${a + b}`);
}

function delay(func, del) {
    return function (...args) {
        setTimeout(() => func(...args), del);
    };
}

let del1500 = delay(delayed, 1500);
// del1500(1, 8);

//Задача 3:

//Результатом декоратора debounce(f, ms) должна быть обёртка,
// которая передаёт вызов f не более одного раза в ms миллисекунд.
// Другими словами, когда мы вызываем debounce, это гарантирует,
// что все остальные вызовы будут игнорироваться в течение ms.

function debounce(func, delay) {
    let pause = false;
    return function (...args) {
        if (pause) return;

        func(...args);
        pause = true;
        setTimeout(() => {
            pause = false;
        }, delay);
    };
}

let deb1000 = debounce(delayed, 1000);

// setTimeout(() => deb1000(0, 0), 0);
// setTimeout(() => deb1000(0, 500), 500);
// setTimeout(() => deb1000(0, 1100), 1100);
// setTimeout(() => deb1000(0, 1500), 1500);

//Задача 4

//Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку,
// передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», игнорируются.
// Отличие от debounce – если проигнорированный вызов является последним во время «задержки», то он выполняется в конце.

function throttle(func, delay) {
    let pause = false;
    let lastFunc, lastArgs = null;
    return function (...args) {
        if (pause) {
            lastFunc = func;
            lastArgs = [...args];
            return;
        }

        func(...args);
        pause = true;

        setTimeout(() => {
            pause = false;
            if (lastFunc) lastFunc(...lastArgs);
            lastFunc = lastArgs = null;
        }, delay);
    };
}

let thr1000 = throttle(delayed, 1000);

// setTimeout(() => thr1000(0, 0), 0);
// setTimeout(() => thr1000(0, 500), 500); //Должна проигнорироваться.
// setTimeout(() => thr1000(0, 900), 900);
// setTimeout(() => thr1000(0, 1100), 1100);