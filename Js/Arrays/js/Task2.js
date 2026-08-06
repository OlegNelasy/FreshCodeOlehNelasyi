const numbers = [12, -4, 89, 0, 7, -15];

console.log(numbers);
let product = 1;
let countPositiveNambers = 0;
// for(const index in numbers) {
for(let index = 0; index < numbers.length; index++) {
    if(index % 2 === 0){
        console.log(`index = ${index}  number =  ${numbers[index]}`);
    }
    
    if(numbers[index] > 0){
        countPositiveNambers++;
    }

    product *= numbers[index];
};

console.log(`Произведение елементов масива = ${product}`);
console.log(`Количество положтительных елементов масива = ${countPositiveNambers}`);


// 2. ✅ Перебір масиву класичними циклами:
// (Не використовувати методи перебору масивів (forEach, filter, map, findIndex))
// 2.1. Вивести елементи з парними індексами.
// 2.2. Знайти добуток елементів масиву.
// 2.3. Порахувати та вивести в консоль кількість додатних елементів у масиві.