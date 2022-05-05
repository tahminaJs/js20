// !--------------------------CallBack function-------------------

// function callback(x){
//     console.log("Коллбэк начал работать");
//     console.log(x);
//     console.log("Коллбэк закончил свою работу");
// }

// function main(x){
//     console.log("Главная функция начала работать");
//     callback(x);
//     console.log("Главная функция закончила работу");
// }

// main("Привет");


const students = [
    {name: "Nursultan" , age: 26 , status: "student"},
    {name: "Aibek" , age: 26, status:"student"},
    {name:"Kanat", age: 20, status: "student"},
    {name:"Nurislam", age: 22, status: "student"}
];

// console.log(students[Object.keys(["0"])]);

// for(let i of students){
//     console.log(i);
// }

// !--------------forEach-------------------
// ? Метод forEach  выполняет указанную функцию один раз для каждого элемента в массиве. Не создает новый массив!
// array.forEach((element,index, array(массив))=>{
    // тело функции
// })

// students.forEach(function(elem,index,array){
    // console.log(elem);
    // console.log(index);
    // console.log(array);
    // console.log(Object.values(elem));
    // console.log(elem.name);
// })

let newStudentFor = students.forEach((elem,index)=>{
    return elem;
})
console.log(newStudentFor);

// !-------------------map---------------------
// ? метод мар создает новый массив с результатом вызова указанной функции для каждого элемента массива.

let newStudent = students.map((elem,index)=>{
    return elem;
});

// console.log(newStudent)

//работа forEach под капотом
// function forEach(array){
//     for(let i = 0; i < array.length; i++){
//         console.log(array[i])
//     }
// }

// !---------------------filter----------------
// ? метод filter()  создает новый массив со вс еми элемиентами, которые прошли проверку, задаваемую в функцию

// let ageStudent = students.filter

// !----------------reduce--------------------
// метод reduce применяет функцию к каждому элементу массива (слева-направо)

// let sumAge = 0;
// for(let i = 0; i <students.length;i++){
//     sumAge +=students[i].age;
// }

// console.log(sumAge);


// let str = ["m", "a", "k","e", "r" , "s"];
// let newStr = str.reduce((word1,word2)=>{
//     return word1 + word2
// }, "Boorcamp ")
// console.log(newStr);

//TODO У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let users = [
    { name: "Kim", age: 41 },
    { name: "Kortney", age: 42 },
    { name: "Khloe", age: 37 },
    { name: "Kendall", age: 26 },
    { name: "Kylie", age: 24 },
  ];

  let family = users.map((elem,index)=>{
    return elem;
});

console.log(family);

