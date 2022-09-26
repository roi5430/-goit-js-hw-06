// Порахує і виведе в консоль кількість категорій в ul#categories,
//  тобто елементів li.item.

// Для кожного элемента li.item у спику ul#categories,
//  знайде і виведе в консоль текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).

const ulCategoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', ulCategoriesEl.length);

// const ulCategoriesEl = document.querySelector('ul#categories')
// console.log('Number of categories:', ulCategoriesEl.children.length )


for (let i = 0; i < ulCategoriesEl.length; i += 1) {
  const categoryTitle = ulCategoriesEl[i].firstElementChild.textContent;
  const elementsNumber = ulCategoriesEl[i].lastElementChild.children.length;
  console.log(`Category:`, categoryTitle);
  console.log(`Elements:`, elementsNumber);
}