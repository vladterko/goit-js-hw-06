const validationInput = document.querySelector('#validation-input');

const onValidQuantityInput = () => {
    const num = Number(validationInput.getAttribute("data-length"));

    if (num === validationInput.value.length) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
};

validationInput.addEventListener('blur', onValidQuantityInput);
