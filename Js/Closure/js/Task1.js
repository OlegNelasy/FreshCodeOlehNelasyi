function customCounter(startN, step) {
  let n = startN;

  return function () {
    return n += step;
  };
}

const myCounter = customCounter(1, 5);

console.log(myCounter());
console.log(myCounter());
console.log(myCounter());


// 1. ✅ Змініть приклад із заняття по замиканню (counter) так, щоб користувач задавав початкове значення лічильника (у прикладі із заняття це 0) і крок зміни лічильника (у прикладі із заняття це 1).

// Приклади використання:
// const myCounter = customCounter (1, 5);
// const result1 = myCounter(); // => 6
// const result2 = myCounter(); // => 11
// const result3 = myCounter(); // => 16