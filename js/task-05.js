const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

console.log(inputName.value);

const onInputName = event => {
    outputName.textContent = event.currentTarget.value;
    if (inputName.value === "") {
        outputName.textContent = "Anonymous";
    }
};

inputName.addEventListener('input', onInputName);
