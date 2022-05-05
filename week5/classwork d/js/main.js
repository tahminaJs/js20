// Деструктуризация. Класснная работа.

// Задание №1
// Дан массив [ "первый", "второй","третий", "четвертый","пятый","шестой","седьмой" ];
// Запишите первый элемент этого массива впеременную elem1,
// второй - в переменную elem2, третий - в переменную elem3,
// а все остальные элементы массива - в переменную arr.


// // ? ответ
// let task1 = [
//         "первый",
//         "второй",
//         "третий",
//         "четвертый",
//         "пятый",
//         "шестой",
//         "седьмой"
//     ];

// let [elem1,elem2,elem3,...arr] = task1;
// console.log(elem1,elem2,elem3);
// console.log(arr);

// Задание №2
//  Дан объект { name: "Петр", surname: "Петров", age: "20 лет" }.
// Запишите соответствующие значения в переменные name, surname и age.

// let task2 = { name: "Петр", surname: "Петров", age:"20 лет" };
// let {name,surname,age} = task2
// console.log(name,surname,age);

// Задание №3
// Дан массив.
// let task3 = [
//     "первый",
//     "второй",
//     "третий",
//     "четвертый",
//     "пятый",
//     "шестой",
//     "седьмой"
// ];
// Запишите последний элемент этого массива в переменную elem1,
// а предпоследний - в переменную elem2.

// let [,,,,, elem1,elem2] = task3;
// console.log(elem1,elem2);

// Задание №4
// Напишите функцию, которая принимает массив из чисел в качестве аргумента.
// Каждое число возвести в квадрат. Затем, функция должна вернуть измененный массив.
// Деструктурируйте полученный результат, т.е. первый элемент записать в переменную, а остальные элементы
// сохранить в новом массиве.

// Задание №5
// Дан объект {name: 'Luck', 'age': '22', }.
// Запишите соответствующие значения в переменные name, и age.
// Сделайте так, чтобы если какое-то значение не задано - оно принимало значение по умолчанию.

// let programmer = {
//     name: "John",
//     lastName: "Shawn",
//     age: 30,
//     codelanguage: "Python",
//     salary:3000,
// }
// console.log(programmer.name, programmer.lastName,programmer.age,programmer.codelanguage,programmer.salary);

// Задание №2
// Запросите у пользователя ввести два числа и верните ему сумму этих двух чисел.
// Если сумма больше 10 и в то же время меньше 20 то, умножьте на 5. Если же сумма больше 20 и меньше 50, то разделите на 3.
// Иначе прибавьте 10.
// Для решения используйте функции: prompt и parseInt или опертаор +.
// Ответ может быть и десятичным числом, и выведите это конечное число.
// Например:
// let firstNum = prompt("Введите первое число")
// let secondNum = prompt("Введите второе число")

// let a = +prompt("Введите первое число:"); 
// a = parseInt(a); 
// let b = +prompt("Введите второе число:"); 
// b = parseInt(b); 
// let c = (a+b); 
// if(c > 10 && c < 20){
//     console.log(c * 5);
// }else if(c > 20 && c < 50){
//     console.log(c / 3);
// }else{
//     console.log(c + 10)
// };

// Задание №3
// Вам дан сложный вложенный список. Используя цикл выведите все элементы в виде ключ: значение
// Ввод:
// let aboutUs = [
//   ["name", "Makers"],
//   ["type", "Bootcamp"],
//   ["place", "Bishkek"],
//   ["languages", "JavaScript, Python"],
//   ["simply", "the best!"]
// ];
// Вывод:
// name: Makers
// type: Bootcamp
// place: Bishkek
// languages: JavaScript, Python
// simply: the best!


// Задание №4
// Есть объект users в котором перечислен
// возраст участников. Напишите код,
// который выведет суммарный возраст
// всех участников. Решите задачу через
// цикл for...in.
// let users = {
//   John: 28,
//   Mark: 30,
//   David: 25,
//   Richard: 42
// };

// let summary = 0;
// for (let user in users) {
//   summary += users[user];
// }
// console.log(summary);

// Задание №5
// Напишите функцию removeElem(arr, element), которая принимает 2 аргумента.
// Первый аргумент- это массив.
// Второй аргумент- это элемент который нужно удалить из массива.
// Пример: let arr = [2, ‘hello’, true,  ‘world’,  5, ‘js’]
//     removeElem(arr,’world’)
// Ответ: [2, ‘hello’, true,  5, ‘js’]


    
// var arr = [5,7,8,"Hello",10];
// var elem = arr.indexOf('Hello');
// if (elem !== -1) {
//   arr.splice(elem, 3);
//   arr = arr.splice
//   console.log(arr)
// }
// }
// function removeElem(arr, element){
// let myArray = [5,7,8,"Hello",10];
// let  newArray = myArray.filter(function(f) { return f !== 'Hello' })

// console.log(newArray)
// }

// function palindrom(str) {
//     let cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
//     a = cstr;
//     b = cstr.split('').reverse().join('');
//     if (a == b) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   console.log(palindrom('tenet'));
//   console.log(palindrom('my gym'));
//   console.log(palindrom('nolan'));

// let aboutUs = [
//     ['name', 'Makers'],
//     ['type', 'Bootcamp'],
//     ['place', 'Bishkek'],
//     ['languages', 'JavaScript, Python'],
//     ['simply', 'the best!'],
//   ];
//   for (elem of aboutUs) {
//     console.log(`${elem[0]}: ${elem[1]}`);
//   }
//   let obj = {
//   size: { width: 100, height: 200 },
//   items: ["Cake", "Donut"],
//   extra: true,
// };

