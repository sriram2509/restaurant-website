const yournameEl = document.querySelector('#yourname');
const orderEl = document.querySelector('#order');
const howmuchEl = document.querySelector('#howmuch');
const numberEl = document.querySelector('#number');
const foodEl = document.querySelector('#food');
const dateEl = document.querySelector('#date');
const messageEl = document.querySelector('#');

const form = document.querySelector('#signup');


const checkyourname = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(yourname)) {
        showError(yournameEl, 'yourname cannot be blank.');
    } else if (!isBetween(yourname.length, min, max)) {
        showError(yournameEl, `yourname must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(yournameEl);
        valid = true;
    }
    return valid;
};



const ishowmuchValid = (howmuch) => {
    const re = (0-9);
    return re.test(howmuch);
};

const ishowmuchSecure = (howmuch) => {
    const re = new RegExp("[0-9]");
    return re.test(howmuch);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;




const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();


    // validate forms
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};
// 
form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));