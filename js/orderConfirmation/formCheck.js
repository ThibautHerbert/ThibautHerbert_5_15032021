// recherche complexe dans le DOM
    // déclarations des variables relatives au formulaire :
let firstNameInput = document.querySelector('#firstNameInput');
let lastNameInput = document.querySelector('#lastNameInput');
let emailInput = document.querySelector('#emailInput');
let zipCodeInput = document.querySelector('#zipCodeInput');
let cityInput = document.querySelector('#cityInput');
let countryInput = document.querySelector('#countryInput');
let addressInput = document.querySelector('#addressInput');
    // déclaration de variable pour l'envoi de la commande
let confirmOrder= document.querySelector('#confirmOrder');


// fonctions qui ont pour but de vérifier la validité des champs inscrits dans le formulaire
function firstNameChecker(firstNameInput) { 
    if(! firstNameInput.value.match(/^([a-zA-Z- àâäéèêëïîôöùûüç]+)$/)) {//regex qui ne prend que les lettres min et max, les tirets et les espaces
        firstNameInput.style.borderBottom = '#dc3545 solid 4px';
        let errorLabel = document.querySelector('.errorFirstName');
        errorLabel.style.display = 'block';
        return false;
    } else {
        let errorLabel = document.querySelector('.errorFirstName');
        firstNameInput.style.borderBottom = 'green solid 4px';
        errorLabel.style.display = 'none';
        return true;
    };
};

