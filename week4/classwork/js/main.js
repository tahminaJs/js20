// Стрелочные функции, методы объектов, this. Классная работа

// Задание №1
// Создайте стрелочную функцию, которая принимает 2 аргумента и  возвращает сумму всех аргументов.

// ? let arrowFunc = (arg1,arg2) => arg1+arg2
// ? console.log(arrowFunc(5,8))

// Задание №2
// Создайте объект user со свойствами name, surname и age.

// Задание №3
// Создайте у объекта user метод SayHi, который будет выводить в консоль “Hello World”.

// Задание №4
// Создайте метод у объекта user, который будет выводить в консоль  его возраст.

// Задание №5
// Создайте метод у user, который будет возвращать полную информацию. Например: Homer Simpson 40

// Задание №6
// Сделайте 3 и 4 задание используя this.


// let user = {
//     name: 'Toha',
//     surname: 'Show',
//     age: 19,
//     sayHi: () => {
//         console.log("Hello World!");
//     },
//     sayAge : function(){
//        console.log(this.age);
//     },
//     sayInfo(){
//         console.log(`${this.name} ${this.surname} ${this.age}`);
//     }
// }

// user.sayHi()
// user.sayAge()
// user.sayInfo()

let user = {
    name: 'Toha',
    age: 19
}
console.log(`Happy Birthday ${user.name} !You are ${user.age} ! `)