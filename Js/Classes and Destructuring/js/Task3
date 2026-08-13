
class RangeValidator {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    set from(newFrom) {
        if (typeof newFrom !== 'number') {
            throw new TypeError('Ошибка!!! from должен быть числом!');
        }

        if (this.to !== undefined && newFrom > this.to) {
            throw new RangeError('Ошибка!!! from должен быть меньше to');
        }

        this._from = newFrom;
    }

    set to(newTo) {
        if (typeof newTo !== 'number') {
            throw new TypeError('Ошибка!!! to должен быть числом!');
        }

        if (newTo < this.from) {
            throw new RangeError('Ошибка!!! to должен быть больше from');
        }

        this._to = newTo;
    }

    get from() {
        return this._from;
    }

    get to() {
        return this._to;
    }

    get range() {
        return [this.from, this.to];
    }

    isValid(number) {
        if (typeof number !== 'number') {
            throw new TypeError('Ошибка!!! проверяемое значение должно быть числом!');
        }
        return number >= this.from && number <= this.to;
    }
}


// Конструктор (+сеттери)
const range1 = new RangeValidator(1, 5.5); // Відпрацьовує

try {
    const range1 = new RangeValidator(10, 5.5); // ПОМИЛКА! (оскільки має бути from <= to)
} catch (error) {
    console.log(error);
}


// Робота сетерів
range1.from = 5; // Відпрацьовує
try {
    range1.from = 200; // ПОМИЛКА! (оскільки не має бути більше заданого вище в конструкторі to: 5.5)
} catch (error) {
    console.log(error);
}
range1.to = 80; // Відпрацьовує
try {
    range1.to = -55; // ПОМИЛКА! (оскільки не має бути менше заданого вище from
} catch (error) {
    console.log(error);
}


// Робота гетерів
console.log(range1.from); // => 5
console.log(range1.to); // => 80

// Робота геттера range
console.log(range1.range); // => [5, 80]

// Робота validate
console.log(range1.isValid(10)); // => true (оскільки належить діапазону [5, 80])
console.log(range1.isValid(100)); // => false (оскільки не належить діапазону [5, 80])



//  ⭐ Challenge (за бажанням). Реалізувати клас RangeValidator.
// Клас призначений для валідації потрапляння числового значення в діапазон (тобто якщо діапазон {from: 0, to: Infinity}, то невід'ємні числа потрапляють в діапазон, а від'ємні - ні).

// Границі діапазону є властивостями:
// - from (типу number);
// - to (типу number);
//    (from <= to)

// Реалізувати getter'и та setter'и для обох властивостей.

// Реалізувати getter range, який повертатиме масив із двома числами діапазону (тобто ґеттер повертає не властивість, а масив із двома елементами, які є властивостями)

// Реалізувати метод isValid, який прийматиме число і перевірятиме, чи входить число у вказаний діапазон (повертає boolean).
