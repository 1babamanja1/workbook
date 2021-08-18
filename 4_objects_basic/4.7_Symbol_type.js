//Свойства типа данных Symbol

//к символьным ключам сложно случайно обратиться или случайно перезаписать
//сторонняя программа может создать свой символьный ключ с таким же идентификатором, и он не перезапишется
//не забывать заключать символ в квадратные скобки:

let id4 = Symbol();

let obj = {
  id4: 123, //мы просто задали имя ключу без ссылки на переменную
  [id4]: 456, //теперь нормально
};

// console.log(obj); --> {id4: 123, Symbol(): 456}

// символы игнорируются циклом for...in:

let lizardId = Symbol();
let lizard = {
  name: "Nagajna",
  [lizardId]: 123,
  tail: true,
  food: "insects",
};

// for (let elem in lizard) {
//   console.log(lizard[elem]);
// } --> Nagajna true insects

//Но напряую можно:
// console.log(lizard[lizardId]); --> 123

//Object.keys тоже не покажет:
// console.log(Object.keys(lizard)); --> ["name", "tail", "food"]

//Глобальные символы:
//если нам нужно получить доступ к символу по его имени с гарантией, что это нужный символ, символ можно занести в реестр:

let idOne = Symbol.for("idishnik"); // --> такого ключа ещё нет, занесли в реестр
let idTwo = Symbol.for("idishnik"); // --> такой ключ уже есть, использовали его

// console.log(idOne === idTwo); //--> true

//Обратный Symbol.for(key) метод: Symbol.keyFor(sym) -- принимает символ, возвращает ключ
// console.log(Symbol.keyFor(idOne)); //--> idishnik

//Системные символы обещали разобрать в других главах
