
// ! ------------- function Declaration -------
// ? Чтобы какая-то часть программы (блок кода) неоднократно не повторялась используем функции.
// ? Функция - это именованный блок кода, который вызывается в нужных местах программы по имени.

// Также, как и с пременными, при присвоении функции имени, мы говорим что объявляем функцию. Такие функции называются function declaration.
// Синтаксис:
// function имя_функции(список_параметров) {
//     блок кода
// }

// function funcName(name, job, company) {
//   console.log(`Привет ${name}. С днём рождения! `);
//   console.log(job);
// }
// funcName("Айдана", "Куратор");
// funcName("Миша");
// funcName("Айтегин");

// Внутри функции можно использовать любые инструменты, которые есть в JS, а также писать другие функции.

// function countUntil(a, b) {
//     for (let i = a; i <= b; i++) {
//       console.log(`Счетчик ${i}`);
//     }
//   }
  
//   countUntil(1, 10);
//   countUntil(3, 8)

// Создать функцию, которая выводит числа от 1 до 10, но только четные

// function counter(a,b){
//     for(let i = a; i <= b; i++){
//         if(i%2===0){
//             console.log(i);
//         }
//     }
// }
// let a = +prompt("Enter first number");
// let b = +prompt("Enter second number");
// console.log();
// counter(a,b)



// ! ------------- return -------------
// ? Для того, чтобы вернуть результат функции, нужно использовать return. После ключевого слова return? дальнейший код игнорируется.

// function calc(a, b) {
//   //   console.log(a * b);
//   let sum = a * b;
//   return sum;
// }
// let result = calc(3, 4);
// console.log(result);

// TODO 1. Напишите программу на JavaScript для вычисления суммы двух заданных целых чисел. Если два значения одинаковы, то возвращается тройная их сумма.

// let arr = [
//     "Hello",
//     5,
//     false,
//     { job: "JSDev" },
//     ["World", [4, 7, 8], { company: "makers" }],
//   ];

//   for (i of arr) {
//     if (typeof i !== "object") {
//       console.log(i);
//     } else if (Array.isArray(i)) {
//       for (j of i) {
//         if (Array.isArray(j)) {
//           let sum = 0;
//           for (k of j) {
//             console.log(k);
//             sum += k;
//           }
//           console.log(sum);
//         } else if (typeof j === "object") {
//           for (a in j) {
//             console.log(j[a]);
//           }
//         }
//       }
//     }
//   }


// !---------------------Область видимости--------------------
// ? Область виидимости - это система определяющая доступность переменных.Так как функция это блок кода со своей внутренней логикой, создаются различные области видимости.
// Пример

// !-----------------------Hoisting---------------
// ? hoisting - Это механизмв JS, в котором пременные(var) и обьявления функции передвигаются вверх

// Это озночает то, что совершенно неважно где были обьявлени функции или переменная var, все они передвигаются вверх своей области.
// При переменной var - поднимаются только обьявления переменной(название), но не значение. В случае функции- поднимается вся функция.

// showName();

// function showName(){
//   console.log("It`s hoisting");
// }

// console.log(a);
// var a = 5;

// !--------------function expression-----------------------
//  function expressin не поддерживает hoisting
//  let func = function(){
//   console.log("Это анонимная функция");
// }

// func();


// !-------------------callback function--------------------
// ? Callback function - это функция, которая передается в аргументы внутри функции
// let ask = function (question, yes, no) {
//   if (confirm(question) === true) {
//     yes();
//   } else {
//     no();
//   }
// };

// ask(
//   "Вы согласны?",
//   function () {
//     console.log("Вы согласны с ответом");
//   },
//   function () {
//     console.log("Вы не согласны с ответом");
//   }
// );

// !--------------------------arguments-------------
// ? arguments - это массивоподобный обьект, доступный только внутри фуекции( имеет свойство length и индексацию, но не имеет доступа к методам массива). Через arguments можно ссылаться на аргументы функции внутри нее:
function func(a,b,c,d){
  // console.log(a);
  // console.log(arguments);
  // console.log(arguments[2]);

for(i of arguments){
  console.log(i);
}
}
func(10,20,30,40,33,24,54,2323)