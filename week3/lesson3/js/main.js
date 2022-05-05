// ! ------------Для чего нужны циклы?-----------
// let arr = ["Takmina", "Aktilek", "Katya","Kamilla","Meerim"]

// arr[0] === "Kamilla" || arr[1]==="Kamilla" || arr[2]==="Kamilla" || arr[3]==="Kamilla"||arr[4]==="Kamilla" ? console.log("Мы нашли Камилу") :console.log("Мы  не нашли Камилу");

// for(let i = 0; i < arr.length; i++) {
//     arr[i] === "Kamilla" ? console.log("Мы нашли Камилу") : console.log("в списке нет");
// }

// !------------------Инкремент и декремент----------------------
// ?  Инкремент - это УВЕЛИЧЕНИЕ значения переменной на единицу, а декремент - это УМЕНЬШЕНИЕ значения переменной на единицу.

//  Инкримент
// let inc = 0
// console.log(inc);
// inc++
// inc = inc + 1
// console.log(inc);

// Декримент
// let dec = 3
// dec = dec - 1
// dec--
// console.log(dec);

// Постфиксный и префиксный инкремент и декримент
// ++i
// --i

// Постфиксный
// let i = 0
// console.log(i++);  //Выведет 0, затем увеличит на 1
// console.log(i);

// Префиксный
// let pre = 0
// console.log(++pre); //Увеличит на 1, а затем выведет 1

// !--------------------Цикл for--------------
// ?  Цикл for исп-ся когда вы заранее знаете сколько раз вам нужно что-то сделать
// Синтаксис цикла for:
// for(1-начало; 2- условие; 3-шаг){
//     код для обработки каждого элемента
// }

// for(let i = 0; i < 5; i++){
//     console.log(`Ваша оценка: ${i}`);
// }

// !-------------------break, continue-------------------
// С помощью ключевого слова break, можно преждевременно остановить цикл, не дожидаясь пока условие возвратит false

// let arr = [1,2,3,4,5,0,6]
// for(let i = 0; i < arr.length;i++){
//     if(arr[i]===0) break
//     console.log("Покажет число", arr[i]);
// }

// ? continue
// Используя ключевое слово continue , можно остановиться на текущем кругу цикла.При continue, цикл просто переходит на след круг.
// let arr = ["a", "b", "c", "d", "e"];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === "c") continue;
//   console.log(arr[i]);
// }

// !------------------While----------------
// Цикл while также может исп для многократного повторения одного участка кода

// Синтаксис while:
// while(условие){
//     тело цикла
// }

// let password = null
// while(password !== 'qwerty'){
//     password = prompt("Введите пароль:")
//     console.log("Пароль неверный");
// }

// !--------------------------do....while--------------
// ?  Цикл do...while вначале выполняет тело цикла,  а затем проводит проверку условия.
// Синтаксис do...while
// do{
//     тело цикла(действие)
// }while(условие)

// let km = 0
// do{
//     console.log("Едем дальше");
//     km++;
// }while(km < 5 );


// !------------------ циклы for..in, for...of----------------
//  ? for in
// Цикл for in  выполняет итерацию по перечисляемым свойствам обьекта, такими свойствами у обьекта будут ключи, а у массива индексы.
// Синтаксис for in
// for(переменная in название_ обьекта){
//     тело цикла
// }

// let obj = {
//     name: "Aliya",
//     age: 20,
//     job: "JS Dev"
// }
// for(let i in obj){
// console.log(i);
// console.log(obj[i]);
// }

// ? for of
// Цикл for of перебирает массивы, под переменной будет храниться индекс
        //  ---for in---
// let arr = [4,7,5,9,0]
// for (let i  in arr){
//     console.log(i);
//     console.log(arr[i]);
// }

// ----------for of-------
// for(let i of arr){
//     console.log(i);

// }

// !------------Вложенные циклы-------------
// let arr = [
//     [1,2],
//     [3,4],
//     [5,6],
// ];
// arr[0][1]

// for(let i = 0; i < arr.length; i++){
//     // console.log(arr[i]);
//     for(let j = 0; j < arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }

// TODO
// Дан обьект.По ключу нужно выводить значение
let objCar = {model: "Mers", year :"2018", color:"brown"};
for(let i in objCar){
    console.log(`${i} - ${objCar[i]}`);
}



