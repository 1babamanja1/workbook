// Копирование объектов и ссылки

// Объект копируется по ссылке, обе ссылки изменяют объект:
let one = { first: 1 };
let two = one;
// console.log(one === two) //--> true

two.letter = "a";
//console.log(one) --> {first: 1, letter: "a"}

//Объекты сравниваются по ссылке:
let three = { first: 1 };
//console.log(one === three) //--> false

//Клонирование объекта (разные ссылки, однаковые внутренности)
let clone = {};
for (let elem in two) {
  clone[elem] = two[elem];
}
//console.log(clone) //--> {first: 1, letter: "a"}
//console.log(clone === two) //--> false

//Object.assign -- тоже клонирует свойства одного объекта в другой

let assignClone = Object.assign({}, menu, salaries, two);
//console.log(assignClone) //--> свойства трёх последних объектов скопировались в первый

// Вопрос: на https://learn.javascript.ru/object-copy
// Синтаксис такой: Object.assign(dest, [src1, src2, src3...])
// У меня после такой записи получился объект объектов:

let assignClone2 = Object.assign({}, [menu, salaries, two]);
//console.log(assignClone2) //--> {0: {…}, 1: {…}, 2: {…}}
//В учебнике ошибка или я что-то не так делаю? На MDN квадратных скобок нет.

//Глубокое клонирование
//Если в объекте есть ссылки на другие объекты, то описанными выше методами
//клонирование не получится:

let complObj = {
  innerObj: {
    hello: "world",
  },
  innerPrime: "I am prime",
};

let complCopy = Object.assign({}, complObj);
//console.log(complObj === complCopy) //--> false
//console.log(complObj.innerObj === complCopy.innerObj) //--> true

//Поэтому надо глубокое клонирование:
//  а) метод .cloneDeep(obj) из библиотеки lodash
//  б) Рекурсия:

let deepClone = (objFrom) => {
  let newObj = {};
  for (let elem in objFrom) {
    if (typeof objFrom[elem] === "object") {
      newObj[elem] = deepClone(objFrom[elem]);
    } else newObj[elem] = objFrom[elem];
  }
  return newObj;
};
let newCompl = deepClone(complObj);

// console.log(complObj === newCompl) //--> false
// console.log(complObj.innerObj === newCompl.innerObj) //--> false

//Копирование функцй -- посмотреть/подумать
