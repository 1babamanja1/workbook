//Генераторы

function* newGenerator() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

let gen = newGenerator();
// console.log(gen); //newGenerator{<suspended>}
// console.log(gen.next()); //{value: 1, done: false}
// console.log(gen.next()); //{value: 2, done: false}
// console.log(gen.next()); //{value: 3, done: false}
// console.log(gen.next()); //{value: 4, done: true}

// for (let iter of gen) {
//   console.log(iter); // 1; 2; 3
// }

// let resSeq = [...newGenerator()];
// console.log(resSeq); //[1, 2, 3]

//Сделаем итератор при помощи функции-генератора

let range = {
  from: 1,
  to: 5,
  *[Symbol.iterator]() {
    for (let val = this.from; val <= this.to; val++) {
      yield val;
    }
  },
};

// console.log([...range]); //[1, 2, 3, 4, 5]

// Вложим генераторы один в другой

function* passGen(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePassword() {
  yield* passGen(48, 57);
  yield* passGen(65, 90);
  yield* passGen(97, 122);
}

let password = "";

for (let code of generatePassword()) {
  password += String.fromCharCode(code);
}

// console.log(password); //0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

//yield -- дорога в обе стороны

function* auf() {
  let res = yield "2+2 = ?";
  console.log(res);
  let res2 = yield "3+3 = ?";
  console.log(res2);
}

let wolf = auf();
wolf.next();
wolf.next(4);
wolf.next(9);

function* gen2() {
  try {
    let result = yield; // (1)
    console.log(
      "Выполнение программы не дойдёт до этой строки, потому что выше возникнет исключение"
    );
  } catch (e) {
    console.log(e); // покажет ошибку
  }
}

let generator2 = gen2();

let question = generator2.next().value;

generator2.throw(new Error("Ответ не найден в моей базе данных")); // (2)

//Задача 1:

//Создать функцию-генератор псевдослучайных чисел

function* pseudoRandom(seed) {
  let val = seed;
  while (true) {
    val = (val * 16807) % 2147483647;
    yield val;
  }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073
