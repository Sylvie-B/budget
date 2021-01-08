// import de la fenêtre modale
import {ModWin} from "./appModWin";

// get incomes
let incomes = document.getElementById('moneyIncome').getElementsByTagName("input");
let tIn = 0;

// get outlays
let outlay = document.getElementById('outlay').getElementsByTagName('input');
let tOut = 0;

//get saved money
let save = document.getElementById('save');

let overall = document.getElementById('overall');

let message = new ModWin('blue', 'white');
message.open('Entrez uniquement des chiffres.');
console.log(message.open());

overall.addEventListener('click', function (){


    // calculate total incomes
    for (let i = 0 ; i < incomes.length ; i++){
        if(Number.isNaN(parseInt(incomes[i].value))){

        }
        else {
            tIn += parseInt(incomes[i].value);
            incomes[i].value = '';
        }
    }
    document.getElementById('totalIncomes').innerHTML = tIn.toString();

    // calculate total outlay
    for (let o = 0 ; o < outlay.length ; o++){
        if(Number.isNaN(parseInt(outlay[o].value))){
            outlay[o].value = '0';
        }
        else {
            tOut += parseInt(outlay[o].value);
            outlay[o].value = '';
        }
    }
    document.getElementById('totalOutlay').innerHTML = tOut.toString();

    // saved
    let tSaved = parseInt(save.value);

    // calculate overall total
    let total = tSaved + tIn - tOut;
    let result = document.getElementById('result');
    result.innerHTML = total.toString();
    if(total <= 0){
        result.style.color = 'red';
    }
    else result.style.color = 'green';
})

let reset = document.getElementById('reset');
reset.addEventListener('click', function (){
    let total = document.getElementsByClassName('total');
    for(let t = 0 ; t < total.length ; t++){
        total[t].innerHTML = '0';
    }
    save.value = 0;
})

