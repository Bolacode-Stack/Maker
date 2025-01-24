const makerForm = document.querySelector('#makerForm');
const makerButton = document.querySelector('.button');

let firstErrorMsg = 'Oops! Please add your email';
let secondErrorMsg = "Oops! That doesn't look like an email address";

function validateInput(e)  {
    e.preventDefault();
    let error = document.createTextNode(firstErrorMsg);
    let firstError = errorOne();
    firstError.appendChild(error);
    const makerInput = document.querySelector('#input');
    if (makerInput.value === '')  {
        makerInput.insertAdjacentElement('afterend', firstError)
        return;
    }
}

makerForm.addEventListener('submit', validateInput);

function errorOne()  {
    let errorOne= document.createElement('small');
    errorOne.setAttribute('class', 'errorOne')
    return errorOne;
}

function errorTwo()  {

}

