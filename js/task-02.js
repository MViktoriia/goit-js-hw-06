const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ListEl = document.getElementById('ingredients');
// console.log(ListEl);

const IngredientsListItems = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  // console.log(listItem);
  return listItem; 
});
// console.log(IngredientsListItems);

ListEl.append(...IngredientsListItems);
