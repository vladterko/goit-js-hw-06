const categoriesList = document.querySelector('#categories');
const categories = document.querySelectorAll('.item');

console.log('Number of categories:', categoriesList.children.length);
for (const element of categories) {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length);
};
