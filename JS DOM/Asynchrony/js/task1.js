"use strict";
// 1.1
// function printNumbers(from, to, interval) {
//     let number = from;

//     const timer = setInterval(() => {
//         if (number <= to) {
//             console.log(number);
//             number++;
//         } else {
//             clearInterval(timer);
//         }

//     }, interval);
// }

// 1.1*
function printNumbers(from, to, interval) {

    if (from > to) {
        return;
    }

    setTimeout(() => {
        console.log(from);
        printNumbers(++from, to, interval);
    }, interval)
}

printNumbers(3, 7, 1000);

// 1.2*
let countdown = 130; //количество секунд ожидания

const updateCountdownText = (countdown) => {
    if (countdown <= 0) {
        return 'Отсчёт окончен!!! Спасибо, что подождали.';
    }

    const minutes = Math.floor(countdown / 60);
    const seconds = String(countdown % 60).padStart(2, '0');
    return `Подождите ${minutes}:${seconds}`;
}

const message = document.createElement('p');
message.textContent = updateCountdownText(countdown);
document.body.appendChild(message);

const timer = setInterval(() => {
    --countdown;
    message.textContent = updateCountdownText(countdown);

    if (countdown <= 0) {
        clearInterval(timer);
        return;
    }
}, 1000);

