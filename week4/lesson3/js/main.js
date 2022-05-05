// !---------Параметры и аргументы--------------
// ?Параметры функции - это имена, перечисленные в обьявлении функции.
// ?Аргументы функции - это реальные значения, передаваемые функцией.
// ?Например

// function funcName(Параметры){

// }
// funcName(аргументы)

// !--------------------Стрелочные функции--------------
// ? Стрелочные функции работают также как и две остальные функции, но имеют упрощенный синтаксис и их довольно удобно исп-ть в определенных ситуациях.
// Синтаксис:
//  1) let arrowFunc = () => {}
//  2) let arrowFunc = name => consol.log(name)

// let func = (a,b) => a+b;
// console.log(func(4,5));

// let someFunc = () => {
//     console.log(arguments);
// }
// someFunc("Hello",4,true,null);

// TODO В стрелочных функциях не работает arguments

// let km = (a) => a*1000;
// console.log(km(3)); 

// let arrowFunc = (m) => {
//    return console.log(m*1000); 
// }
// console.log(arrowFunc(6));

// !--------------Методы обьектов-----------------
// Методы обьектов - это 

// let car = {
//     model:"Toyota",
//     marka:"Camry 70",
//     color: "pink",
//     year: 2022,
//     show: function (message){
//         console.log(`Наша машина едет ${message}`);
//     },
//     showKey(){
//         console.log(car.marka);
//     }
// }
// console.log(car);
// car.show("на ИК");
// car.showKey();


// !-------------------this----------------
// console.log(this);
// =============
// console.log(window);

// function myFunc(){
//     console.log(this);
// }
// myFunc();


// let dog = {
//     name:"Шарик",
//     year: 5,
//     show(){
//         console.log(this);
//     }
// }
// dog.show();

// let obj1 = {
//     hello(){
//         console.log("Hello");
//         return this  //consol.log(obj1)
//     },
//     obj2: {
//         name:"dog",
//         speak(){
//             console.log("gavvvvv");
//             return this  //consol.log(obj2)
//         }
//     }
// }
// console.log(obj1);
// console.log(obj1.hello());
// console.log(obj1.obj2.speak());
// console.log(obj1.obj2);

let user = {
    firstName: "Айтегин",
    sayHi(){
        let arrow = () => console.log(this.firstName);
        arrow()
    }
}
user.sayHi();