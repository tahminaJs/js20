// !--------------------------------------Regexp-----------------------------
// ? Существует два способа создания регулярного вражения
// 1) через специальную функцию-конструктор new Regex
// let str = new Regexp ("шаблон, "флаги")
// 2) через слеши 
// let str = /шаблон/флаги

// !--------------------------------------флаги-------------------------
// i - игнорирует регистр
// g - глобальный поиск
// m - многострочный поиск
// s - режим "dotall", точка включает перевода строки \n
// u - полная поддержка юникода
// y - поиск на конкретной позции в тексте


// let str = 'I believe I can fly'
// let pattern1 = new RegExp("i", "ig")
// let pattern2 = /i/ig


// !--------------Методы match---------------------------

// let str = 'I believe I can fly. I believe I can touch the sky'
// ? Методы match возвращает совпадение в в иде массива , а если совпадении нет, он вернет null
// Синтаксис
// ? строка.match(шаблон)
// let pattern1 = /i/gi
// let result = str.match(pattern1)
// console.log(result);

// !-----------------------методы replace---------------
// ? методы replace заменяет совпадения другой строкой, которая передается вторым аргументом в метод
// Синтаксис
// ? строка.replace(шаблон, замена)

// let myStr = "Typescript";
// let pattern1 = /Type/
// let result = myStr.replace(pattern1, "Java")
// console.log(result);

// !-------------------метод test--------------------
// ? Метод test проверяет, есть ли хоть одно совпадение
// Синтаксис
// ? шаблон.test(строка)

// let str = "Username: Sanzhar";
// let pattern1 = /user/i
// let result = pattern1.test(str)
// console.log(result);
// !-------------метод search----------------------
// ? метод search ищет совпадения, еслои находит- возвращает индекс совпадения, иначе возвращает  -1
// Синтаексис
// ? строка.search(шаблон)

// let str = "Ekaterina , Aktilek, Tahmina";
// let pattern2 = /kate/;
// let result = str.search(pattern2);
// console.log(result);

// !---------------Символьные классы--------------
//    TODO  ======= \w ищет латинские буквы
// let str = "Hello"
// let pattern1 = /\w/g;
// let result = str.match(pattern1)
// console.log(result);

// ?  \d  ищет числа
// let str = "iphone13 pro Max53256";
// let pattern2 = /iphone\d\d/g
// let result = str.match(pattern2)
// console.log(result);

// ?  ^ и $
// let str = "Mary had a little lamborghini"
// let pattern2 = /^mary/i
// let result = str.replace(pattern2, "Ekaterina")
// console.log(result);

// let str = "Mary had a little lamborghini"
// let pattern2 = /lamborghini$/
// let result = str.replace(pattern2, "Matiz")
// console.log(result);

// !--------------------Квантификаторы------------
//- * - ноль или более
//- + - один или более
//- ? - ноль или один
//- {n} -  n-е количество 
//- {n, x} - диапазон
//- {n, }  - n и более

// let str = "I am 90000 years old";
// let pattern = /\d{3,6}/
// let result = str.replace(pattern, 20);
// console.log(result);
//? 1) Найдите все строки по шаблону 3 буквы a, затем буква b и поменяйте 3 буквы a на знак '!'.  То есть из 'aaab' нужно сделать '!b'.

// let str = "aaab";
// let pattern = /\a{3}/
// let result = str.replace(pattern, "!")
// console.log(result);

// ?Дана строка с целыми числами. С помощью регулярки преобразуйте строку так, чтобы вместо этих чисел стояли их квадраты.

// let str = "10 2 3 4";
// let pattern1 = /\d+/g;
// str = str.replace(pattern1, (number) => number * number)
// console.log(str);

// let stroka = 123456;
// stroka===(1+2+3===4+5+6) ? console.log("да") : console.log("нет")

// let str = 'aaa aaa aaa'
//  let pattern = /aaa$/;
//  console.log(str.replace(pattern,'!'))

// function checkTask(str){
//     let pattern = /^aaa/;
//     console.log(str.replace(pattern,'!'))
//    }


// Создайте функцию которая принимает в качестве
// аргумента два числа и возвращает их сумму.
 
// function sum() {
//     const num1 = arguments[0]
//     const num2 = arguments[1] 
  
//     console.log(num1 + num2);
//   }
  
//   sum(7, 4);

// Реализуйте стрелочную функцию, принимающую строку и инвертирующую ее.
// Например, строка «JavaScript» должна стать строкой «tpircSavaJ».

let str = "JavaScript";
let func = (hello) => {
    return hello.split("").reverse().join("")
}
console.log(func(str));
