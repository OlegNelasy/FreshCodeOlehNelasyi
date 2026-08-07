
const text11 = "   hi привет     как твои дела?   ";

// const censorFirstLetter = text => {
//     const textArray = [...text.trim()]; //.trim() уберает проблели в начале и в конце только для чтрок!!!
//     textArray.unshift(' ');

//     for(const i in textArray){
//         if(textArray[i] === ' ' && textArray[+i + 1] !== ' '){
//             // textArray[+i + 1] = textArray[+i + 1].toUpperCase();
//             textArray[+i + 1] = '*';
//         }
//     }

//     textArray.shift();
    
//     return textArray.join('');
// }

const censorFirstLetter = text => {
    return text
        .trim()               
        .split(' ')           
        .map(word => {      
            if (word === '') return ''; // Защита на случай нескольких пробелов
            
            return '*' + word.slice(1); 
        })
        .join(' ');           
};

console.log(censorFirstLetter(text11));



// 5. Модератор чату
// Написати функцію censorFirstLetter(text), яка замінює перший символ кожного слова в реченні на знак *.
// Функція має повертати новий рядок зі зміненими літерами.