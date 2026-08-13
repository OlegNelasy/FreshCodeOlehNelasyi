class Post {
    // #text;

    constructor(id, title, author, text, dateAdded, likeCount, hashTags) {
        this.id = id;
        this.title = title;
        this.author = author;
        // this.#text = text;
        this.text = text;
        this.dateAdded = dateAdded;
        this.likeCount = likeCount < 0 ? 0 : likeCount;
        this.hashTags = hashTags;
    }
    // set text(newText) {
    //     this.#text = newText;
    // }

    // get text() {
    //     return `${this.#text} лет`;
    // }

    set likeCount(newLike) {
        if (!Number.isInteger(newLike)) {
            throw new TypeError('Ошибка!!! Количество лайком можеть быть только числом!');
        }
        if (newLike < 0) {
            throw new RangeError('Ошибка!!! Количество лайком не можеть быть отрицательным числом!');
        }

        this._likeCount = newLike;
    }

    get likeCount() {
        return this._likeCount;
    }

    changeText(newText) {
        this.text = newText;
    }

    incrementLikes() {
        this.likeCount++;
    }

    decrementLikes() {
        this.likeCount--;
    }
}

const post1 = new Post(
    3,
    'Название',
    'Неласый О. В.',
    'bla bla bla',
    new Date().getTime(),
    -30,
    ['teg1', 'teg2']
);

post1.changeText('other text');
// post1.incrementLikes();

try {
    post1.decrementLikes();
} catch (error) {
    console.log(error);
}

post1.incrementLikes();




// console.log(post1.text, new Date(post1.dateAdded))
console.log(post1)

// 2.1. ✅ Реалізувати клас Post (наприклад, описує пост в соц. мережі).Властивості:
// id,
// назва,
// автор,
// текст,
// дата додавання,
// кількість вподобайок.
// змінити текст поста на інший.
// збільшити кількість вподобайок на 1 / зменшити кількість вподобайок на 1.
// сеттер з валідацією для кількості вподобайок та відповідний ґеттер
// (кількість не може бути від'ємною).
// Створити екземпляр класу (об'єкт типу Post).
// Перевірити роботу методів.