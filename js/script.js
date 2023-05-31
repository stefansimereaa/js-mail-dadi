// Esercizio Dadi

console.log ('js ok')

// Buttons 
const button = document.getElementById(`generates`)
console.log(button);

const button2 = document.getElementById(`cancel`)
console.log(button2);



//Resto in ascolto del click sul bottone
//Button Generates
button.addEventListener(`click`, function() {

    let generateUser = parseInt(document.getElementById("number").value);

    //Row Display
    const result = document.getElementById(`result`)
    result.classList.remove(`d-none`);
    result.classList.add(`d-block`, `d-flex`);

    // Randomizzo Cpu
    const numberCpu = Math.floor(Math.random() * 6) + 1;

    //Validazione
    if (generateUser < 1 || generateUser > 6) {
        document.getElementById("results").innerText = "Inserisci un numero valido da 1 a 6.";
        return;
    }
    
    let results = "";
    if (generateUser > numberCpu){
        results = "Hai vinto!";
    }else if(generateUser < numberCpu){
        results = "Ha vinto la cpu";
    }else{
        results = "Pareggio!";
    }

    document.getElementById("results").innerText ="Numero Cpu: " + numberCpu + " -  " + results;
})


//Button Delete
button2.addEventListener(`click`, function(){

    //Row Display
    const result = document.getElementById(`result`)
    result.classList.add(`d-none`);

})