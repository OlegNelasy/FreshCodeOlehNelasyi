"use strict";


// 2. ✅ Підписка
// При натисканні на кнопку «Підписатися» її текст повинен змінюватися на «Ви підписані».
// При повторному натисканні текст кнопки повинен повертатися до «Підписатися».
const subscribeBtn = document.getElementById('subscribeBtn');

subscribeBtn.addEventListener('click', () => {
    const isActive = subscribeBtn.classList.toggle('btnActive');
    subscribeBtn.textContent = isActive ? 'Вы подписаны' : 'Подписаться';
});
// console.log(subscribeBtn);