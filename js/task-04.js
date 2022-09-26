// Створи змінну counterValue, в якій буде зберігатися поточне значення
// лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або
// зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const buttonDesc = document.querySelector('button[data-action="decrement"]');

const buttonIncr = document.querySelector('button[data-action="increment"]');

const span = document.querySelector('span#value')
let counterValue = 0;


buttonIncr.addEventListener('click', () => {
    span.textContent = counterValue += 1;
    console.log(buttonIncr);
});


buttonDesc.addEventListener('click', () => {
    span.textContent = counterValue -= 1;
    console.log(buttonDesc);
});
