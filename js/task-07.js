// Напиши скрипт, який реагує на зміну значення
// input#font - size - control(подія input) і змінює інлайн - стиль span#text,
// оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const input = document.querySelector('input#font-size-control');
const magic = document.querySelector('span#text');
let value = 16;

input.addEventListener('input', onInput);
function onInput(evt) {
    value += 1
    magic.style.fontSize = value + 'px'; 
    console.log(evt)

}; 