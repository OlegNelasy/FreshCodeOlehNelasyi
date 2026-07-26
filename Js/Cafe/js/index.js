const order = Number(prompt("Сделайте заказ: \n 1 Чай (50 грн); \n 2 Кофе (70 грн) \n 3 Сок (60 грн) \n 4 Вода (30 грн) \n Для выбора введите число от 1 до 4!"));
const size = prompt("Выберите размер напитка: \n S (Small) 0 грн; \n M (Medium) 15 грн \n L (Large) 30 грн \n Для выбора введите букву S M L");
const countsDrinks = Number(prompt("Введите желаемое количество напитка"));

let drink;
let price;

if(Number.isNaN(order) || order <= 0 || order > 4
    || size === null || (size !== "S" && size !== "M" && size !== "L")
    || countsDrinks <= 0) {
    console.log("Данные указаны некорректно");
} else {
    console.log("========Заказ=========")

    switch (order) {
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

    switch (size) {
        case "S":
            break;
        case "M":
            price += 15;
            break;
        case "L":
            price += 30;
            break;
        
        default:
            console.log("Ошибка обратобки размер товара не определен!!!");
            break;
    }

    console.log("Напиток: " + drink);
    console.log("Размер: " + size);
    console.log("Количество: " + countsDrinks);
    console.log("Стоимость за 1 шт. " + price);
    console.log("К оплате: " + price * countsDrinks);
}

