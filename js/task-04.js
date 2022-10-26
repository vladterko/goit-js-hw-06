const btnNumDown = document.querySelector('button[data-action="decrement"]');
const btnNumUp = document.querySelector('button[data-action="increment"]');
const result = document.querySelector('#value');

let counterValue = 0;

const onBtnDownClick = () => {
    counterValue -= 1;
    result.textContent = counterValue;
};

const onBtnUpClick = () => {
    counterValue += 1;
    result.textContent = counterValue;
};

btnNumDown.addEventListener("click", onBtnDownClick);
btnNumUp.addEventListener("click", onBtnUpClick);
