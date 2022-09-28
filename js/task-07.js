// Напиши скрипт, який реагує на зміну значення
// input#font - size - control(подія input) і змінює інлайн - стиль span#text,
// оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const input = document.querySelector('input#font-size-control');
const magic = document.querySelector('span#text');
const min = parseFloat(input.getAttribute("min"));
const max = parseFloat(input.getAttribute("max"));
magic.style.fontSize = ((max-min)/2+min) + "px";

 
input.addEventListener('input', onInput);
function onInput(evt) {
    
    magic.style.fontSize = evt.currentTarget.value + "px"; 
    console.log(evt)

}; 

