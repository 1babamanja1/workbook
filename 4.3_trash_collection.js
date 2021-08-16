//Сборка мусора

// Сборщик мусора НЕ может удалить:
// глобальные переменные
// локальные переменные и параметры функции
// переменные и параметры в цепочке вложенных вызовов
// Это были корни
// Всёб к чему нельзя добраться по цепочке от корней, удалится сборщиком мусора:

let petShelter = {
  cats: {
    firstCat: "Bublik",
    secondCat: "Persik",
  },
  dogs: {
    firstDog: "Sharik",
    secondDog: "Portos",
  },
};

//Всех животных забрали в хорошие руки:

// delete petShelter.cats
// delete petShelter.dogs
// console.log (petShelter.cats.firstCat) //--> ошибка, в приюте их нет

//Заспавним их дома:

let firstHome = {
  homeCat1: petShelter.cats.firstCat,
  homeCat2: petShelter.cats.secondCat,
};
let secondHome = {
  homeDog1: petShelter.dogs.firstDog,
  homeDog2: petShelter.dogs.secondDog,
};

delete petShelter.dogs;
delete petShelter.cats;

// console.log(firstHome.homeCat1) //--> Bublik, слава богу, он дома

//Может случайно образоватьсянедостижимый остров: объекты ссылаются друг на друга, но к ним ничего не ведёт от корня
