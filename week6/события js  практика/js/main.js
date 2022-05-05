// let btn = document.getElementById('btn');
// btn.addEventListener("click",function(){
//     console.log("Hello Makers");
// })
//  btn.addEventListener("click", () => {
//     console.log("Hello Bootcamp");
//  })
// btn

// btn.onclick = () =>
//  alert('Hello')

// btn.addEventListener("click",handler2)

// function handler(){
//     alert('Thank you')
// }

// function handler2(){
//     alert('Thank you again!')
// }

// btn.removeEventListener('click', handler)

// let btn = document.getElementById("button");
// let body = document.querySelector("body");

// ? addEventListener() - слушатель событий. Один из способов добавления события.
// Синтаксис: название_элемента.addEventListener(название_события, callBack function)

// console.log(changeColor());
// btn.addEventListener("click", changeColor);

// btn.onclick = function changeColor() {
//   body.style.backgroundColor = "red";
// };

// ! =========== addEventListener VS on_название_события======
// ? 1) в addEventListener() можно каждый раз добавлять новые события, но при "on_название_события" каждое новое созданное событие перезаписывается (можно добавить только одно событие)
// ? 2) в addEventListener() и on_название_события в main.js передаём саму функцию (либо название), а в index.html on_название_события нужно передать название функции и вызвать её

// ! ============== События JS ===================
// todo ============== события на мышку

// ? click - на левый клик мышью
// btn.onclick = function changeColor() {
//   body.style.backgroundColor = "red";
// };

// ? contextmenu - когда кликнули правой кнопкой мышью
// btn.oncontextmenu = () => {
//   body.style.backgroundColor = "green";
// };

// ? mouseover / mouseout - когда мышь наводится на элемент и покидает элемент
// btn.onmouseover = () => {
//     body.style.backgroundColor = "pink";
//   };

//   btn.onmouseout = () => {
//     body.style.backgroundColor = "black";
//   };

// ?  mousedown / mouseup - когда нажали и / отпустили кнопки мыши на элементе
// let trump = document.getElementById("trump");
// trump.onmousedown = () => {
//     trump.style.width = "500px";
// }

// trump.onmouseup = () => {
//     trump.style.width = "150px";
// }

// ? mousemove - при движении мыши
// trump.onmousemove = (event) => {
//     console.log(event.clientX,event.clientY);
// }

// TODO  Работая с обработчиками событий важно знать, что обработчики, в нашем примере onmousemove, дают доступ к такому объекту событий - event. Данный объект можно словить в качестве параметра передаваемой функции(т.к это всего лишь параметр называть его можно как угодно, это может быть "e", xyz, event). Объект событий дает нам доступ к атрибутам и свойствам определенного события, в нашем случае событие mousemove имеет такие свойства как target, buttons, clientX, clientY и многие другие. Свойство target показывает на каком именно HTML объекте сработало событие, в нашем случае картинка в теге img, с классом city - img.city, с помощью свойств clientX, clientY можно отслеживать координаты движения мыши, например:

// !----------------------------------События на input---------------------------

// ? change - событие на изменение инпута, сработает после расфокусировки
// let inp = document.querySelector("#inp")
// let title = document.getElementById("title");

// inp.addEventListener("change" , (event) => {
//     title.innerText = event.target.value
// });

// ? input - сработает сразу же при изменений инпута
// inp.addEventListener("input" , (event) => {
//     title.innerText = event.target.value
// });

// ? focus - когда пользователь фокусируется на элемент, например нажимает на input
// inp.addEventListener("focus", () =>{
//   inp.setAttribute("placeholder","Введите имя!")
// })
// ? setAttribute() - метод DOM, принимающий в аргументы название аттрибута и значению.

// // ? dblclick - срабатывает на двойной клик мыши
// let p = document.getElementsByTagName("p")[0]
// p.addEventListener("dblclick",() => {
//   p.style.backgroundColor = "orange";
// });

// // ? mouseleave - когда отводим мышь от границ элемента
// p.addEventListener("mouseleave",() => {
//   p.style.fontSize = "40px";
// })

// TODO ----------------------TASKS-------------------
// События Native JS. Таск 2
// Создайте HTML-форму и при нажатии на кнопку проверяйте заполненность всех полей. Если останутся незаполненные поля — выводите предупреждение и не отправляйте форму.

// let btn = document.createElement("button");
// btn.innerText = "Add form";
// let form = document.forms[0];
// form.append(btn);
// form.addEventListener("submit", (event) => {
//   let inputs = form.querySelectorAll("input");
//   inputs.forEach((item) => {
//     if (!item.value) {
//       alert("Заполните все поля");
//       event.preventDefault(); // нужно для того, чтобы при нажатии на кнопку отправить форму, страница не перезагружалась

//     }
//   });
// });

// let inDiv = document.getElementById("inDiv")

//  TODO События Native JS. Таск 3
// Создайте обработчик события, который при нажатии кнопок направлений (влево, вправо) анимированно сдвигает элемент влево или вправо на 100px.

let square = document.getElementById("square");
let btnLeft = document.getElementById("left");
let btnRight = document.getElementById("right");
let margin = 0;
btnLeft.addEventListener("click", () => {
  if (margin <= 0) return
  square.style.marginLeft = `${margin -= 100}px`;
});

btnRight.addEventListener("click", () => {
  square.style.marginLeft = "100px";
});