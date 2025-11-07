const makerInput = document.getElementById("maker-input");
const messageText = document.querySelector(".message-text");
const makerButton = document.getElementById("maker-button");
const mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

makerInput.addEventListener('input', (e)  =>  {
    let input = e.target.value;
    console.log(input)
    makerButton.addEventListener("click", (e)  => {
        e.preventDefault();
        if (input.match(mailRegex))  {
         messageText.innerText = 'Message Sent!'
        messageText.style.display = 'block';
        messageText.style.color = 'green';
         makerInput.style.border = '2px solid #3EE9E5'
        } else if (makerInput.value == "" || !input.match(mailRegex))  {
           messageText.style.display = 'block';
            makerInput.style.border = "2px solid #FF2965";
            messageText.innerText = "Oops that doesn't lool like an email address"
            messageText.style.color = "#FF2965";
        }
        makerInput.value = "";
        })  
    });

    window.onload = ()  =>  {
        makerInput.value = "";
    };