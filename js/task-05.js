const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

console.log(inputName.value);

const onInputName = event => {
    outputName.textContent = event.currentTarget.value;
};

const onEmptyNameField = () => {
    if (inputName.value === "") {
        inputName.value = "Anonymous";
        outputName.textContent = "Anonymous";
        inputName.addEventListener('focus', () => {
            if (inputName.value === "Anonymous") {
                inputName.value = "";
            }
        });
    }
};

inputName.addEventListener('input', onInputName);
inputName.addEventListener('blur', onEmptyNameField);
