/**
 * Проверяет, делится ли первое число на второе нацело (без остатка).
 * @param {number} number1 - Первое число (делимое).
 * @param {number} number2 - Второе число (делитель).
 * @returns {boolean} Возвращает true, если делится без остатка, и false в противном случае.
 */
const checkMultiplicity = function(number1, number2) {
    return number1 % number2 === 0;
};

const number1 = Number(prompt("Введите первое число"));
const number2 = Number(prompt("Введите второе число"));

if(Number.isNaN(number1) || Number.isNaN(number2) || number2 === 0){
    console.log(`Ошибка ввода!!! Недопустимое значение!`);
} else {
    console.log(checkMultiplicity(number1, number2) ? `Деление без остатка` : `Деление с остатком`);
}

