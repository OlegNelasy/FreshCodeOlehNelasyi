const map1 = new Map([[1, "first"], [3, "third"]]);
// console.log(Object.entries([[1, "first"], [3, "third"]]));
// Object.entries([[1, "first"], [3, "third"]]).forEach(el => map1.set(el[1][0], el[1][1]));

console.log(map1);
console.log('Size =>', map1.size);

map1.set('test', 'bla bla');
console.log(map1);

console.log('Удаляем по ключу 4', map1.delete(4));
console.log('Удаляем по ключу test', map1.delete('test'));
console.log(map1);

console.log('Есть ключ 2?', map1.has(2));
console.log('Есть ключ 3?', map1.has(3));

console.log('Ищем по ключу 3', map1.get(3));

// const keys = [...map1.keys()];
// const values = [...map1.values()];

console.log([...map1.keys()]);
console.log([...map1.values()]);

// 1.1. ✅ Нехай даний масив масивів ([[1,"first"], [3,"third"]]).
// Створіть колекцію Map з цього масиву (по суті, вона співставляє значенням чисел їх порідковий числівник).
// Отримайте кількість елементів.
// Додати та видалити елемент.
// Здійсніть пошук за ключом.
// Перевірити, чи є в мапі числівник для числа 2.
// Отримайте список ключів та значень окремо.