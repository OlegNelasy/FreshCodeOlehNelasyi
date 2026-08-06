const numbers = [12, -4, 89, 10, 0, 7, -15];
console.log(`numbers:`, numbers);

const newNumbersNoZero = numbers.filter(number => number !== 0);
console.log(`newNumbersNoZeros:`, newNumbersNoZero);

const newNumbersDivide100 = numbers.map(number => number / 100);
console.log(`newNumbersDivide100:`, newNumbersDivide100);

const newNumbersCubed = numbers.map(number => number ** 3);
console.log(`newNumbersCubed:`, newNumbersCubed);

const indexSquareEqual100 = numbers.findIndex(number => number ** 2 === 100);

if (indexSquareEqual100 !== -1) {
    numbers.splice(indexSquareEqual100, 1);
    console.log(`Элемент под номером ${indexSquareEqual100 + 1} удален. Обновленный массив:`, numbers);
} else {
    console.log(`Элемент квадрат которого равен 100, не найден.`);
}

const numberOver50 = numbers.find(number => number > 50);
console.log(numberOver50); 

// 3. ✅ Методи перебору масивів (forEach, filter, map, findIndex, *some, *every):
// 3.1. Отримати новий масив із заданого, який міститиме лише ненульові числа
//        (-1, 5, 0, 9, -10 => -1, 5, 9, -10). 
// 3.2. Отримати новий масив їх заданого, який міститиме всі елементи вихідного, поділені на 100
//        (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3). 
// 3.3. Вивести елементи масиву, зведені у куб. 
// 3.4. Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його, або видати діагностичне повідомлення, якщо такого елементу не існує. 
// 3.4. Знайти в масиві перше число, яке є більшим за 50. Вивести це число в консоль. Якщо такого числа немає — вивести undefined.