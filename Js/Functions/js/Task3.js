/**
 * Вычисляет площадь поверхности геометрической фигуры (куба или цилиндра).
 * @param {string} shapeType - Тип фигуры ('cube' или 'cylinder').
 * @param {number} param1 - Для куба: длина ребра. Для цилиндра: радиус основания.
 * @param {number} [param2=1] - Для цилиндра: высота. По умолчанию равна 1.
 * @returns {number} Возвращает площадь поверхности фигуры или 0 в случае некорректных данных.
 */
function calculateSurfaceArea(shapeType, param1,  param2 = 1) {
    if(typeof param1 !== 'number' || Number.isNaN(param1) || param1 <= 0){
        return 0;
    }

    if(shapeType === 'cube'){
        return 6 * param1 ** 2;
    } 

    if(typeof param2 !== 'number' || Number.isNaN(param2) || param2 <= 0){
        return 0;
    }
    
    if(shapeType === 'cylinder'){
        return 2 * Math.PI * param1 * (param1 + param2);
    }

    return 0;
}

function calculatePaintBoxes(area, layersCount = 1){

}

















// /**
//  * Проверяет, делится ли первое число на второе нацело (без остатка).
//  * @param {number} number1 - Первое число (делимое).
//  * @param {number} number2 - Второе число (делитель).
//  * @returns {boolean} Возвращает true, если делится без остатка, и false в противном случае.
//  */
// const checkMultiplicity = function(number1, number2) {
//     return number1 % number2 === 0;
// };

// const number1 = Number(prompt("Введите первое число"));
// const number2 = Number(prompt("Введите второе число"));

// if(Number.isNaN(number1) || Number.isNaN(number2) || number2 === 0){
//     console.log(`Ошибка ввода!!! Недопустимое значение!`);
// } else {
//     console.log(checkMultiplicity(number1, number2) ? `Деление без остатка` : `Деление с остатком`);
// }

