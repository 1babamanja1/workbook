//Геттеры и сеттеры

//это функции - аксессоры, которые помогают получать (get)
//или задавать (set) свойства объекта:

let obj = {
    name: "Boris",
    lastName: "Britva",
    get fullName() {
        return `${this.name} ${this.lastName}`;
    },
    set fullName(fullName) {
        [this.name, this.lastName] = fullName.split(" ");
    },
};

// console.log(obj.fullName); //Boris Britva
// console.log(obj);
// obj.fullName = "Donald Trump";
// console.log(obj.name); //Donald
// obj.name = "Melania";
// console.log(obj.fullName); //Melania Trump

//Геттеры/сеттеры для проверки поля
let user = {
    _ageToCheck: undefined,
    set age(val) {
        this._ageToCheck = val > 0 ? val : "Less than 0";
    },
    get age() {
        return this._ageToCheck;
    },
};

user.age = -4;
// console.log(user.age); //Less than 0

user.age = 8;
// console.log(user.age); //8

//Геттеры/сеттеры для совместимости
//Хранить age в нынешнем виде не очень удобно, так как
//возраст имет свойство меняться.
//Поэтому сделаем поле birthYear:

function UserMaker(age) {
    this.age = age;
    Object.defineProperty(this, "birthYear", {
        get() {
            let nowYear = new Date().getFullYear();
            return nowYear - this.age;
        },
    });
}

let newUser = new UserMaker(15);
console.log(newUser.birthYear); //2006
