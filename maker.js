const makerForm = document.querySelector('#makerForm');
const makerButton = document.querySelector('.button');

let firstErrorMsg = 'Oops! Please add your email';
let secondErrorMsg = "Oops! That doesn't look like an email address";

function validateInput(e)  {
    e.preventDefault();
    let error = document.createTextNode(firstErrorMsg)
    let firstError = errorOne();
    firstError.appendChild(error);
    const makerInput = document.querySelector('#input').value;
    // console.log(makerInput.value)
    if (makerInput === '')  {
        // console.log('Enter your email')
        makerInput.insertAdjacentElement('beforebegin', firstError)
        return;
    }
    // console.log('Error')
}

makerForm.addEventListener('submit', validateInput);

// makerInput.addEventListener('keydown',  (e)  =>  {
//     console.log(e.target.value)
// })

function errorOne()  {
    let errorOne= document.createElement('small');
    errorOne.setAttribute('class', 'errorOne')
    return errorOne;
}

function errorTwo()  {

}

