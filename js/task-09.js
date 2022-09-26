


// Напиши скрипт, який змінює кольори фону
// елемента < body > через інлайн - стиль по кліку на button.change - color 
// і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.



const button = document.querySelector("button.change-color");
const span = document.querySelector('span.color');
const body = document.querySelector('body');
// console.log(span);
// console.log(button);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener('click', (onClick) => {
  body.style.backgroundColor = getRandomHexColor();
   span.textContent = getRandomHexColor();  
});
