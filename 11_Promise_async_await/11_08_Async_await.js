//Async/await
//Задача 1:

//Задача 1:
//Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

// async function loadJson(url) {
//   let response = await fetch(url);
//
//   if (response.status === 200) {
//     return await response.json();
//   } else throw new Error(response.status);
// }
//
// loadJson("no-such-user.json") // (3)
//   .catch(console.log); // Error: 404 at loadJson

//Задача 2:
//Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.
// В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = "HttpError";
        this.response = response;
    }
}

async function loadJson(url) {
    let resp = await fetch(url);
    if (resp.status == 200) {
        return resp.json();
    }
    else {
        throw new HttpError(resp);
    }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.

async function demoGithubUser() {
    let user;
    let name = prompt("Введите логин?", "iliakan");
    try {
        user = await loadJson(`https://api.github.com/users/${name}`);
    } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
            console.log(
                "Такого пользователя не существует, пожалуйста, повторите ввод."
            );
        }
        else {
            throw err;
        }
    }
    console.log(`Full name is ${user.name}`);
    return user;
}

// demoGithubUser()

//Задача 3:
//Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?

async function wait() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return 10;
}

function f() {
    wait().then((res) => console.log(res));
    // ...что здесь написать?
    // чтобы вызвать wait() и дождаться результата "10" от async–функции
    // не забывайте, здесь нельзя использовать "await"
}

// f();