function lastNameChecker(lastNameInput) { 
    if(! lastNameInput.value.match(/^([a-zA-Z- 'àâäéèêëïîôöùûüç]+)$/)) {//regex qui ne prend que les lettres min et max, les tirets et les espaces
        lastNameInput.style.borderBottom = '#dc3545 solid 4px';
        let errorLabel = document.querySelector('.errorLastName');
        errorLabel.style.display = 'block';
        return false;
    } else {
        let errorLabel = document.querySelector('.errorLastName');
        lastNameInput.style.borderBottom = 'green solid 4px';
        errorLabel.style.display = 'none';
        return true;
    }
};

function emailChecker(emailInput) {
    if(! emailInput.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) { //regex spécial email : https://ihateregex.io/expr/email/
        emailInput.style.borderBottom = '#dc3545 solid 4px';
        let errorLabel = document.querySelector('.errorEmail');
        errorLabel.style.display = 'block';
        return false;
    } else {
        let errorLabel = document.querySelector('.errorEmail');
        emailInput.style.borderBottom = 'green solid 4px';
        errorLabel.style.display = 'none';
        return true;
    };
};

function zipCodeChecker(zipCodeInput) {
    if(! zipCodeInput.value.match(/^([0-9]{5})$/)) {// regex qui ne prend que 5 chiffres sans espace
        zipCodeInput.style.borderBottom = '#dc3545 solid 4px';
        let errorLabel = document.querySelector('.errorZip');
        errorLabel.style.display = 'block';
        //let spanError = document.createElement("p");
        //let errorZip = document.querySelector('.errorSpan');
        //let errorZip = document.querySelector('.errorSpan');
        //errorZip.appendChild(spanError);
        //zipCodeInput.appendChild(spanError);
        //spanError.innerHTML= "erreur !";
        //errorZip.style.display = 'block';
        return false;
    } else {
        let errorLabel = document.querySelector('.errorZip');
        zipCodeInput.style.borderBottom = 'green solid 4px';
        errorLabel.style.display = 'none';
        return true;
    }
};

function cityChecker(cityInput) {
    if(! cityInput.value.match(/^([a-zA-Z- 'àâäéèêëïîôöùûüç]+)$/)) {  /*|| countryInput.match(/^([a-zA-Z])$/))*/ //regex qui ne prend que les lettes min et max
        cityInput.style.borderBottom = '#dc3545 solid 4px';
        let errorLabel = document.querySelector('.errorCity');
        errorLabel.style.display = 'block';
        return false;
    } else {
        let errorLabel = document.querySelector('.errorCity');
        cityInput.style.borderBottom = 'green solid 4px';
        errorLabel.style.display = 'none';
        return true;
    }
};

function countryChecker(countryInput) {
    if(! countryInput.value.match(/^([a-zA-Z- 'àâäéèêëïîôöùûüç]+)$/)) { //regex qui ne prend que les lettes min et max    
        countryInput.style.borderBottom = '#dc3545 solid 4px';
        let errorLabel = document.querySelector('.errorCountry');
        errorLabel.style.display = 'block';
        return false;
    } else {
        let errorLabel = document.querySelector('.errorCountry');
        countryInput.style.borderBottom = 'green solid 4px';
        errorLabel.style.display = 'none';
        return true;
    }
};

function addressChecker(addressInput) {
    if(! addressInput.value.match(/[0-9,]{1,4}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç']+)+/)) {  //regex qui ne prend que les lettres min et max, les chiffres et les tirets et les espaces, et les apostrophes
        addressInput.style.borderBottom = '#dc3545 solid 4px';
        let errorLabel = document.querySelector('.errorAddress');
        errorLabel.style.display = 'block';
        return false;
    } else {
        let errorLabel = document.querySelector('.errorAddress');
        addressInput.style.borderBottom = 'green solid 4px';
        errorLabel.style.display = 'none';
        return true;
    }
};

// la variable products permet de séparer les id de la quantité et de convertir les id en array :
// cette variable products sera utilisée pour l'envoi au serveur dans le fetch post qui doit contenir l'id uniquement et non la quantité

if(dataStorage){ // la condition empêche une erreur lorsque le panier est vide
    let products = Object.keys(productsArray).map(function(cle) {
        return [cle];
    });
    // fonction événement : au clic sur le bouton confirmer votre commande :
        // enregistrement des données du formulaire
    confirmOrder.addEventListener('click', () => {
        firstNameChecker(firstNameInput);
        lastNameChecker(lastNameInput);
        emailChecker(emailInput);
        zipCodeChecker(zipCodeInput);
        cityChecker(cityInput);
        countryChecker(countryInput);
        addressChecker(addressInput);

        // vérification de la validité des champs du formulaire et si oui pour tous (else) : envoie les données sur localStorage et la requête POST
        if (firstNameChecker(firstNameInput) === false || lastNameChecker(lastNameInput) === false|| emailChecker(emailInput) === false||zipCodeChecker(zipCodeInput) === false|| cityChecker(cityInput) === false|| countryChecker(countryInput) === false||addressChecker(addressInput) === false) {
            alert("erreur dans le formulaire, resaissez correctement vos informations");
        } else {

            var contact = {                       // partie 1 du formulaire pour envoi au serveur
                "firstName": firstNameInput.value,
                "lastName": lastNameInput.value,
                "address": addressInput.value,
                "city": cityInput.value,
                "email": emailInput.value
                
            };
            var contact2 = {                        // partie 2 du formulaire séparée
                "country": countryInput.value,
                "zipCode": zipCodeInput.value
            }
            // les 2 parties du formulaire sont stockées dans des localStorage également
            localStorage.setItem("formStorage", JSON.stringify(contact));
            localStorage.setItem("formStorage2", JSON.stringify(contact2));

            let dataTogether = {contact, products}; // regroupement des 2 variables à envoyer au serveur
            let dataToSend = JSON.stringify(dataTogether); // conversion en string des données pour la préparation à l'envoi au serveur

            // envoi des données du formulaire et de products via une requête post avec fetch :
            fetch('http://localhost:3000/api/furniture/order', {
                method : "POST",
                body: dataToSend,
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            // écriture de promesses/promises en fonctions fléchées:
                .then(response => response.json()) // reçoit la fonction si elle est remplie/fulfilled
                //.json() returns a callback
                .then(json => localStorage.setItem("responseServer", JSON.stringify(json)))
                .then(() => window.location.href = "ordered.html") // si la requête POST est fulfilled alors rediriger vers la page de confirmation de commande
                .catch(err => console.log("promise err " +  err)); // reçoit la fonction si l'envoi est rejeté et indique erreur 
        }
    });
}