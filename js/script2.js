// Esercizio Mail

console.log ('js ok')



// Prendere elementi dal DOM
const emailUser = document.getElementById('email').value.toLowerCase();
// Buttons 
const button = document.getElementById(`control`)
console.log(button);

const button2 = document.getElementById(`cancel`)
console.log(button2);

// Email Array

const emails = ["email1@gmail.com", "email2@gmail.com", "email3@gmail.com", "email4@gmail.com", "email5@gmail.com" ];

button.addEventListener('click', function(){

    //Row Display
    const result = document.getElementById(`result`)
    result.classList.remove(`d-none`);
    result.classList.add(`d-block`, `d-flex`);

    //Controllo nel array
    let emailPresent = false;
    let emailUser = document.getElementById('email').value.toLowerCase();


    for(let i = 0 ; i < emails.length; i++ ){
        if(emails[i] === emailUser){
            emailPresent = true;
            break;
        }
    }
    
    if (emailPresent){
        document.getElementById("results").innerText += "Benvenuto" + " " +  emailUser + "!";
    } else {
        document.getElementById("results").innerText = "L'email " + emailUser + " non è presente.";
    }

})

//Button Cancel
button2.addEventListener(`click`, function(){

    //Row Display
    const result = document.getElementById(`result`)
    result.classList.add(`d-none`);
    document.getElementById("email").value = "";

})