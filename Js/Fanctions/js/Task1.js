const isWorkingAgePerson = function(age) {
    return age >= 16 && age <= 64;
};

const age = Number(prompt("Введите проверенный возраст"));

if(Number.isNaN(age) || age <= 0){
    console.log(`Ошибка ввода!!! Недопустимый возвраст`);
} else {
    console.log(isWorkingAgePerson(age) ? `Возраст работоспособный` : `Возраст неработоспособный`);
}

