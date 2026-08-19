class FoodProduct {
    constructor(title, category, brand, manufactureDate) {
        this.title = title;
        this.category = category;
        this.brand = brand;
        this.manufactureDate = manufactureDate;
    }
    get ageInDays() {
        const nowDate = new Date();
        const dateMilliseconds = nowDate - this.manufactureDate;
        const millisecondsInADay = 1000 * 60 * 60 * 24;
        return Math.floor(dateMilliseconds / millisecondsInADay);
    }
    getFullInfo() {
        return `Название: ${this.title} Категория: ${this.category} Бренд: ${this.brand} Возраст: ${this.ageInDays}`;
    }
}

class DiscountedProduct extends FoodProduct {
    constructor(title, category, brand, manufactureDate, maxDiscountLimit, currentDiscount = 0) {
        super(title, category, brand, manufactureDate)
        this.maxDiscountLimit = maxDiscountLimit;
        this.currentDiscount = currentDiscount;
    }
    applyDiscount(percent) {
        if (this.maxDiscountLimit >= percent) {
            this.currentDiscount = percent;
            return true;
        }
        return false;
    }
    getFullInfo() {
        return `Название: ${this.title} Категория: ${this.category} Бренд: ${this.brand} Возраст: ${this.ageInDays} Текущая скидка: ${this.currentDiscount} Максимальная скидка: ${this.maxDiscountLimit}`;
    }
}


const fiveDaysAgo = new Date();
fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);

const twoWeeksAgo = new Date();
twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);

console.log("Проверка базового класса (FoodProduct)");
const bread = new FoodProduct("Хлеб Бородинский", "Выпечка", "Хлебозавод №1", fiveDaysAgo);
console.log(bread.getFullInfo());

console.log("Проверка акционного товара (DiscountedProduct)");
const yogurt = new DiscountedProduct("Йогурт Клубничный", "Молочные продукты", "Домик в деревне", twoWeeksAgo, 30);
console.log("До применения скидки");
console.log(yogurt.getFullInfo());

console.log("Пробуем дать допустимую скидку (15%)");
const isAppliedOk = yogurt.applyDiscount(15);
console.log(`Скидка применена? -> ${isAppliedOk}`);
console.log(yogurt.getFullInfo());

console.log("Пробуем дать скидку больше лимита (50%)");
const isAppliedFail = yogurt.applyDiscount(50);
console.log(`Скидка применена? -> ${isAppliedFail}`);
console.log(yogurt.getFullInfo());


// 1. ✅ Базовий клас FoodProduct:
// Властивості:
// title — назва товару (наприклад, "Молоко 2.5%", "Кефір 1%", "Торт Світоч");
// category — категорія товару ("Молочка", "Випічка", "М'ясо");
// brand — бренд / виробник;
// manufactureDate — дата виготовлення (екземпляр new Date()).
// Методи та геттери:
// ageInDays (геттер) — повертає кількість повних днів, що минули з дати виготовлення до сьогодні;💡 Підказка з дати: Для розрахунку віку відніміть this.manufactureDate від поточного моменту new Date() (отримаєте різницю в мілісекундах) та поділіть на кількість мілісекунд у добі: 1000 * 60 * 60 * 24. Скористайтеся Math.floor().
// getFullInfo() — повертає рядок з інформацією про товар: назва, категорія, бренд та вік товару в днях.
// Дочірній клас DiscountedProduct (успадковує FoodProduct):
// Властивості:
// maxDiscountLimit — максимальний відсоток знижки, який дозволено застосувати (наприклад, 50);
// currentDiscount — поточна встановлена знижка у відсотках (початково 0).
// Методи:
// applyDiscount(percent) — встановлює знижку percent, якщо вона не перевищує maxDiscountLimit; повертає true (якщо знижку застосовано) або false (якщо знижка перевищує допустимий ліміт).
// Перевизначити getFullInfo(): повертає назву, категорію, вік товару в днях, поточну знижку та максимальний ліміт знижки.
// Створити об'єкти класів та перевірити роботу методів у консолі.