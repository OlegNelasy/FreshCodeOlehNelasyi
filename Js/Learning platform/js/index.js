const STATUS_WHO_REQUESTING = Number(prompt("Кто вы? \n 1 Преподователь\n 2 Студент\n Введите 1 или 2!"));
const STUDENTS_NAME = prompt("Введите имя студента");
const STUDENTS_SURNAME = prompt("Введите фамилию студента");
const STUDENTS_SPECIALTY = prompt("Введите специальнсть студента");
const STUDENTS_NAMBER_COURCE = Number(prompt("Введите номер курса студента"));
const STUDENTS_AVEREGE_SCORE = Number(prompt("Введите средний балл студента"));
const STUDENTS_PERCENTAGE_COMPLETE_PROGRAM = Number(prompt("Введите на сколько завершено програма от 0 до 100!"));

let isStudent = false;
let isMentor = false;

let hasPaid = false; //тут перед запуска укажите тру или фолс по статусу студнт оплатил учебу или нет!!!

if(STUDENTS_NAME === null 
    || STUDENTS_NAME.trim() === ""
    || STUDENTS_SURNAME === null
    || STUDENTS_SURNAME.trim() === ""
    || STUDENTS_SPECIALTY === null
    || STUDENTS_SPECIALTY.trim() === ""
    || Number.isNaN(STUDENTS_NAMBER_COURCE)
    // || STUDENTS_NAMBER_COURCE === null
    || STUDENTS_NAMBER_COURCE <= 0
    || STUDENTS_NAMBER_COURCE > 5
    || Number.isNaN(STUDENTS_AVEREGE_SCORE)
    // || STUDENTS_AVEREGE_SCORE === null
    || STUDENTS_AVEREGE_SCORE < 0
    || STUDENTS_AVEREGE_SCORE > 100
    || Number.isNaN(STATUS_WHO_REQUESTING)
    // || STATUS_WHO_REQUESTING === null
    || STATUS_WHO_REQUESTING <= 0
    || STATUS_WHO_REQUESTING > 2
    || Number.isNaN(STUDENTS_PERCENTAGE_COMPLETE_PROGRAM)
    // || STUDENTS_PERCENTAGE_COMPLETE_PROGRAM === null
    || STUDENTS_PERCENTAGE_COMPLETE_PROGRAM < 0
    || STUDENTS_PERCENTAGE_COMPLETE_PROGRAM > 100
    ) 
{
    console.log("Данные введены не коректно!!!");
}
else
{
    if(STATUS_WHO_REQUESTING === 1 || (STATUS_WHO_REQUESTING === 2 && hasPaid))
    {
        console.log("ФИО: " + STUDENTS_SURNAME + " " + STUDENTS_NAME);
        console.log("Специальнсть: " + STUDENTS_SPECIALTY);
        console.log("Номер курса: " + STUDENTS_NAMBER_COURCE);
        console.log("Средний балл: " + STUDENTS_AVEREGE_SCORE);

        if(STUDENTS_PERCENTAGE_COMPLETE_PROGRAM === 100)
             console.log(STUDENTS_NAME + " Вы завершили программу получите сертификат!");
        else
            console.log(STUDENTS_NAME + " До завершения программы осталось: " + (100 - STUDENTS_PERCENTAGE_COMPLETE_PROGRAM) + "%");

        console.log("Тип данных prompt() = " + typeof STUDENTS_NAME);
        console.log("Тип данных Number(prompt()) = " + typeof STUDENTS_NAMBER_COURCE);
    }
    else
    {
        console.log("Вы не оплатили учебу в доступе ОТКАЗАНО!!!");
    }
}