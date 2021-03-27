let firstNameInput = document.querySelector('#firstNameInput');
let lastNameInput = document.querySelector('#lastNameInput');


function nameChecker(nameInputs) { //rajouter conditions pour tirets
    if(! nameInputs.match(/^([a-zA-Z- ]+)$/)) //regex qui prend que les lettres min et max, les tirets et les espaces
        return(0);
    else
        return(1);
}

let emailInput = document.querySelector('#emailInput');
function emailChecker(emailInput){
    if(! emailInput.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) //regex spécial email : https://ihateregex.io/expr/email/
        return(0);
    else
        return(1);
}

let zipCodeInput = document.querySelector('#zipCodeInput');
function zipCodeChecker(zipCodeInput) {
if(! zipCodeInput.match(/^([0-9]{5}+)$/)) // regex qui ne prend que 5 chiffres sans espace
        return(0);
    else
        return(1);
}
// pour les villes et pays :
let cityInput = document.querySelector('#cityInput');
let countryInput = document.querySelector('#countryInput');
function textChecker(cityInput, countryInput){
    if(! cityInput.match(/^([a-zA-Z]+)$/) || countryInput.match(/^([a-zA-Z]+)$/)) //regex qui ne prend que les lettes min et max
        return(0);
    else
        return(1);
}
let addressInput = document.querySelector('#addressInput');
function addressChecker(addressInput){
    if(! addressInput.match(/^([a-zA-Z- 0-9]+)$/)) //regex qui prend que les lettres min et max, les chiffres et les tirets et les espaces
    return(0);
else
    return(1);
}