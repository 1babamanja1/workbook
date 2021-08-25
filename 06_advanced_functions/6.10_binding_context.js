//Привязка контекста

//Задача 1:

//Что выведет функция?

// function f() {
//   console.log(this); // ?
// }
//
// let user = {
//   g: f.bind(null),
// };

// user.g(); //window, т.к. нет привязки

//Задача 2:

//Что выведет этот код?

function f() {
    console.log(this.name);
}

f = f.bind({name: "Вася"}).bind({name: "Петя"});
// f();
//Вася, перепривязать нельзя

//Задача 3:
//В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
function sayHi() {
    console.log(this.name);
}

sayHi.test = 5;
let bound = sayHi.bind({name: "Вася"});

// console.log(bound.test); // что выведет? почему?
//undefined --> bound -- новый объект без свойства test

//Задача 4:
//Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password === "rockstar") ok();
    else fail();
}

let user = {
    name: "Вася",

    loginOk() {
        console.log(`${this.name} logged in`);
    },

    loginFail() {
        console.log(`${this.name} failed to log in`);
    },
};

// askPassword(user.loginOk, user.loginFail);

//Непон. У меня всё работает. Вот тебе и колбэки

//Задача 5:

//Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

function askPassword2(ok, fail) {
    let password = prompt("Password?", "");
    if (password === "rockstar") ok();
    else fail();
}

let user2 = {
    name: "John",

    login(result) {
        console.log(this.name + (result ? " logged in" : " failed to log in"));
    },
};

askPassword(
    () => {
        user2.login(true);
    },
    () => {
        user2.login(false);
    }
);