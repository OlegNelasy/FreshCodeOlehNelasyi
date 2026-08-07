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


// // const newCitiesArray = toArray(cities).concat('Дніпро'); //concat в отличии от push возращает новый масив push дину масива поле изменения. 
// // newCitiesArray.push('Дніпро');
// // console.log(newCitiesArray);
// // const newCities = newCitiesArray.join(' - ');

// const toArray = cities => cities.split(', ');
// const newCities = toArray(cities).concat('Дніпро').join(' - '); 
// console.log(newCities);

const newCities = cities.split(', ').concat('Дніпро').join(' - '); 
console.log(newCities);

console.log(cities.split(', ').concat('Дніпро').join(' - ')); 

// ✅ 2. Трансформація даних
// Перетворити заданий рядок міст "Київ, Львів, Одеса, Харків"  на масив, додати в кінець масиву місто "Дніпро", а потім зібрати назад у рядок, де міста розділені через дефіс із пробілами ("Київ - Львів - Одеса...").

