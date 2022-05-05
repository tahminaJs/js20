// let mentor = {
//     company: "Makers",
//     name: "Aliya",
//     "last name": "Pattinson",
//     job: "JS-DEV and actor",
//     age: 25
// }
// console.log(mentor);
// console.log(mentor["last name"]);

//? переназначение
// mentor.age += 1;  //mentor.age = mentor.age+1
// console.log(mentor.age);

//? delete - удаление ключа
// delete mentor.company
// console.log(mentor);

//  ?добавление нового ключа
// mentor.phone = "Iphone 13 Pro Max";
// console.log(mentor);


// let mentor = {
//     company: "Makers",
//     name: "Aliya",
//     "last name": "Pattinson",
//     job: "JS-DEV and actor",
//     age: 25
// }

// let mentor2 = mentor;
// mentor2.name = "Misha";
// console.log("mentor" , mentor);
// console.log("mentor2", mentor2);

// ? spread operator
// let mentor2 = {...mentor}
// mentor2.name = "Misha";
//  console.log("mentor" , mentor);
//  console.log("mentor2", mentor2);



// !-----------------Простые методы массивов-------------------
// ?----------------push/pop-----------------------------------
//  Для добавления новых элементов в конец массивы сущ спец метод push
// Синтаксис:
// название_массива.push(новый элемент)
// let fruit = ["apple", "pineapple","lime",[1,2,3]]
//  fruit[3].push("banana")
// console.log(fruit);

// ? pop
// Для удаления элемениов массива исп метод pop(). Передавать аргументы в скобки не нужно
// TODO Синтаксис
// название_массива.pop()
// fruit[3].pop();
// console.log(fruit);

// ?-------------------------shift/unshift------------------
// Для добавления элемениа в начало массива исп метод  unshift.
// Синтаксис:
// название массива.unshift(новый элемент)
// let cars = ["Mers", "Tesla","Audi","Subary","Lada"];
// let newCar = "Toyota"
// cars.unshift(newCar)
// console.log(cars);

// ?  Метод shift удаляет первый элемент с начала массива, так же как и pop()
// Синтаксис
// название_массива.shift()
//  let shiftCar = cars.shift()
// console.log(cars);
// console.log(shiftCar);


// !-------------slice/splice----------------
// ? Метод slice - копи рует и возвращает новый массив.Принимает индекс - начальная позиция( с какого индексa начать) и конечную позицию(до какого элемента копировать, не включительно)
// название_массива.slice(начало индекса, конец индекса)
// let friends = ["Alex", "Marti", "Melman", "Gloria"]
// let zebra = friends.slice(1,2)
// console.log(friends);
// console.log(zebra);

// let madagaskar = friends.slice(0,4)
// console.log(madagaskar);


// ?  Метод splice более функциональный.Он может удалять, добавлять и заменять элементы в произвольной части массива. При этом splice() изменяет изначальный массив.
//  Синтаксис:
// название_массива.splice(индекс, кол элементов(либо для удаления, либо для добавления) , элЕменты которые нужно добавить(инсп не всегда))
// let friends = ["Alex", "Marti", "Melman", "Gloria"];
// let deleteFriends = friends.splice(1, 2)
// console.log(friends);
// console.log(deleteFriends);
// friends.splice(friends.length, 0, ... deleteFriends)
// console.log(friends);


// !-------------------split/join/reverse----------------------
// ?  С помощью метода join() можно обьединить все элементы массива в одну строку
// Ссинтаксис:
// название_масссива.join(соединитель)
let = fruit = ["Apple","Orange","Grape","Banana"]
// let newFruit = fruit.join(" and ");
// console.log(newFruit); 
// console.log(fruit);


// ? split(). Метод split(разбивает элементыстроки в массив по указанному разделителю)
// Синтаксис:
// название_массива.split(разделитель
// let date = "14/04/2022";
// let newDate = date.split("/")
// console.log(newDate);

// ?  Метод reverse() переворачивает и меняет порядок элементов в обратную сторону. (Меняет исходный массив)
// Синтаксис:
// название_массива.reverse()

// let number = [5,4,3,2,1];
// console.log(number);
//  number.reverse();
// console.log(number);

// let str = "Hello my name is Ekaterina";

// console.log(str.split(" ").reverse().join(" "));
// let splitStr = str.split(" "); // ["Hello", "my", "name", "is", "Ekaterina"]
// splitStr.reverse(); // ["Ekaterina", "is", "name", "my", "Hello"]
// let joinStr = splitStr.join(" "); // "Ekaterina is name my Hello"
// console.log(joinStr);

// !------------------concat-------
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let newArr = arr1.concat(arr2)
console.log(newArr);

// ? Для сортировки элементов массива исп  метод sort()
//  Синтаксис:
// название_массива.sort()
let fruits = ["Banana","Orange","Apple","Mango"]
fruits.sort()
console.log(fruits);

let numbers = [1,34,56,3,9,70];
numbers.sort((a,b)=> a-b); //по возростанию
numbers.sort((a,b)=> b-a); // по убываню
console.log(numbers);


