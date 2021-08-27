//Promise API

//Promise.all([promises]) - обработает массив промисов, вернёт массив результатов

// let promises = Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve("one"), 3000)),
//   new Promise((resolve) => setTimeout(() => resolve("two"), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve("three"), 1000)),
// ]).then(console.log); //["one", "two", "three"]
//Промисы обрабатываются по порядку, независимо от таймаута

//Если один упадёт, то всё упадёт:
// let promises2 = Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve("one"), 3000)),
//   new Promise((resolve) => setTimeout(() => reject("two"), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve("three"), 1000)),
// ]).then(console.log); //Uncaught ReferenceError: reject is not defined

//Часто прогоняют через map

// let names = ["iliakan", "remy", "jeresig"];
// let requests = names.map((name) =>
//   fetch(`https://api.github.com/users/${name}`)
// );
//
// Promise.all(requests)
//   .then((responses) => {
//     for (let resp of responses) {
//       console.log(`${resp.url}: ${resp.status}`);
//     }
//     return responses;
//   })
//   .then((resp) => Promise.all(resp.map((res) => res.json())))
//   .then((users) => users.forEach((user) => console.log(user.name)));

// let urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
//   "https://no-such-url",
// ];
//
// Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
//   console.log(results);
// });
//0: {status: "fulfilled", value: Response}
// 1: {status: "fulfilled", value: Response}
// 2: {status: "rejected",

//Promise.race -- вернёт самый быстрый результат
