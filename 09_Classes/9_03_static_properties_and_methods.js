//Статические свойства и методы

class NewClass {
    static statMeth() {
        console.log(this);
    }
}

// NewClass.statMeth(); //class NewClass {...}

//По сути это то же самое, что
NewClass.staticMeth = function () {
    console.log(this);
};
// NewClass.staticMeth();//class NewClass {...}

//static методы применяются не внутри конкретный объектов, а поверх

class Article {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }

    static compare(artA, artB) {
        return artA.title > artB.title ? 1 : -1;
    }

    static createEmpty() {
        return new this("Без заголовка", `Без текста`);
    }
}

let articles = [
    new Article("DEF", "def"),
    new Article("GHI", "ghi"),
    new Article("ABC", "abc"),
];

// articles.sort(Article.compare);

// console.log(articles);
// 0: Article {title: "ABC", text: "abc"}
// 1: Article {title: "DEF", text: "def"}
// 2: Article {title: "GHI", text: "ghi"}
//Отсортировалось по алфавиту

//Static метод, чтобы создать пустую статью
let art = Article.createEmpty();
// console.log(art); //Article{title: "Без заголовка", text: "Без текста"}

//Статические свойства и методы наследуются

class SmallArticle extends Article {}

articles.push(SmallArticle.createEmpty());
console.log(articles); //(4)[Article, Article, Article, SmallArticle]

//Задача 1:
//Как мы уже знаем, все объекты наследуют от Object.prototype
// и имеют доступ к «общим» методам объекта, например hasOwnProperty.

class Rabbit2 {
    constructor(name) {
        this.name = name;
    }
}

let rabbit2 = new Rabbit2("Rab");

// метод hasOwnProperty от Object.prototype
console.log(rabbit2.hasOwnProperty("name")); // true

//Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться от обычного "class Rabbit"?
// В чем разница?
// Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

class Rabbit3 extends Object {
    constructor(name) {
        super();
        this.name = name;
    }
}

let rabbit3 = new Rabbit3("Кроль");

console.log(rabbit3.hasOwnProperty("name")); // true -- Done
