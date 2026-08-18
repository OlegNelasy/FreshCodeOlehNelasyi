const messages = [
    { id: 1, name: 'Ivo', message: 'hello', date: new Date() },
    { id: 2, name: 'Ivo', message: 'how are you', date: new Date() },
    { id: 3, name: 'Wally', message: 'hi)', date: new Date() },
    { id: 4, name: 'Wally', message: 'fine)', date: new Date() },
];

// const sNames = new Set();
// messages.forEach(el => sNames.add(el.name));
// const names = [...sNames];

const names = [...new Set(messages.map(el => el.name))];
console.log(names);


const map1 = new Map();
messages.forEach(el => {
    const messageData = { message: el.message, date: el.date };

    if (map1.has(el.name)) {
        map1.get(el.name).push(messageData);
    } else {
        map1.set(el.name, [messageData]);
    }
});
console.log(map1);

// 3.1. ⭐ Challenge (за бажанням). З масиву
//
// створити:
// 1) масив імен користувачів (унікальних)
// 2) мапу вигляду
// Map (2) {
//   Ivo => [{message, date}, {message, date}],
//   Wally => [{message, date}, {message, date}]
// }
// тобто в мапі імені користувача має співставлятися масив його повідомлень, де кожне повідомлення представлене об'єктом з текстом повідомлення і його датою.

const orders = [
    { id: 101, customer: 'Elena', category: 'Electronics', amount: 1200 },
    { id: 102, customer: 'Ihor', category: 'Clothing', amount: 300 },
    { id: 103, customer: 'Elena', category: 'Books', amount: 150 },
    { id: 104, customer: 'Ihor', category: 'Electronics', amount: 800 },
    { id: 105, customer: 'Elena', category: 'Clothing', amount: 450 },
    { id: 106, customer: 'Maria', category: 'Books', amount: 200 }
];

const userStat = new Map();

orders.forEach(el => {
    const data = { category: el.category, amount: el.amount };

    if (userStat.has(el.customer)) {
        const userData = userStat.get(el.customer);
        userData.totalAmount += data.amount;
        userData.categories.add(data.category);
        userData.ordersCount++;
    } else {
        userStat.set(el.customer, { totalAmount: data.amount, categories: new Set([data.category]), ordersCount: 1 });
    }
})

console.log(userStat);

// ──────────────────────────────
// 3.2. ⭐ Challenge (за бажанням). Дано масив замовлень інтернет-магазину:

// За допомогою колекції Map та методів перебору масивів обчисліть статистику для кожного покупця. Створіть Map, де:
// Ключ: ім'я покупця (customer).
// Значення: об'єкт з агрегованими даними:
// totalAmount — загальна сума витрачених коштів;
// ordersCount — кількість здійснених замовлень;
// categories — Set унікальних категорій товарів, які купував цей користувач.