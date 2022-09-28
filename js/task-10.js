

// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку
// Створити, після чого рендериться колекція.Натисненням на кнопку Очистити,
// колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від
//  попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
//  Використовуй готову функцію getRandomHexColor для отримання кольору.


// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxOld = document.querySelector("div#boxes");
const input = document.querySelector("input");

let sizeBox = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
console.log(createBtn)


function createBoxes(amount) {
  amount = input.value;
  
  const box = document.createElement('div')
  box.classList.add('box');
  box.style.backgroundColor = getRandomHexColor();
  sizeBox += 10;
  box.style.width = sizeBox + 'px';
  box.style.width = sizeBox + 'px';
  boxOld.after(box)
};

function destroyBoxes(evt) {
  
  const boxRemove = document.querySelector(".box");
  boxRemove.remove();
  
}