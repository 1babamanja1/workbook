//Остаточные параметры и оператор расширения

let showAll = (...arr) => {
    console.log(arr);
};

// showAll(1, 2, 3, "fjf", 56, true); //[1, 2, 3, "fjf", 56, true]

let showArgs = function () {
    console.log(arguments.length);
};

showArgs(1, 2, 3, "fjf", 56, true); //6; со стрелочной не прокатило. Видимо, arguments лежит в контексте

//Оператор расширения -- наоборот, разворачивает массив:

let arr = [1, 2, 3, 4];
console.log(Math.min(...arr)); //1

//Можно так объединить массивы

let arr2 = ["dfg", "wfr", "cfe"];
console.log([...arr, ...arr2]); //[1, 2, 3, 4, "dfg", "wfr", "cfe"]

//Можно разбивать итерируемые объекты:

console.log([..."Привет"]); //"П", "р", "и", "в", "е", "т"]
