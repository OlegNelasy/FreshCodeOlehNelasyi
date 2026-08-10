function pow(base, exponent){
    if (typeof base !== "number" || typeof exponent !== "number"){
        throw new TypeError('base и exponent должны иметь тип number!!!');
    }

    if (!Number.isInteger(exponent)) {
        throw new RangeError('exponent должна быть целым числом!!!'); 
    }

    if(exponent === 0){
        return 1;
    }
    if(exponent > 0){
         return base * pow(base, exponent - 1);
    } else {
        return (1 / base) * pow(base, exponent + 1);
    }
}

try {
  console.log(pow(2, 3)); 
} catch (error) {
  console.log(error);
}

try {
  console.log(pow(-2, -3)); 
} catch (error) {
   console.log(error.name, error.message);
}

try {
  console.log(pow(2, 3.1)); 
} catch (error) {
  console.log(error);
}

try {
  console.log(pow(-2, -3.1)); 
} catch (error) {
  console.log(error.name, error.message);
}

try {
  console.log(pow(2, 'sdd')); 
} catch (error) {
  console.log(error);
}

try {
  console.log(pow('-2', '-3.1')); 
} catch (error) {
  console.log(error.name, error.message);
}

// 2**3 = 2*2*2

// 1. ✅ Для рекурсивної функції піднесення числа до степеня pow(base, exponent) 
// реалізувати валідацію значень, що передаються, і генерацію помилок відповідних типів.
// Виклик функції вкласти в блок try з відловом виняткових ситуацій (помилок) різних типів з оповіщенням користувача про тип помилки.