//Перебираемые объекты (очень сложна)

let range = {
    from: 1,
    to: 10,
    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,
            next() {
                //должен вернуть объект со свойством done: boolean
                return this.current <= this.last
                    ? {done: false, value: this.current++}
                    : {done: true};
            },
        };
    },
};

for (let num of range) {
    // console.log(num);
}
//Итерируемый объект -- объект с методом [Symbol.iterator]
//Псевдомассив -- объект, у которого есть индекcы и свойство length
//У [Symbol.iterator] должен быть метод next{} со свойством done и value
//Метод Array.from позволяет сделать массив из псевдомассива или итерируемого объекта
