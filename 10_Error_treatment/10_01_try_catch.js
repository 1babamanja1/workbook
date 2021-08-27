//Обработка ошибок

//Чтобы при ошибке всё не падало

// try {
//   console.log("Do try");
//   func();
//   console.log("Continue try");
// } catch (e) {
//   console.log("Oops, error"); //Do try; Oops, error
// }

//Try/catch работает синхронно и отложенную ошибку не поймает

// try {
//   setTimeout(() => {
//     err;
//   }, 0);
// } catch (e) {
//   console.log("Error"); //Uncaught ReferenceError: err is not defined
// }

//Чтобы сработало, try/catch должен быть внутри асинхрона

// setTimeout(() => {
//   try {
//     err();
//   } catch (e) {
//     console.log("Errorw"); //Errorw
//   }
// }, 1200);

//Свойства объекта ошибки:

// try {
//   err();
// } catch (e) {
//   console.log(e.name); //ReferenceError
//   console.log(e.message); //err is not defined
//   console.log(e.stack); //ReferenceError: err is not defined at index.js:36
// }

//Если нам не нужен объект ошибки, его можно опустить:

// try {
//   err();
// } catch {
//   console.log("Err"); //Err
// }

//Создание своей ошибки

// let customErr = new Error("OMG-error");
// try {
//   throw customErr;
// } catch (e) {
//   console.log(e); //Error: OMG-error
// }

//Проброс исключения

//Желательно использовать try/catch для отлова ошибок, под которые он сделан
//Поэтому остальные ошибки надо игнорировать))0)

let badJson = '{"age": 30}'; //не хватает name

// try {
//     let user = JSON.parse(badJson);
//     doError(); //Левая функция
// } catch (error) {
//     console.error("JSON error: " + error);
// }
//JSON error: ReferenceError: doError is not defined -- проблема не в жсоне

// function outerErr() {
//   try {
//     let user = JSON.parse(badJson);
//
//     if (!user.name) {
//       throw new Error("name field is empty");
//     }
//     console.log(user.name);
//     doError(); //Левая функция -- важно, на какой она строке
//   } catch (error) {
//     if (error.name === "Error") {
//       console.error("JSON Error: " + error);
//     } //Этот кэтчер поймает ошибку, если JSON-ошибка будет первая
//     else throw error;
//   } finally {
//     console.log("All Done"); //All Done
//   }
// }

try {
    outerErr();
} catch (e) {
    console.error("Outer catcher find " + e); //Outer catcher find ReferenceError: doError is not defined
}
//Этот кэтчер поймает ошибку, если левая функция будет первая

//Задача 1:
//Сравните два фрагмента кода.
// Первый использует finally для выполнения кода после try..catch:

//try {
//   начать работу
//   работать
// } catch (e) {
//   обработать ошибку
// } finally {
//   очистить рабочее пространство
// }

//Второй фрагмент просто ставит очистку после try..catch:

//try {
//   начать работу
//   работать
// } catch (e) {
//   обработать ошибку
// }
// очистить рабочее пространство

//Нам определённо нужна очистка после работы, неважно возникли ошибки или нет.
// Есть ли здесь преимущество в использовании finally или оба фрагмента кода одинаковы?
// Если такое преимущество есть, то дайте пример, когда оно проявляется.

//Если мы выйдем из try/catch через return или throw, то finally выполнится.
