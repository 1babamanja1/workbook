//Пользовательские ошибки, расширение Error

class ValidError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function test() {
    throw new ValidError("Oops!");
}

// try {
//   test();
// } catch (e) {
//   console.error(e);
// }

function readUser(json) {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new RequirementError("name");
    }
    if (!user.age) {
        throw new RequirementError("age");
    }
    return user;
}

// try {
//   readUser('{"age": 15}');
// } catch (e) {
//   if (e instanceof ValidError) {
//     console.error(`Validation Error: ` + e.message); //Validation Error: name is absent
//   } else throw e;
// } finally {
//   console.log("Reading done"); //Reading done
// }

//Разграничим отсутствие свойства и некорректное введение:

class RequirementError extends ValidError {
    constructor(prop) {
        super(`${prop} is absent`);
        this.name = "RequirementError";
        this.prop = prop;
    }
}

//
// try {
//   readUser('{"name": 15}');
// } catch (e) {
//   if (e instanceof ValidError) {
//     console.error(e); // RequirementError: age is absent
//   } else throw e;
// } finally {
//   console.log("Reading done"); //Reading done
// }

//Сделам общий обработчик ошибок чтения, чтобы было очень удобно

class ReadError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = "ReadError";
    }
}

function validateUser(user) {
    if (!user.age) throw new RequirementError("age");
    if (!user.name) throw new RequirementError("name");
}

function newReadUser(json) {
    let user;
    try {
        user = JSON.parse(json);
    } catch (error) {
        if (error instanceof SyntaxError) {
            throw new ReadError("SyntaxErr", error.message);
        }
        else throw error;
    }
    try {
        validateUser(user);
    } catch (error) {
        if (error instanceof ValidError) {
            throw new ReadError("ValidError", error.message);
        }
        else throw error;
    }
}

// try {
//   newReadUser('{ name: "Oleg" }');
// } catch (error) {
//   if (error instanceof ReadError) {
//     console.error(`ReadError: ${error.message}; InitProblem: ${error.cause}`);
//   } else throw error;
// }
// //ReadError: SyntaxErr; InitProblem: Unexpected token n in JSON at position 2

// try {
//   newReadUser('{ "name": "Oleg" }');
// } catch (error) {
//   if (error instanceof ReadError) {
//     console.error(`ReadError: ${error.message}; InitProblem: ${error.cause}`);
//   } else throw error;
// }
// ReadError: ValidError; InitProblem: age is absent

//Задача 1:
//Создайте класс FormatError, который наследует от встроенного класса SyntaxError.
// Класс должен поддерживать свойства message, name и stack.
// Пример использования:

class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = "FormatError";
    }
}

let err = new FormatError("Format Error");

// console.error(err.message); // ошибка форматирования
// console.error(err.name); // FormatError
// console.error(err.stack); // stack
//
// console.error(err instanceof FormatError); // true
// console.error(err instanceof SyntaxError); // true (потому что наследует от SyntaxError)

//Done