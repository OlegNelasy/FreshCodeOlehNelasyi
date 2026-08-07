const getVowelCount = str => {
    // const vowels = 'aeiouyаеєёиіїоуыэюя';
    // let count = 0;

    // for (const char of str.toLowerCase()) {
    //     if (vowels.includes(char)) {
    //         count++;
    //     }
    // }

    // return count;

    // g искать везде а не только первое совпадение
    // i игнорировать регистр
    const matches = str.match(/[aeiouyаеєёиіїоуыэюя]/gi); //Возвращает масив с совпавшими символами его размер и иесть количество совпадений
    return matches ? matches.length : 0;
}
console.log(getVowelCount('Задание выполненно! Congratulations!'));

// ⭐ Challenge (за бажанням).
// 3. SEO-метрика (Рахунок складів)
// Створити функцію, яка приймає рядок і повертає кількість голосних літер у ньому.
