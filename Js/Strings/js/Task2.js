const cities = "Київ, Львів, Одеса, Харків";

// const toArray = cities => {
//     const newArray = [];
//     let buff = '';
    
//     for (const char of cities) {
//         if (char === ',') continue;
        
//         if (char === ' ') {
//             if (buff) newArray.push(buff);
//             buff = '';
//         } else {
//             buff += char;
//         }
//     }

//     if (buff) newArray.push(buff);

//     return newArray;
// };

const toArray = cities => cities.split(', ');
// const newCitiesArray = toArray(cities).concat('Дніпро'); //concat в отличии от push возращает новый масив push дину масива поле изменения. 
// newCitiesArray.push('Дніпро');
// console.log(newCitiesArray);

// const newCities = newCitiesArray.join(' - ');
const newCities = toArray(cities).concat('Дніпро').join(' - '); //Если надо промежуточная версия с выводами то раскоментировать 24 26 28 строки.
console.log(newCities);

// ✅ 2. Трансформація даних
// Перетворити заданий рядок міст "Київ, Львів, Одеса, Харків"  на масив, додати в кінець масиву місто "Дніпро", а потім зібрати назад у рядок, де міста розділені через дефіс із пробілами ("Київ - Львів - Одеса...").

