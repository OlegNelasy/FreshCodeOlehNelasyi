const hiddenNumber = Math.floor(Math.random() * 20) + 1;
// console.log(`hiddenNumber = ${hiddenNumber}`);

let inputNumber;

do {
    inputNumber = prompt(`Введите число`);
    
    if(inputNumber === null){
        console.log(`Игра завершина вы нажали отмена.`);
        break;
    } 
    
    inputNumber = Number(inputNumber);
    if(Number.isNaN(inputNumber)){
        console.log(`Ошибка!!! Введите цисло а не символ!`);
        continue;
    }

    if((inputNumber > hiddenNumber + 3 || inputNumber < hiddenNumber - 3)){
        console.log(`Холодно`);
    } else if(hiddenNumber === inputNumber){
        console.log(`Число ${hiddenNumber} отгаданно!`);
        continue;
    } else {
        console.log(`Горяче`);
    }
} while (hiddenNumber !== inputNumber);



