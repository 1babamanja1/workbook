//Промисы: обработка ошибок

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
// .catch((err) => console.error(err.message));

// fetch("blabla.com")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err.message)); // Unexpected token < in JSON at position 0

//Задача 1:
//Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Done"); // throw new Error("Whoops!");
    }, 1000);
}).then(console.log);

new Promise(function (resolve, reject) {
    setTimeout(() => {
        // throw new Error("Whoops!"); не сработает, тк setTimeout выкинет ошибку позже, чем catch сработает
        reject("Nope");
    }, 1000);
}).catch(console.log);
