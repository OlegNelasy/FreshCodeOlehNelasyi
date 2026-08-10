function createLimiter(limit){
  return function(){
    if(limit > 0){
      console.log('ok');
      limit--;
    } else {
      console.log('Error');
    }
  }
}

const limited = createLimiter(2);
limited();
limited();
limited();
// 3. ⭐ Challenge (за бажанням). Написати функцію createLimiter(limit), яка повертає функцію.
// Повернена функція може бути викликана не більше limit разів.
// Приклади використання:
// const limited = createLimiter(2);
// limited(); // ok
// limited(); // ok
// limited(); // Error