// déclaration des variables pour cibler l'implantation des données et récupérer les données de localStorage
let showNumOrdered = document.querySelector('.showNumOrdered');
let showAddress = document.querySelector('.showAddress');
let showNames = document.querySelector('.showNames');
let showZipCity = document.querySelector('.showZipCity');
let formStorage = localStorage.getItem("formStorage");
let formStorage2 = localStorage.getItem("formStorage2");
let contact = JSON.parse(formStorage);
let contact2 = JSON.parse(formStorage2);
let title1 = document.querySelector('#title1');
let title2 = document.querySelector('.title2');
//console.log(formStorage);

// Mise en forme et affichage des données du formulaire (contact et contact2)
showNames.textContent = contact.firstName + ' ' + contact.lastName;
showAddress.textContent = contact.address;
showZipCity.textContent = contact.city  + ' - ' + contact2.zipCode  + ' - ' + contact2.country; 


// récupère la réponse du serveur pour afficher le numéro de commande
let getResponseServer = localStorage.getItem("responseServer");
let responseServer = JSON.parse(getResponseServer);
showNumOrdered.textContent += ' ' + responseServer.orderId;

//si le panier est vide aucun numéro de commande ne s'affiche, ni aucune coordonnée, apparition d'un message d'avertissement
if(! products) {
    showNumOrdered.textContent = "Vous n'avez pas ajouté d'article dans votre panier !";
    showNames.textContent = ' Aucune addresse renseignée ';
    showAddress.textContent = ' ';
    showZipCity.textContent = ' ';
    //autres méthodes possibles :
    // pour supprimer les données provenant du serveur :
    // showNumOrdered.style.display ='none';
    // localStorage.removeItem("responseServer");
    // ou pour supprimer les données du formulaire  : 
    // localStorage.removeItem("formStorage");
    // localStorage.removeItem("formStorage2");
    title1.textContent = "Malheureusement un problème est survenu, votre commande n'a pas été envoyée !";
    title2.textContent = 'Veuillez vérifier vos ajouts au panier';
}