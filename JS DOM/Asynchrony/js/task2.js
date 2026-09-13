"use strict";

const apiUrl = 'https://catfact.ninja/fact';

const catInfoContainer = document.createElement('div');
const catInfoText = document.createElement('p');
const btn = document.createElement('button');

catInfoContainer.classList.add('cat-info-container');
document.body.appendChild(catInfoContainer);

catInfoText.classList.add('cat-info-text');
catInfoContainer.appendChild(catInfoText);

btn.classList.add('btn');
btn.textContent = `Получить факт`
catInfoContainer.appendChild(btn);

btn.addEventListener('click', () => {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при загрузке данных');
            }
            return response.json();
        })
        .then(data => {
            //console.log("Полученные данные:", data);
            //console.log("Сам факт:", data.fact);

            catInfoText.textContent = data.fact;
        })
        .catch(error => {
            console.error('Что-то пошло не так:', error);
        });
})