// let {
//   size,
//   size: { width, height },
//   items,
//   items: [food1, food2],
//   extra,
// } = obj;
// console.log(size);


// let elevator = {
//     current: 1,
//     max: 16,
//     min: 1,
//     printFloor() {
//       console.log(this.current);
//     },
//     upOneFloor(){
//         if (this.current >= this.min && this.current < this.max){
//             this.current++
//             this.printFloor();
//         } else{
//             console.log("error!");
//         }
//     },
//     downOneFloor(){
//         if(this.current > this.min && this.current <= this.max){
//             this.current--;
//             this.printFloor();
//         }else{
//             console.log("Error!");
//         }
//     },
//     toFloor(floor){
//         if(floor>= this.min && floor <= this.max){
//             while(this.current < floor){
//                 this.upOneFloor();
//             }
//             while(this.current > floor){
//                 this.downOneFloor()
//             }
//         }else{
//             console.log("error!")
//         }
//     }
//   };
  
//   elevator.printFloor();
//   elevator.upOneFloor();
//   elevator.upOneFloor();
//   elevator.downOneFloor();
//   elevator.downOneFloor();
//   elevator.toFloor(7);
//   elevator.toFloor(4);

// Задание №12
// Вам нужно поменять местами значения
// переменных при помощи деструктуризации.
// let a = 0;
// let b = 1;
// Пример результата:
// console.log(a, b); // 1, 0

// let num1 = 0;
// let num2 = 1;
// [num1, num2] = [num2, num1];
// console.log(num1, num2);

// Задание №3
// Вам дан сложный вложенный список. Используя цикл выведите все элементы в виде ключ: значение
// Ввод:
// let aboutUs = [
//   ["name", "Makers"],
//   ["type", "Bootcamp"],
//   ["place", "Bishkek"],
//   ["languages", "JavaScript, Python"],
//   ["simply", "the best!"]
// ];





//     Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// )
// var arr = ['Hi', 'privet', 'function', 'coin', 'ale', 'kak', 'computer'];
// function func(elem){return elem.length > 5};
// var newArr = arr.filter(func);
// console.log(newArr); 

// Задание №6
// Напишите функцию palindrom(word), принимающая один аргумент word.
// Функция, должна выводить в консоль true, если строка является палиндромом, в обратном случае false. При этом нужно учитывать пробелы и регистр.
// Палиндром – слово, которое читается одинаково слева направо и справа налево (например, ротор)

// function palindrom(word){
//     let word="kazak"
// }

// Задание №9
// Дан массив
// let task2 = [10, 25, 25, 15, 5, 10];
// Выведите в alert сумму элементов
// этого массива.
// Используйте метод .forEach()
// let task2 = [10, 25, 25, 15, 5, 10];
// let sum = 0;
// task2.forEach(function (item, index, arr) {
//   sum += item;
// })
// console.log(sum);


// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];
// function count(arr) {
//   return arr.reduce(
//     (prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev),
//     {}
//   );
// }
// console.log(count(task5));

// Задание №13
// Дан объект { size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true}.
// Деструктуризуйте все свойства и элементы данного объекта, включая вложенные объекты и массивы и выведите в консоли.
// 



// TODO Задание № 1
// Найдите сумму чисел в массиве
// методом forEach(), методом reduce() и map().
// Пример: [5, 6, 7, 8, 9]
// Ответ: 35

// ? let sum = [5, 6, 7, 8, 9].reduce(add, 0);

// function add(a, b) {
//     return a + b;
// }
// console.log(sum);

// ? let sum = [5, 6, 7, 8, 9].reduce((a, b) => a + b, 0);
// console.log(sum)


//  TODO Задание № 2
// Оставьте в массиве только те строки,
// длина которых равна или больше 5-ти символов.
// Используйте filter().
// Пример: [‘aaa’, ‘aaaqqq', ‘zzzqq’, ‘zz’, ‘qsaa’, ‘q’, ‘az’]
// Ответ:  [‘aaaqqq', ‘zzzqq’]

// ? let arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// function func(elem){return elem.length >= 5};
// let newArr = arr.filter(func);
// console.log(newArr);

// TODO Задание № 3
// Дан массив с числами. Вывести количество
// отрицательных чисел в этом массиве.
// Пример: [7, -1, -9, 0, 4, 5, -6]
// Ответ: 3

// let nums = [7, -1, -9, 0, 4, 5, -6];
// for(i=0; i < 0 ){
//   console.log()
// }

// Дан объект { size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true}.
// Деструктуризуйте все свойства и элементы данного объекта, включая вложенные объекты и массивы и выведите в консоли.
// let obj =  { size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true}

//  TODO DOM. Классная работа

// ?Задание №1
// 	Всем <h3> поставьте текст '!!!'.

let h3s = document.getElementsByTagName('h3')
console.log(h3s);
for(i of h3s){
  i.innerText = '!!!'
}


// Задание №2
// 	Всем <h3> сделайте текст зеленого цвета.

// Задание №3
// 	Создайте маркированный список,
// При помощи цикла добавьте в маркированный
// список 30 li - элементов с текстом:
// “1 - овечка”, “2 - овечка”,
// “3 - овечка”,
// и так до “30-овечка”;

// Задание №4
// В css создайте класс .active в
// котором пропишите цвет текста blue.
// Добавьте всем span элементам класс active
// через document.getElementsByTagName.

