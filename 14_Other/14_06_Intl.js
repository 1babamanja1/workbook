//Intl

//Задача 1:

//Используя Intl.Collator, отсортируйте массив:
let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let sorter = Intl.Collator(["ru"]);

animals.sort(sorter.compare);
console.log(animals); //АИСТ,ёж,енот,ехидна,тигр,ЯК
