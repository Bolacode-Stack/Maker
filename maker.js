const makerInput = document.getElementById("maker-input");
const errorMessage = document.querySelector(".error-message");
const makerButton = document.getElementById("maker-button");
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

makerInput.addEventListener('input', (e)  =>  {
    let input = e.target.value;
    console.log(input);
    makerButton.addEventListener("click", (e)  => {
        if (input.match(mailRegex))  {
         errorMessage.innerText = 'Message Sent!'
         errorMessage.style.display = 'block';
        errorMessage.style.color = 'green';
         makerInput.style.border = '2px solid #3EE9E5'
        } else if (makerInput.value == "" || !input.match(mailRegex))  {
            errorMessage.style.display = 'block';
            makerInput.style.border = "2px solid #FF2965";
        }
        })  
    });

    window.onload = ()  =>  {
        makerInput.value = "";
    };