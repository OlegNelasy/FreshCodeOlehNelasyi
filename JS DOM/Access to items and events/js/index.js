"use strict";


// 2. ✅ Підписка
// При натисканні на кнопку «Підписатися» її текст повинен змінюватися на «Ви підписані».
// При повторному натисканні текст кнопки повинен повертатися до «Підписатися».
const subscribeBtn = document.getElementById('subscribeBtn');
subscribeBtn.textContent = 'Подписаться';

subscribeBtn.addEventListener('click', (e) => {
    const isActive = e.target.classList.toggle('btnActive');
    e.target.textContent = isActive ? 'Вы подписаны' : 'Подписаться';
});

// Реалізуйте кнопку з іконкою ❤️:
// у початковому стані сердечко має бути сірим;
// при натисканні воно повинно ставати червоним;
// повторне натискання повинно повертати початковий стан.
// Для зміни стану використовуйте JavaScript та CSS-класи.
const likeBtn = document.querySelector('.btnLike');

likeBtn.addEventListener('click', (e) => {
    const isActive = e.target.classList.toggle('btnLikeActive');
});

// 4. ✅ Додаткова інформація

// Номер телефону
// При наведенні на номер телефону (mouseenter) перед ним повинна з'являтися назва мобільного оператора:
// Kyivstar: +380 XX XXX XX XX
// При відведенні курсору (mouseleave) назва оператора повинна зникати, залишаючи лише номер телефону.
// Примітка: визначайте мобільного оператора за кодом номера телефону. Можливість перенесення номера між операторами не враховуйте.

// Дата народження
// Додайте до дати народження атрибут title, у якому буде зазначено вік користувача.

// Вік та мобільного оператора визначте під час запуску програми, оскільки вони не залежать від взаємодії з користувачем.

const phoneOperators = new Map([
    // Киевстар
    ['067', 'Киевстар'],
    ['068', 'Киевстар'],
    ['096', 'Киевстар'],
    ['097', 'Киевстар'],
    ['098', 'Киевстар'],
    ['077', 'Киевстар'],

    // Vodafone
    ['050', 'Vodafone'],
    ['066', 'Vodafone'],
    ['095', 'Vodafone'],
    ['099', 'Vodafone'],
    ['075', 'Vodafone'],

    // lifecell
    ['063', 'lifecell'],
    ['073', 'lifecell'],
    ['093', 'lifecell']
]);

const phoneNumber = document.getElementById('phoneNumber');
let originalText = '';

phoneNumber.addEventListener('mouseenter', (e) => {
    originalText = e.target.textContent;
    const code = originalText.slice(3, 6);
    const operatorName = phoneOperators.get(code) || 'Не известный оператор';
    e.target.textContent = `${originalText} (${operatorName})`;
});

phoneNumber.addEventListener('mouseleave', (e) => {
    e.target.textContent = originalText;
});

// console.log(likeBtn);