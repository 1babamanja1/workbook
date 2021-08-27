//Цепочка промисов
let outerRes;
new Promise((resolve) => setTimeout(resolve(15), 1000))
    .then((result) => result * 2)
    .then((result) => result - 4)
    .then((result) => (outerRes = result * 12)); //312

// setTimeout(() => {
//   console.log(outerRes);
// }, 0);

let getData = fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((res) => res);

//Задача 1:
//Являются ли фрагменты кода ниже эквивалентными?
// Другими словами, ведут ли они себя одинаково во всех обстоятельствах, для всех переданных им обработчиков?

//promise.then(f1).catch(f2);

//promise.then(f1, f2);

//Нет, не являются. Если ошибка произойдёт в f1, то catch её поймает, а во втором случае не поймает.
