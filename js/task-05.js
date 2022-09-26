// Напиши скрипт, який під час набору тексту в інпуті input#name-input
// (подія input), підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputEl = document.querySelector('#name-input');
console.dir(inputEl);

const spanEl = document.querySelector("#name-output");
console.dir(spanEl)
inputEl.addEventListener('input', handlerInput);
function handlerInput(evt) {
   spanEl.textContent = evt.currentTarget.value;
    console.log(evt);
}