"use strict";


// 2. ✅ Підписка
// При натисканні на кнопку «Підписатися» її текст повинен змінюватися на «Ви підписані».
// При повторному натисканні текст кнопки повинен повертатися до «Підписатися».
const subscribeBtn = document.getElementById('subscribeBtn');

subscribeBtn.addEventListener('click', (e) => {
    const isActive = e.target.classList.toggle('btnActive');
    e.target.textContent = isActive ? 'Вы подписаны' : 'Подписаться';
});

// 3. ✅ Вподобання

// Реалізуйте кнопку з іконкою ❤️:
// у початковому стані сердечко має бути сірим;
// при натисканні воно повинно ставати червоним;
// повторне натискання повинно повертати початковий стан.
// Для зміни стану використовуйте JavaScript та CSS-класи.

// 9. ⭐ Challenge (за бажанням). 

// Додайте до картки лічильник вподобань.
// При натисканні на ❤️:
// якщо користувач поставив вподобання — лічильник збільшується на 1;
// якщо прибрав вподобання — зменшується на 1;
// колір сердечка змінюється відповідно до його стану.
const likeBtn = document.querySelector('.btnLike');
const likeCounter = document.querySelector('.likeCounter');

function onLikeHandler(e) {
    const isActive = e.currentTarget.classList.toggle('btnLikeActive');

    if (isActive) {
        likeCounter.textContent++;
    } else {
        likeCounter.textContent--;
    }
}

likeBtn.addEventListener('click', onLikeHandler);


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

// 5. ✅Показати контакти

// Спочатку email  та номер телефону користувача повинні бути приховані.
// При натисканні на кнопку «Показати контакти»:
// контакти повинні стати видимими;
// текст кнопки повинен змінитися на «Приховати контакти».
// При повторному натисканні контакти повинні знову приховуватися, а текст кнопки — повертатися до «Показати контакти».

const userContactBlock = document.querySelector('.userContact');
// userContactBlock.classList.toggle('userContactHidden');

const contactBtn = document.getElementById('contactBtn');

contactBtn.addEventListener('click', (e) => {
    const isbtnActive = e.target.classList.toggle('btnActive');
    e.target.textContent = isbtnActive ? 'Скрыть контакты' : 'Показать контакты';

    userContactBlock.classList.toggle('userContactHidden');
});

// 6. ✅ Робота з подіями

// Додайте обробники click для посилань Профіль, Публікації та Проєкти.
// Уявіть, що в застосунку ведеться логування дій користувача. Сформуйте повідомлення про те, яке посилання він натиснув, і виведіть його в консоль.

// const userLink = document.querySelectorAll('.userLink');

// function onClickHendler(e) {
//     console.log(`Пользователь нажал на (${e.target.textContent}) и перещол по (${e.target.getAttribute('href')})`);
// }

// userLink[0].addEventListener('click', onClickHendler);
// userLink[1].addEventListener('click', onClickHendler);
// userLink[2].addEventListener('click', onClickHendler);

// userLink.forEach((link) => {
//     link.addEventListener('click', onClickHendler);
// });

// 7. ⭐ Challenge (за бажанням). Делегування подій

// Змініть попередню реалізацію.
// Замість того щоб додавати окремий обробник події на кожне посилання, додайте один обробник на спільний батьківський елемент.
// При натисканні на посилання потрібно визначити, яке саме посилання було натиснуто, та вивести його текст у консоль.
// Використовуйте делегування подій.

// При натисканні на посилання:
// визначте елемент, на якому відбулася подія;
// виведіть його текст у консоль;
// виведіть у консоль event.target та event.currentTarget.
// Зверніть увагу на різницю між target та currentTarget.

const userLinks = document.querySelector('.userLinks');

function onClickHendler(e) {
    if (!e.target.classList.contains('userLink')) {
        return;
    }
    console.log(`Пользователь нажал на (${e.target.textContent}) и перещол по (${e.target.getAttribute('href')})`);
    console.log('Target:', e.target);
    console.log('Current Target:', e.currentTarget);
}

userLinks.addEventListener('click', onClickHendler);



// 8. ⭐ Challenge (за бажанням). Спливаючі підказки

// Додайте до картки два інформаційні елементи:
// іконку біля професії;
// зелений індикатор статусу користувача.
// Для кожного елемента додайте атрибут data-tooltip із текстом додаткової інформації.
// Наприклад:
// <span class="info" data-tooltip="Працює Frontend Developer понад 4 роки"> ⓘ </span>
// <span class="status" data-tooltip="Зараз доступний для нових проєктів"> ● </span>

// При взаємодії з елементом показуйте спливаючу підказку з відповідним текстом.
// Отримуйте текст підказки за допомогою dataset.
// Підказка: data-* атрибути дозволяють зберігати додаткові дані безпосередньо в HTML-елементі та отримувати їх у JavaScript.

const tooltipElements = document.querySelectorAll('[data-tooltip]');
const tooltipBox = document.getElementById('tooltipBox');

tooltipElements.forEach((el) => {
    //еще есть mouseover
    el.addEventListener('mouseenter', (e) => {
        tooltipBox.textContent = e.target.dataset.tooltip;
        tooltipBox.style.display = 'block';
    });

    el.addEventListener('mousemove', (e) => {
        tooltipBox.style.left = e.pageX + 15 + 'px';
        tooltipBox.style.top = e.pageY + 15 + 'px';
    });
    //еще есть mouseout
    el.addEventListener('mouseleave', () => {
        tooltipBox.style.display = 'none';
    });
});


