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

    // envoi des données formulaire et product via fetch post

    fetch('http://localhost:3000/api/furniture/order', {
        method : "POST",
        body: dataToSend,
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    // écriture de promesses/promises en fonctions fléchées:
        .then(response => response.json()) // reçoit la fonction si elle est remplie/fulfilled
        //.json() returns a callback
        //.then(json => console.log(json));
        .then(json => localStorage.setItem("responseServer", JSON.stringify(json)))
        .then(() => window.location.href = "ordered.html") // si la requête POST est fulfilled alors rediriger vers la page de confirmation de commande
        .catch(err => console.log("promise err " +  err)); // reçoit la fonction si l'envoi est rejeté
        // fin de la requête POST

    // redirection vers la page confirmation de commande :
    //responseServer ne se créé pas si je met le lien direct vers ordered.html, est-ce que ça va trop vite ?
    //window.location.href = "ordered.html";
    /*if(localStorage.setItem("responseServer", JSON.stringify(json))){
        window.location.href = "ordered.html";
    };*/
    


    // envoi des données formulaires au serveur xml request
    /*
    var sendToServer = new XMLHttpRequest();
    sendToServer.open("POST", 'http://localhost:3000/api/furniture/order' , true);
    sendToServer.setRequestHeader("Content-Type", "application/json");
    if(sendToServer.open) {

        alert('open ça a marché');
        console.log(sendToServer.send(dataToSend));
    }
    sendToServer.onreadystatechange = function () {
        if(this.readystate == XMLHttpRequest.DONE && this.status == 200) {
            alert('readystate alors ça marche?'); 
        }else {
        alert("readystate ça marche pas");
        }
    }
     fin de la requete post xml*/
    /*
        sendToServer.send(JSON.stringify(dataTogether));*/
        /*

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

// préparation requête POST à mettre dans click event de orderedConfirm

/*
if(firstNameInput || lastNameInput || email || zipCodeInput || cityInput || countryInput || addressInput || = style.border= ‘red solid 2px’) alors : {
alert('erreur dans le formulaire, resaissez correctement vos informations');
} else {
    */