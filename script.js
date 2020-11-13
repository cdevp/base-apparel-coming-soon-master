function $(elementId) {
    return document.getElementById(elementId);
}

let re = /\S+@\S+.\S/;

function validateEmail(email) {
    const found = email.match(re);
    console.log(found);
    return (found === null);
}

function emailValidationCheck() {
    if (validateEmail($('input-box').value)) {
        $('email-validation').style.display = 'flex';
    }
    else {
        $('email-validation').style.display = 'none';
    }
}

$('email-input').addEventListener('submit', (e) => {
    e.preventDefault();
    emailValidationCheck();
});

$('submit-button').addEventListener('click', () => {
    emailValidationCheck();
});

