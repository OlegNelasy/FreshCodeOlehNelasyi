let inputNumber;
let countSteps = 0;
do {
    inputNumber = prompt(`Введите количество шагов за день`);
    
    if(inputNumber === null || inputNumber === 'стоп'){
        console.log(`Подщет окнчен общее количество шагов ${countSteps}`);
        break;
    }

    inputNumber = Number(inputNumber);
    if(Number.isNaN(inputNumber)){
        console.log(`Ошибка!!! Введите цисло а не символ!`);
        continue;
    }

    if(inputNumber < 0){
        console.log(`Ошибка!!! Число не может быть отрицательным!`);
        continue;
    }

    if(Number.isInteger(inputNumber)){
        console.log(`Ошибка!!! Число не может быть дробным!`);
        continue;
    }

    countSteps += inputNumber;

} while(true);




