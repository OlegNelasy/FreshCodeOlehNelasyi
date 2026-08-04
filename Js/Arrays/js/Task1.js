const numbers = [12, -4, 89, 0, 7, -15];

console.log(numbers);

// console.log('==============const i in numbers');

// for(const i in numbers) {
//     console.log(i, numbers[i]);
// };

// console.log('==============const i of numbers');

// for(const i of numbers) {
//     console.log(i);
// };


const firstDeleted = numbers.shift();
const lastDeleted = numbers.pop();

console.log(`Удален первый элемент: ${firstDeleted}, Удален последный елемент: ${lastDeleted}`);
console.log(numbers);

let startNumber = +prompt("Введите число для начала массива:");
let finishNumber = +prompt("Введите число для конца массива:");

numbers.unshift(startNumber);
numbers.push(finishNumber);
console.log(numbers);

const arrCopy = Array.from(numbers);
const arrCopy2 = [...numbers];
const arrCopy3 = numbers.slice();

console.log('arrCopy = ', arrCopy);
console.log('arrCopy2 = ', arrCopy2);
console.log('arrCopy3 = ', arrCopy3);

const shortCopy = numbers.slice(0, 4);
console.log('shortCopy = ', shortCopy);