var firstNameInput = document.querySelector('#firstNameInput');
// test 1 regex sur le prénom dans une variable (nameInputs.match is not a function s'il n'y a pas value)
/*var nameChecker = /^([a-zA-Z- ]+)$/;
if(nameInputs.value.match(nameChecker))
    nameInputs.style.background = 'blue';
else
    nameInputs.style.background = 'red';*/
function firstNameChecker(firstNameInput) { 
    if(firstNameInput.value.match(/^([a-zA-Z- àâäéèêëïîôöùûüç]+)$/)) //regex qui prend que les lettres min et max, les tirets et les espaces
        alert('prénom vrai');
    else
        firstNameInput.style.border = 'red solid 2px';
}

let lastNameInput = document.querySelector('#lastNameInput');
function lastNameChecker(lastNameInput) { 
    if(lastNameInput.value.match(/^([a-zA-Z- àâäéèêëïîôöùûüç]+)$/)) //regex qui prend que les lettres min et max, les tirets et les espaces
        alert('nom vrai');
    else
        lastNameInput.style.border = 'red solid 2px';
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
let confirmOrder= document.querySelector('#confirmOrder');
confirmOrder.addEventListener('click', () => {
    firstNameChecker(firstNameInput);
    lastNameChecker(lastNameInput);
    emailChecker(emailInput);
    zipCodeChecker(zipCodeInput);
    cityChecker(cityInput);
    countryChecker(countryInput);
    addressChecker(addressInput);

    var contact = {
        "firstName": firstNameInput.value,
        "lastName": lastNameInput.value,
        "address": addressInput.value,
        "city": cityInput.value,
        "email": emailInput.value
        
    };
    var contact2 = {
        "country": countryInput.value,
        "zipCode": zipCodeInput.value
    }
    localStorage.setItem("formStorage", JSON.stringify(contact));
    localStorage.setItem("formStorage2", JSON.stringify(contact2));

    let dataTogether = {contact, products};
    let dataToSend = JSON.stringify(dataTogether);
    console.log(dataStorage);
    //console.log(products);
    console.log(dataTogether);
    console.log(dataToSend);
    // envoi des données formulaires au serveur
    var sendToServer = new XMLHttpRequest();
    sendToServer.open("POST", "http://localhost:3000/api/furniture/order");
    if(sendToServer.open){

        alert('open ça a marché');}/*
        sendToServer.send(JSON.stringify(dataTogether));*/
        console.log(sendToServer.send(dataToSend));/*

        if(sendToServer.send(dataTogether)) {
        alert('send ça a marché');
        } else {
        alert("send pas marché");
        };
    }else{
        alert("open pas marché");
    };
    sendToServer.setRequestHeader("Content-Type", "application/json");
    if(sendToServer.setRequestHeader){
        alert('header ça a marché');
    }else{
        alert("header pas marché");
    };*/
    
    sendToServer.onreadystatechange = function () {
        if(this.readystate == XMLHttpRequest.DONE && this.status == 201) {
            alert('readystate alors ça marche?'); 
        }else {
        alert("readystate ça marche pas");
        }
    }
    
}); // fin du addEventListener sur orderedConfirm


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

//class Constructor pour envoyer les données au serveur ou la variable product_id suffit?
/*class product_id { // ou un nom avec majuscule ?
    constructor (firstName, lastName, address, city, email, country, zipCode) {
        this.firstNameInput = firstName;
        this.lastNameInput = lastName;
        this.addressInput = address;
        this.cityInput = city;
        this.emailInput = email;
        this.countryInput = country;
        this.zipCodeInput = zipCode;
    }
}*/

//this.firstNameInput à la place de this.firstName ? et ainsi de suite ? ou firstName.value ? sans constructor ?


// préparation requête POST à mettre dans click event de orderedConfirm
/*
var sendToServer = new XMLHttpRequest();
sendToServer.open("POST", "http://localhost:3000/api/furniture/order");
sendToServer.setRequestHeader("Content-Type", "application/json");
sendToServer.send(JSON.stringify (product_id/*nom de la variable qui contient les 2 variables de numéro de commande et de product_id*//*));
*/
/*
if(firstNameInput || lastNameInput || email || zipCodeInput || cityInput || countryInput || addressInput || = style.border= ‘red solid 2px’) alors : {
alert('erreur dans le formulaire, resaissez correctement vos informations');
} else {*/


/*
localStorage.setItem(‘orderIdStorage’, JSON.stringify());
window.location.href; //=ordered.html // href désactivé sur le html ne mène à rien
} 
*/
// récupération des id ajoutées au panier via le localStorage dataStorage
//}); //rajout