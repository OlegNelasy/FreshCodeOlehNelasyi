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


// console.log(likeBtn);