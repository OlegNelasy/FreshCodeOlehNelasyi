const number1 = Number(prompt('Ведите первое число'));
const number2 = Number(prompt('Ведите второе число'));

if(Number.isNaN(number1) || Number.isNaN(number2)){
    console.log('Ошибка!!! Числа не должны быть текстом!');
} else {
    let sum = 0;
    let buffNumber = 0;

    const min = Math.min(number1, number2);
    const max = Math.max(number1, number2);
    
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    console.log(`for: Сумма чисел в диапазоне от ${min} до ${max} = ${sum}`);
            
    sum = 0
    buffNumber = min;
    while(buffNumber <= max){
        sum += buffNumber;
        buffNumber++
    }
    console.log(`while: Сумма чисел в диапазоне от ${min} до ${max} = ${sum}`);

    sum = 0
    buffNumber = min;
    do {
        sum += buffNumber;
        buffNumber++
    } while (buffNumber <= max);
    console.log(`do while: Сумма чисел в диапазоне от ${min} до ${max} = ${sum}`);
}


