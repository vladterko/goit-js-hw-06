const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

let markupArr = [];

    for (const ingredient of ingredients) {
      const ingredientEl = document.createElement('li');
      ingredientEl.textContent = ingredient;
      ingredientEl.classList.add('item');
      markupArr.push(ingredientEl);
};

ingredientsList.append(...markupArr);
