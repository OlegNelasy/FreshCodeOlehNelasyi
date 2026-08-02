const figure = 'cylinder';
const layersCount = 8;
const length = 6.3;
const radius = 5;
const height = 7;

if(figure === 'cube' || figure === 'cylinder'){
    const area = figure === 'cube' ? calculateSurfaceArea(figure, length) : calculateSurfaceArea(figure, radius, height); 

    if((figure === 'cube' && area !== 0) || (figure === 'cylinder' && area !== 0)){
        console.log(`Для покраски фигуры ${figure} в ${layersCount} слоев, плошадью ${area} необхожимо приобрести ${calculatePaintBoxes(area, layersCount)} банок краски.`);
    } else {
        console.log('Введене не коректные данные!')
    }
} else {
    console.log('Введене не коректная фигура!')
}
/**
 * Проверяет param
 * @param {any} param 
 * @returns Возвращает true если число намбер и не NaN;
 */
function checkValidPositiveNumber(param){
    return typeof param === 'number' && !Number.isNaN(param) && param > 0;
}

/**
 * Вычисляет площадь поверхности геометрической фигуры (куба или цилиндра).
 * @param {string} shapeType - Тип фигуры ('cube' или 'cylinder').
 * @param {number} param1 - Для куба: длина ребра. Для цилиндра: радиус основания.
 * @param {number} [param2=1] - Для цилиндра: высота. По умолчанию равна 1.
 * @returns {number} Возвращает площадь поверхности фигуры или 0 в случае некорректных данных.
 */
function calculateSurfaceArea(shapeType, param1,  param2 = 1) {
    if(!checkValidPositiveNumber(param1)){
        return 0;
    }

    if(shapeType === 'cube'){
        return 6 * param1 ** 2;
    } 

     if(!checkValidPositiveNumber(param2)){
        return 0;
    }
    
    if(shapeType === 'cylinder'){
        return 2 * Math.PI * param1 * (param1 + param2);
    }

    return 0;
}

/**
 * Вычисляет необходимое количество целых банок краски для покраски заданной площади.
 * @param {number} area - Площадь поверхности.
 * @param {number} [layersCount=1] - Количество слоев фарбування (по умолчанию 1).
 * @returns {number} Количество целых банок краски или 0 при некорректных данных.
 */
function calculatePaintBoxes(area, layersCount = 1) {
    if (!checkValidPositiveNumber(area) || !checkValidPositiveNumber(layersCount)) {
        return 0;
    }

    return Math.ceil(area * layersCount * 0.1);
}


