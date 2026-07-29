const number1 = Number(prompt('Ведите первое число'));
const number2 = Number(prompt('Ведите второе число'));

if(Number.isNaN(number1) || Number.isNaN(number2)){
    console.log('Ошибка!!! Числа не должны быть текстом!');
} else {
    let sum = 0;
    let buffNumber = 0;
    if(number1 >= number2){
        for (let i = number2; i <= number1; i++) {
            sum += i;
        }
        console.log(`for: Сумма чисел в диапазоне от ${number2} до ${number1} = ${sum}`);

        sum = 0
        buffNumber = number2;
        while(buffNumber <= number1){
            sum += buffNumber;
            buffNumber++
        }
        console.log(`while: Сумма чисел в диапазоне от ${number2} до ${number1} = ${sum}`);

        sum = 0
        buffNumber = number2;
        do {
            sum += buffNumber;
            buffNumber++
        } while (buffNumber <= number1);
        console.log(`do while: Сумма чисел в диапазоне от ${number2} до ${number1} = ${sum}`);
    } else {
        for (let i = number1; i <= number2; i++) {
            sum += i;
        }
        console.log(`for: Сумма чисел в диапазоне от ${number1} до ${number2} = ${sum}`);

        sum = 0
        buffNumber = number1;
        while(buffNumber <= number2){
            sum += buffNumber;
            buffNumber++
        }
        console.log(`while: Сумма чисел в диапазоне от ${number1} до ${number2} = ${sum}`);

        sum = 0
        buffNumber = number1;
        do {
            sum += buffNumber;
            buffNumber++
        } while (buffNumber <= number2);
        console.log(`do while: Сумма чисел в диапазоне от ${number1} до ${number2} = ${sum}`);
    }
}


