function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector('.change-color');
const showValue = document.querySelector('.color');
const bgColor = document.querySelector('body');

const onColorChangeBtn = () => {
  const color = getRandomHexColor();
  showValue.textContent = color;
  bgColor.style.backgroundColor = `${color}`;
};

colorBtn.addEventListener('click', onColorChangeBtn);
