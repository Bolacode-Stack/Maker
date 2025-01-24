const makerForm = document.querySelector('#makerForm');
const makerButton = document.querySelector('.button');


function validateInput(e)  {
    e.preventDefault();
    let firstError = errorOne();
    let secondError = errorTwo();
    const makerInput = document.querySelector('#input');
    if (makerInput.value === '')  {
        makerInput.insertAdjacentElement('afterend', firstError)
        return;
    }
}

function errorOne()  {
    let firstErrorMsg = 'Oops! Please add your email';
    let emptyInput = document.createTextNode(firstErrorMsg);
    let errorOne = document.createElement('small');
    errorOne.setAttribute('class', 'error');
    errorOne.appendChild(emptyInput);
    return errorOne;
}

function errorTwo()  {
    let secondErrorMsg = "Oops! That doesn't look like an email address";
    let emailError = document.createTextNode(secondErrorMsg);
    let errorTwo = document.createElement('small');
    errorTwo.setAttribute('class', 'error');
    errorTwo.appendChild(emailError);
    return errorTwo;
}

makerForm.addEventListener('submit', validateInput);