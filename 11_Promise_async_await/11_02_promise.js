//Промисы

// let badPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("Oops")); //Uncaught (in promise) Error: Oops
//   }, 1000);
// });

let goodPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Gotcha");
  }, 1000);
});

// badPromise
//     .finally(() => {
//         console.log("Finally");//Finally
//     })
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error)) //Error: Oops

// goodPromise.then(
//   (result) => console.log(result),
//   (error) => console.error(error) //Gotcha
// );

//Задача 1:
//Что выведет код ниже?

let promise = new Promise(function (resolve, reject) {
  resolve(1);
  setTimeout(() => resolve(2), 1000);
});

promise.then(console.log); //1 -- первый выполнился и всё

//Задача 2:
//Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
// Функция delay(ms) должна возвращать промис, который перейдёт
// в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log(`Done in 3 seconds`));

//Задача 3:
//Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка
// таким образом, чтобы она возвращала промис, вместо того чтобы принимать в аргументы функцию-callback.
// Новое использование:

// function go() {
//   showCircle(150, 150, 100).then((div) => {
//     div.classList.add("message-ball");
//     div.append("Hello, world!");
//   });
// }
//
// function showCircle(cx, cy, radius) {
//   let div = document.createElement("div");
//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = cx + "px";
//   div.style.top = cy + "px";
//   div.className = "circle";
//   document.body.append(div);
//
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       div.style.width = radius * 2 + "px";
//       div.style.height = radius * 2 + "px";
//
//       div.addEventListener("transitionend", function handler() {
//         div.removeEventListener("transitionend", handler);
//         resolve(div);
//       });
//     }, 0);
//   });
// }
//
// showCircle(150, 150, 100).then((div) => {
//   div.classList.add("message-ball");
//   div.append("Hello, world!");
// });

//Какая-то срань.
