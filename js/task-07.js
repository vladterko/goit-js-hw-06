const rangeControl = document.querySelector('#font-size-control');
const outputText = document.querySelector('#text');

const onTextSizeChange = (event) => {
    let currentValue = event.currentTarget.value;
    outputText.style.fontSize = `${currentValue}px`;
};

rangeControl.addEventListener('input', onTextSizeChange);
