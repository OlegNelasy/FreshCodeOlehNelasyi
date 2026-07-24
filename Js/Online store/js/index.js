const PRODUCT_PRICE = Number(prompt("Введите цену товара"));
const PRODUCT_QUANTITY = Number(prompt("Введите количество товара"));
const DELIVERY = Number(prompt("Способ доставки: \n 1 Самовывоз \n 2 Новая почта \n 3 Курьер \n Для выбора введите число от 1 до 3!"));
let discount = 0;
let totalCost = 0; 
let сostWithDiscount = 0;
let сostDelivery = 0;

if(Number.isNaN(PRODUCT_PRICE) 
    || Number.isNaN(PRODUCT_QUANTITY) 
    || Number.isNaN(DELIVERY) 
    || PRODUCT_PRICE <= 0
    || PRODUCT_QUANTITY <= 0
    || DELIVERY < 1 
    || DELIVERY > 3)
{
    console.log("Данные указаны некорректно");
}
else 
{
    totalCost = PRODUCT_PRICE * PRODUCT_QUANTITY;

    if(totalCost >= 800)
    {
        discount = 0.05;
    } 
    else if (totalCost >= 500)
    {
        discount = 0.03;
    }
    else discount = 0; //я бы не ставил конкретно для этой задачи поскольку если условие не выпонилось то у нас будет 0 присвоиный при иницыальзации переменой но на занятии сказали надо значать надо discount = 0;

    сostWithDiscount = totalCost * (1 - discount);

    if(сostWithDiscount > 1000)
    {
        сostDelivery = 0;
    }    
    else if (DELIVERY === 3)
    {
        сostDelivery = 150;
    } 
    else if (DELIVERY === 2)
    {
        сostDelivery = 100;
    }
    else if (DELIVERY === 1)
    {
        сostDelivery = 0; // тут тоже можно без этого условия
    }

    console.log("Стоимость заказа составляет: " + (сostWithDiscount + сostDelivery).toFixed(2));
    console.log("Скидка: " + discount * 100 + "%");
    console.log("Способ доставки: " + (DELIVERY === 1 ? "Самовывоз" : DELIVERY === 2 ? "Новая почта" : "Курьер"));
    console.log("Стоимость доставик: " + сostDelivery);
    console.log("Стоимость без скидки: " + (totalCost + сostDelivery));
}

