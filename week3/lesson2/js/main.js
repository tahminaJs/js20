// !-----------Модальное окно (interactions)----------
// alert("Hello");
// ? Alert - это небольшое окно с сообщением.Будет отображаться до тех пор пока не нажмем кнопку ок.
// let result = prompt("ВВедите имя:", "Пользователь");
// alert(result);
// ? prompt -  модальное окно для ввода значений. Принмает в себя 2 аргумента: название - текст, который отображается в окне; default - необязательный аргумент, который уст-т начальное значение, отобразиться если пользователь не ведет свое значение.

// let result = confirm("Вам есть 18?");
// console.log(result);
// ? confirm - отображает модальное окно с текстом (вопрос) и двумя кнопками: ОК(true) и отмена (false)

// !-----------------операторы сравнения----------
// ? оператлры сравнения всегда возвращают boolean(лог тип данных)
// const number 1 = 5;
// const number 1 = 6;
// console.log(number1>number2);

// console.log(20 >= 10); //true
// console.log(50 >= 50); //true
// console.log(5 <= 4); //false
// console.log('50' <= 100); // true

// // не строгое равенство ==, приводит к общему, игнорирует тип данных
// console.log("10"==10);
// console.log("n10"==10);
// // строгое равенство ===. НЕ приводит к общему типу данных, сравнивает тип данных и значения
// console.log("10"===10); //false
// console.log(10===10);  //true

//Boolean - узнать лог тип (true или false)
console.log(Boolean("string"));   //true
console.log(Boolean(""));  //false
console.log(Boolean(" ")); //true
console.log(Boolean(0));  //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(-1));  //true

// TODO -------------ложное------
// 0 - ноль
// "" - пустая строка
//  null - 
//  undefined
//false

// !-----------Логические операторф
// TODO  && (и) - возвращает true  если оба значения true
// let age = 20
// console.log(age > 18 && age < 25);  //true
// console.log(age > 18 && age < 19);  //false
// //  Если хотябы одна часть ложно (False), то все выражение будет False
// true && false // false
// true && true && false //false


// TODO || (или) - если хоть одно условие true , то все выражение true
false || true //true

let admin = false 
let user = "user"
admin || user  //"user"

// TODO ! ( не, отрицание)
!true  //false
// ! сначала приводит к логическому тпу true/false , затем возвращает противоположное значение
!100 //false
!"" //true
!0 //true

console.log(!!false);  //false
// !!- оператор возвращает булевое значение также как и функция Boolean()


// TODO Комбинирование

console.log(true||(false && true)); //true
console.log(!true || false && true);

// ? Приоритетность 1) ! (отрицание), 2) && (и), 3) || (или)

// ! ----------Условные операторы----------
// ? If...else
// if(условие){
//     код1;
// }else{
//     код2 (если условие неверное)
// }

// let age = 20
// if (age >= 18){
//     console.log("Доступ разрешен");
// }else{
//     console.log("Доступ запрещен!");
// }

// let user1 = prompt("Введите ваше имя")
// if(user1 === "Misha"){
//     console.log("Hi Misha!");
// }else if(user1 === "Aitegin"){
//     console.log("Hi Aitegin!");
// } else{
//     console.log("Я тебя не знаю");
// }


// !-----------------------Тернарный оператор-------
// то же самое что и конструктор if...else, но с коротким синиаксисом  два выхода
let sale = 20
let buyMac
sale > 50 ? buyMac = true : buyMac = false
console.log(buyMac);
// условие? сработает если условие правда : сработает если условие ложное


// ! switch
// ? switch case -  Условный оператор , который заменяетс с собой сразу несколькр  If. Минус в том, что для сравнения берется только одно значение. Плюс - визуально выглядит все понятно.

// пример на else if
// let day = 3
// if (day === 1){
//     console.log("Понедельник");
// }else if(day===2){
//     console.log("Вторник");
// }else if(day===3){
//     console.log("Среда");
// }


// Пример на switch case
   //  switch ( значение которое сравеиваем){
    // case то значение с которым хотим сравнить:
        // console.log("код, который отобразиться если условие правильное");
        // default: (если не одно из условии не верно.Обязательный параметр)
        // код который работает
// }
let day = +prompt("Введите день")
switch(day){
    case 1:
        console.log("Понедельник");
        break
        case 2:
        console.log("Вторник");
        break
        case 3:
        console.log("Среда");
        break
        case 4:
        console.log("Четверг");
        break
        default:
            console.log("Нет такого дня");
}

let x = true
switch (typeof x){
    case "boolean":
        console.log("boolean");
        break
    case "number":
        console.log("Тип данных Number");
        break
    default:
        console.log("Нет такого типа данных");
}