const inputForm = document.querySelector('.login-form');
const inputEmail = document.querySelector('input[name="email"]');
const inputPswd = document.querySelector('input[name="password"]');


const onSubmitForm = (event) => {
    event.preventDefault();
    const userDataObj = {};
    const { email, password } = event.currentTarget.elements;
    if (!email.value || !password.value) {
        alert('Все поля должны быть заполнены!');
    } else {
        userDataObj.email = email.value;
        userDataObj.password = password.value;
        console.log(userDataObj);
    }
};

inputForm.addEventListener('submit', onSubmitForm);
