const makerInput = document.getElementById("maker-input");
const makerForm = document.getElementById('maker-form');
const messageText = document.querySelector(".message-text");
const makerButton = document.getElementById("maker-button");
const mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

let success ="Message Sent!"
let error =  "Oops! That doesn't look like an email address";

makerInput.addEventListener('input', (e)  =>  {
    let input = e.target.value;
    makerForm.addEventListener("submit", (e)  => {
        e.preventDefault();
        if (input.match(mailRegex))  {
         messageText.innerText = success;
         messageText.style.color = 'green';
         makerInput.style.border = '2px solid #3EE9E5';
        } else if (makerInput.value == "" || !input.match(mailRegex))  {
            makerInput.style.border = "2px solid #FF2965";
            messageText.innerText = error;
            messageText.classList.add("error");
        }
        makerInput.value = "";
        })  
    });

    const formValues = (event)  => {
        event.preventDefault();

        const formData = new FormData(makerForm);
        const item = formData.get('item');

        let values = item;
  }

    makerForm.addEventListener("submit", formValues)

    window.onload = ()  =>  {
        makerInput.value = "";
    };