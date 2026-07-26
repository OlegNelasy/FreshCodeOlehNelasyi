const statusWhoRequesting = Number(prompt("Кто вы? \n 1 Преподователь\n 2 Студент\n Введите 1 или 2!"));
const studentsName = prompt("Введите имя студента");
const studentsSurname = prompt("Введите фамилию студента");
const studentsSpecialty = prompt("Введите специальнсть студента");
const studentsNamberCource = Number(prompt("Введите номер курса студента"));
const studentsAveregeScore = Number(prompt("Введите средний балл студента"));
const studentsPercentageCompleteProgram = Number(prompt("Введите на сколько завершено програма от 0 до 100!"));

const isStudent = statusWhoRequesting === 2;
const isMentor = statusWhoRequesting === 1;
const hasPaid = false; //тут перед запуска укажите тру или фолс по статусу студнт оплатил учебу или нет!!!

if(studentsName === null 
    || studentsName.trim() === ""
    || studentsSurname === null
    || studentsSurname.trim() === ""
    || studentsSpecialty === null
    || studentsSpecialty.trim() === ""
    || Number.isNaN(studentsNamberCource)
    || studentsNamberCource <= 0
    || studentsNamberCource > 5
    || Number.isNaN(studentsAveregeScore)
    || studentsAveregeScore < 0
    || studentsAveregeScore > 100
    || Number.isNaN(statusWhoRequesting)
    || statusWhoRequesting <= 0
    || statusWhoRequesting > 2
    || Number.isNaN(studentsPercentageCompleteProgram)
    || studentsPercentageCompleteProgram < 0
    || studentsPercentageCompleteProgram > 100
    ) {
    console.log("Данные введены не коректно!!!");
} else {
    if(isMentor || (isStudent && hasPaid)) {
        console.log("ФИО: " + studentsSurname + " " + studentsName);
        console.log("Специальнсть: " + studentsSpecialty);
        console.log("Номер курса: " + studentsNamberCource);
        console.log("Средний балл: " + studentsAveregeScore);

        if(studentsPercentageCompleteProgram === 100) {
             console.log(studentsName + " Вы завершили программу получите сертификат!");
        } else {
            console.log(studentsName + " До завершения программы осталось: " + (100 - studentsPercentageCompleteProgram) + "%");
        }    
        console.log("Тип данных prompt() = " + typeof studentsName);
        console.log("Тип данных Number(prompt()) = " + typeof studentsNamberCource);
    } else {
        console.log("Вы не оплатили учебу в доступе ОТКАЗАНО!!!");
    }
}