class FormatError extends Error {
    constructor(message) {
        super(message);
        this.name = "FormatError";
    }
}

function validEmail(email) {
    if (typeof email !== "string") {
        throw new TypeError('email должен иметь тип string!!!');
    }

    if (email.startsWith('@') || email.endsWith('@')) {
        throw new FormatError('Символ @ не может находиться в начале или в конце email!!!');
    }

    if (!email.includes('@')) {
        throw new FormatError('В email должна быть хотябы одна @!!!');
    }

    return email;
}

console.log("Правильный email:");
try {
    const result = validEmail("my.mail@google.com");
    console.log("Успех! Возвращено значение:", result);
} catch (error) {
    console.log("Ошибка:", error.name, error.message);
}

console.log("Неверный тип данных:");
try {
    validEmail(123456);
} catch (error) {
    console.log("Ошибка:", error.name, error.message);
}

console.log("Символ @ в начале:");
try {
    validEmail("@gmail.com");
} catch (error) {
    console.log("Ошибка:", error.name, error.message);
}

console.log("Символ @ в конце:");
try {
    validEmail("testmail@");
} catch (error) {
    console.log("Ошибка:", error.name, error.message);
}

console.log("Отсутствует символ @:");
try {
    validEmail("testmail.com");
} catch (error) {
    console.log("Ошибка:", error.name, error.message);
}

// 2. ⭐ Challenge (за бажанням).
// Реалізувати функцію для валідації імейлу. Імейл має бути рядком і містити символ "@",
// цей символ не має бути першим або останнім. Функція має повертати відвалідований імейл або викидати помилку, якщо імейл не валідний.