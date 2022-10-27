function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector('#controls > input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const output = document.querySelector('#boxes');

function getAmount() {
  const amount = Number(inputNumber.value)
  createBoxes(amount);
};

function createBoxes(amount) {
  let arr = [];
  for (let i = 0, size = 30; i < amount; i += 1, size += 10) {
    arr.push(`<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`);
  }
  output.insertAdjacentHTML("afterbegin", arr.join(''));
};

const onClearBtn = () => {
  output.innerHTML = '';
  inputNumber.value = '';
};
 
createBtn.addEventListener('click', getAmount);
destroyBtn.addEventListener('click', onClearBtn);
