function createLogger(prefix){
    
  return function(message){
    console.log(`${prefix}: ${message}`);
  }
}

const authLogger = createLogger('AUTH');
const apiLogger = createLogger('API');
authLogger('test authLogger');
apiLogger('test apiLogger');

// 2. ⭐ Challenge (за бажанням). Написати функцію createLogger(prefix), яка повертає функцію.
// Повернена функція приймає повідомлення та виводить його в консоль з заданим префіксом.
// Приклади використання:
// const authLogger = createLogger('AUTH');
// const apiLogger = createLogger('API');
// authLogger('User logged in'); // AUTH: User logged in
// apiLogger('Request failed'); // API: Request failed