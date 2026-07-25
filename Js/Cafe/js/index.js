const ORDER = Number(prompt("Сделайте заказ: \n 1 Чай (50 грн); \n 2 Кофе (70 грн) \n 3 Сок (60 грн) \n 4 Вода (30 грн) \n Для выбора введите число от 1 до 4!"));
const SIZE = Number(prompt("Выберите размер напитка: \n 1 S (Small) (0 грн); \n 2 M (Medium) (15 грн) \n 3 L (Large) (30 грн) \n Для выбора введите число от 1 до 3!"));
const COUNTS_DRINKS = Number(prompt("Введите желаемое количество напитка"));

let drink;
let price;
let sizeName;
// let countsDrinks; 

if(Number.isNaN(ORDER) || ORDER <= 0 || ORDER > 4
    || Number.isNaN(SIZE) || SIZE <= 0 || SIZE > 3
    || COUNTS_DRINKS <= 0) {
    console.log("Данные указаны некорректно");
}
else {
    console.log("========Заказ=========")

    switch (ORDER) {
        case 1:
            drink = "Чай";
            price = 50;
            break;
        case 2:
            drink = "Кофе";
            price = 70;
            break;
        case 3:
            drink = "Сок";
            price = 60;
            break;
        case 4:
            drink = "Вода";
            price = 30;
            break;
        default:
            console.log("Ошибка обратобки товар не определен!!!");
            break;
    }

     switch (SIZE) {
        case 1:
            sizeName = "S";
            break;
        case 2:
            price += 15;
            sizeName = "M";
            break;
        case 3:
            price += 30;
            sizeName = "L";
            break;
        
        default:
            console.log("Ошибка обратобки размер товара не определен!!!");
            break;
    }

    console.log("Напиток: " + drink);
    console.log("Размер: " + sizeName);
    console.log("Количество: " + COUNTS_DRINKS);
    console.log("Стоимость за 1 шт. " + price);
    console.log("К оплате: " + price * COUNTS_DRINKS);
}

