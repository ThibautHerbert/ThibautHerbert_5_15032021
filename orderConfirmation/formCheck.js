var nameInputs = document.querySelector('#firstNameInput');
let lastNameInput = document.querySelector('#lastNameInput');
// test 1 regex sur le prénom dans une variable (nameInputs.match is not a function s'il n'y a pas value)
/*var nameChecker = /^([a-zA-Z- ]+)$/;
if(nameInputs.value.match(nameChecker))
    nameInputs.style.background = 'blue';
else
    nameInputs.style.background = 'red';*/
function nameChecker(nameInputs) { 
    if(nameInputs.value.match(/^([a-zA-Z- àâäéèêëïîôöùûüç]+)$/)) //regex qui prend que les lettres min et max, les tirets et les espaces
        alert('prénom vrai');
    else
        nameInputs.style.border = 'red solid 2px';
}


let emailInput = document.querySelector('#emailInput');
function emailChecker(emailInput){
    if(emailInput.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) //regex spécial email : https://ihateregex.io/expr/email/
        alert('bon mail');
    else
        emailInput.style.border = 'red solid 2px';
};


let zipCodeInput = document.querySelector('#zipCodeInput');
function zipCodeChecker(zipCodeInput) {
if(zipCodeInput.value.match(/^([0-9]{5})$/)) // regex qui ne prend que 5 chiffres sans espace
    alert('CP ok');
else
    zipCodeInput.style.border = 'red solid 2px';
}


// pour les villes et pays :
                                                        // test Nantes5 et France12 ça passe, pourquoi ?
let cityInput = document.querySelector('#cityInput');
let countryInput = document.querySelector('#countryInput');
function cityChecker(cityInput){
    if(cityInput.value.match(/(?:[-a-zA-Za zA Zàâäéèêëïîôöùûüç]+)/)) /*|| countryInput.match(/^([a-zA-Z])$/))*/ //regex qui ne prend que les lettes min et max
        alert('bonne ville');
    else
        cityInput.style.border = 'red solid 2px';
}
function countryChecker(countryInput){
    if(countryInput.value.match(/(?:[-a-zA-Za zA Zàâäéèêëïîôöùûüç]+)+/)) //regex qui ne prend que les lettes min et max
        alert('bon pays');
    else
        countryInput.style.border = 'red solid 2px';
}

let addressInput = document.querySelector('#addressInput');
function addressChecker(addressInput){
    if(addressInput.value.match(/[0-9,]{1,4}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+/)) //regex qui prend que les lettres min et max, les chiffres et les tirets et les espaces
    alert('bonne adresse');
else
    addressInput.style.border = 'red solid 2px';
}

// au clic sur le bouton confirmer votre commande :
let orderedConfirm= document.querySelector('#orderedConfirm');
orderedConfirm.addEventListener('click', () => {
    nameChecker(nameInputs);
    emailChecker(emailInput);
    zipCodeChecker(zipCodeInput);
    cityChecker(cityInput);
    countryChecker(countryInput);
    addressChecker(addressInput);
})


/*emailInput.addEventListener('input', () => {
    emailInput.value(emailChecker(emailInput));
});*/
//let checkEmail = emailInput.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

/* test structure regexp
var message = 'Bonjour les gens !';
 var regex = /les/;
 if(message.match(regex))
    alert('Tiens, il y a plusieurs personnes ?');
 else
    alert('Tout seul...');
*/

//class Constructor pour envoyer les données au serveur
class product_id { // ou un nom avec majuscule ?
    constructor (firstName, lastName, address, city, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.email = email;
    }
}
//this.firstNameInput à la place de this.firstName ? et ainsi de suite ?

/*
if(nameInputs || email || zipCodeInput || cityInput || countryInput || addressInput || = style.border= ‘red solid 2px’) alors : {
alert('erreur dans le formulaire, resaissez correctement vos informations');
} else {

localStorage.setItem(‘formStorage’, JSON.stringify());
localStorage.setItem(‘orderIdStorage’, JSON.stringify());
window.location.href; //=ordered.html // href désactivé sur le html ne mène à rien
} 
*/