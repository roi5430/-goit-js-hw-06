// Напиши скрипт, який реагує на зміну значення
// input#font - size - control(подія input) і змінює інлайн - стиль span#text,
// оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const input = document.querySelector('input#font-size-control');
const magic = document.querySelector('span#text');
magic.style.fontSize = 55+"px";

 
input.addEventListener('input', onInput);
function onInput(evt) {
    
    magic.style.fontSize = evt.currentTarget.value + "px"; 
    console.log(evt)

}; 

