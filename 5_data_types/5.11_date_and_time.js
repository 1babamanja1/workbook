//Дата и время

//Создание

let firstDate = new Date();
// console.log(firstDate); //Wed Aug 18 2021 11:25:42 GMT+0300 (Moscow Standard Time) -- текущие дата/время
//Всё время обновляется подтекущее время.

let milliDate = new Date(0);
// console.log(milliDate); //Thu Jan 01 1970 03:00:00 GMT+0300 (Moscow Standard Time) -- начало времён

//Timestamp -- количество миллисекунд, прошедшее от начала времён.
//До начала времён всё с отрицательным знаком:

let date = new Date(2024, 10, 15);
let past = new Date(1100, 11, 24);
// console.log(date.getTime()); //1731618000000
// console.log(past.getTime()); //-27423712216000

// console.log(new Date(-27423712216000)); //Mon Dec 24 1100 00:00:00 GMT+0150 (Moscow Standard Time)

//Месяцы тоже считаются с нуля.
//Параметры даты идут от большого к малому. Обязательны только год и месяц

//Получение компонентов даты:

let testDate = new Date(1564684518458);
// console.log(testDate); //Thu Aug 01 2019 21:35:18 GMT+0300 (Moscow Standard Time)
// console.log(testDate.getFullYear()); //2019
// console.log(testDate.getMonth()); //7
// console.log(testDate.getDate()); //1
// console.log(testDate.getDay()); //4 -- день недели 0 - воскресенье
// console.log(testDate.getTime()); //1564684518458
// console.log(testDate.getHours()); //21
// console.log(testDate.getMinutes()); //35
// console.log(testDate.getSeconds()); //18
// console.log(testDate.getMilliseconds()); //458
// console.log(testDate.getTimezoneOffset()); //-180 --разница часовых поясов с UTC+0

//getUTCFullYear(), getUTCMonth(), getUTCDay() для часового пояса UTC+0

//Установка даты:
// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) -- тут в скобках таймстамп

//Есть всё то же самое с UTC, например, setUTCHours().

//Автоисправление: если задать какой-нибудь несуществующий параметр (напр, 13 месяц), то он
//перераспределится по остальным компонентам:

// console.log(new Date(2020, 10, 35)); //Sat Dec 05 2020 00:00:00 GMT+0300 (Moscow Standard Time)

//К числу преобразутся в миллисекундах:
// console.log(+new Date(2021, 11));//1638306000000

// console.log(Date.now());//1629278078575

//Benchmark -- функция измеряющая производительность

//Разбор строки с датой:
// console.log(new Date(Date.parse("2021-10-03 12:22:59.123+12:00"))); //Sun Oct 03 2021 03:22:59 GMT+0300 (Moscow Standard Time)

//Задача 1:
//Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
// console.log(new Date(2012, 1, 20, 3, 12));//Mon Feb 20 2012 03:12:00 GMT+0300 (Moscow Standard Time)

//Задача 2:
//Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

let getWeekDay = (date) => {
    let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return days[date.getDay()];
};
// console.log(new Date(564532));//Thu Jan 01 1970 03:09:24 GMT+0300 (Moscow Standard Time)
// console.log(getWeekDay(new Date(564532))); //ЧТ

//Задача 3:

//В Европейских странах неделя начинается с понедельника (день номер 1),
// затем идёт вторник (номер 2) и так до воскресенья (номер 7).
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let getLocalDate = (date) => {
    return date.getDay() === 0 ? 7 : date.getDay();
};

// console.log(getLocalDate(new Date(2012, 0, 3))); //2
// console.log(getLocalDate(new Date(2012, 0, 8))); //7

//Задача 4:

//Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:

let getDateAgo = (date, days) => {
    let milliDate = +date;
    let milliDays = days * 86400000;
    return new Date(milliDate - milliDays);
};
// console.log(getDateAgo(new Date(2021, 12, 22), 21));//Sat Jan 01 2022 00:00:00 GMT+0300 (Moscow Standard Time)

let date2 = new Date(2015, 0, 2);
// console.log(getDateAgo(date2, 1)); //(1 Jan 2015)
// console.log(getDateAgo(date2, 2)); //(31 Dec 2014)
// console.log(getDateAgo(date2, 365)); //(2 Jan 2014)

//Задача 5:
//Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
//
// Параметры:
// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

let getLastDayOfMonth = (year, month) => {
    let day = new Date(year, month + 1, 0);
    return new Date(day).getDate();
};

// console.log(getLastDayOfMonth(2021, 1)); //28
// console.log(getLastDayOfMonth(2012, 1)); //29

//Задача 6:

//Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
//Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

let getSecondsToday = () => {
    let milliNow = Date.now();
    let nowDay = new Date(milliNow);
    let zeroToday = new Date(
        nowDay.getFullYear(),
        nowDay.getMonth(),
        nowDay.getDate()
    ).getTime();
    return Math.floor((milliNow - zeroToday) / 1000);
};
// console.log(getSecondsToday());

//Задача 7:

//Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
//P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

let getSecondsToTomorrow = () => {
    let milliNow = Date.now();
    let nowDay = new Date(milliNow);
    let zeroTomorrow = new Date(
        nowDay.getFullYear(),
        nowDay.getMonth(),
        nowDay.getDate() + 1
    ).getTime();
    return Math.floor((zeroTomorrow - milliNow) / 1000);
};
// console.log(getSecondsToTomorrow());

//Задача 8:

//Напишите функцию formatDate(date), форматирующую date по следующему принципу:
//Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

let formatDate = (date) => {
    let old = new Date(date);
    let now = Date.now();
    let differ = (now - date) / 1000;
    switch (true) {
        case differ < 1:
            return "Прямо сейчас";
        case differ < 60:
            return `${differ} секунд назад`;
        case differ < 3600:
            return `${Math.floor(differ / 60)} минут назад`;
        default:
            return `${old.getDate()}.${old.getMonth()}.${old.getFullYear()}, ${old.getHours()}:${old.getMinutes()}`;
    }
};

// console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
// console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
// console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
// console.log(formatDate(new Date(new Date() - 86400 * 1000)));
