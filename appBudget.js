// get incomes
let incomes = document.getElementById('moneyIncome').getElementsByTagName("input");
let buttonIn = document.getElementById('addIncomes');
let tIn = 0;

buttonIn.addEventListener('click', function () {
    for (let i = 0 ; i < incomes.length ; i++){
        if(Number.isNaN(parseInt(incomes[i].value))){
            alert('vous devez entrer des chiffres');
        }
        else {
            tIn += parseInt(incomes[i].value);
            incomes[i].value = '0';
        }
    }
    document.getElementById('totalIncomes').innerHTML = tIn.toString()
})

