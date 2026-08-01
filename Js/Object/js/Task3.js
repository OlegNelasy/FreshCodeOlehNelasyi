/**
 * Конструктор для создания объекта книги.
 * @constructor
 * @param {string} author - Имя автора.
 * @param {string} title - Название книги.
 * @param {number} yearPublication - Год издания книги.
 * @param {string} publisher - Название издательства.
 * @param {number} price - Стоимость книги.
 */
function Book(author, title, yearPublication, publisher, price) {
    this.author = author;
    this.title = title;
    this.yearPublication = yearPublication;
    this.publisher = publisher;
    this.price = price;
}

const bookPrototype = {
    constructor: Book,
    getAge(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.yearPublication;
    },
    changePrice(newPrice){
        if (typeof newPrice === 'number' && newPrice >= 0) {
        this.price = newPrice;
        } else {
            console.log('Ошибка: цена не должна быть отрицательной числом');
        }
    }
}

Book.prototype = bookPrototype;

const book1 = new Book('Дж. К. Роулинг', 'Гарри Поттер и философский камень', 1997, 'Росмэн', 1500);
const book2 = new Book('Дж. Р. Р. Толкин', 'Властелин колец: Братство Кольца', 1954, 'АСТ', 2000);

console.log(book1);
console.log(book2);

console.log(`Возраст книги "${book1.title}" составляет ${book1.getAge()}`);
console.log(`Возраст книги "${book2.title}" составляет ${book2.getAge()}`);

book1.changePrice(1800); 

console.log(book1);
console.log(book2);