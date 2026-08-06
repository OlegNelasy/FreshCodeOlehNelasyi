function User(id, name, surname, age, isMale, email, isSubscribed) {
    this.id = id;
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;

    // this.getFullName = function() {
    //     return `${this.firstName} ${this.lastName}`;
    // };
}

// 4.0. ⭐ Прописати в прототипі метод getFullName(), що повертає рядок з повним ім'ям для користувача.
User.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

const users = [];

// Заповнення масиву десятьма об'єктами з описом користувача
for (let i = 0; i < 10; i++) {
    const user = new User(
        i + 1,
        `Username${i}`,
        `Usersurname${i}`,
        Math.floor(Math.random() * 90),         // випадковий вік від 0 до 89
        Math.random() < 0.5,                    // випадкова стать
        `useremail${i}@gmail.com`,
        Math.random() < 0.5                     // випадкова підписка
    );
    users.push(user);
}

console.log('Начальный массив:', users);

// 4.1. ⭐ Отримати масив користувачів, які не підписані (not subscribed).
const usersNoSubscribed = users.filter(user => !user.isSubscribed);
console.log('Пользователи без подписки:', usersNoSubscribed);

// 4.2. ⭐ Вивести список повних імен користувачів.
console.log('Список полных имен пользователей:');
users.forEach(user => console.log(user.getFullName()));

// 4.3. ⭐ Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).
// const womenYangs = [];
// users.forEach(user => {
//     if(!user.isMale &&  user.age >= 6 && user.age <= 18) {
//         womenYangs.push(user.getFullName());
//         }
//     });

const womenYangs = users
    .filter(user => !user.isMale && user.age >= 6 && user.age <= 18)
    .map(user => user.getFullName());

console.log('womenYangs', womenYangs);

// 4.4. ⭐ Видалити з масиву користувача з email  useremail5@gmail.com.
// users = users.filter(user => user.email !== 'useremail5@gmail.com');
// console.log('Удалили пользователя useremail5@gmail.com:', users);
const userEmailIndex = users.findIndex(el => el.email === 'useremail5@gmail.com');
if(userEmailIndex !== -1){
    users.splice(userEmailIndex, 1);
    console.log(`Пользователь с емайлом useremail5@gmail.com удален!!! \n`, users)
}

// 4.5. ⭐ Змінити email користувачу з id 2 (можна спробувати використати find).
const targetUser = users.find(el => el.id === 2);
if (targetUser) {
    targetUser.email = '11111111111@gmail.com';
    // console.log(targetUser);
    console.log(`Пользователю id ${targetUser.id} ${targetUser.getFullName()}изменен емаил!!! \n`, users);
}

// 4.6. ⭐ Визначити, який відсоток користувачів підписані (subscribed).
// let subscribedCount = 0;
// users.forEach(el => { 
//     if(el.isSubscribed) {
//         subscribedCount++
//     }
// });
// const percentageSubscribeds = (subscribedCount / users.length) * 100;

const subscribedCount = users.filter(el => el.isSubscribed).length;
const percentageSubscribeds = (subscribedCount / users.length) * 100;

console.log(`Процент игроков с подпиской: ${percentageSubscribeds.toFixed(1)}%`);

// 4.7. ⭐ Знайти середній вік користувачів (спробувати використати reduce).
const averageAgeUsers = users.reduce((acc, el) => {
    return acc + el.age;
}, 0) / users.length; 
console.log(`Средний возраст пользователей: ${averageAgeUsers.toFixed(1)}`);

// 4.8. ⭐ Впорядкувати користувачів за віком (від наймолодшого до найстаршого) (sort).
users.sort((a, b) => a.age - b.age);
console.log('Пользователи отсартированы по возрасту \n', users);

// 4.9. ⭐ Перевірити, чи є в масиві користувач з email'ом useremail7@gmail.com.
// if(users.find(el => el.email === 'useremail7@gmail.com')){
//     console.log(`Пользователь с почтой useremail7@gmail.com найден!!!`); 
// }
if (users.some(el => el.email === 'useremail7@gmail.com')) {
    console.log(`Пользователь с почтой useremail7@gmail.com найден!!!`);
}






