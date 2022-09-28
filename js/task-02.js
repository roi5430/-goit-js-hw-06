const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй
//  метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredientsList = document.querySelector("ul#ingredients");

const newList = [];

ingredients.map((ingredient) => {

  const newElementLiEl = document.createElement('li');
  newElementLiEl.textContent = ingredient;
  newElementLiEl.classList.add('item');
  return newList.push(newElementLiEl);
});

ingredientsList.append(...newList);
console.log(ingredientsList);