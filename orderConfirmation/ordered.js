// déclaration des variables pour cibler l'implantation des données
let showNumOrdered = document.querySelector('.showNumOrdered');
let showAddress = document.querySelector('.showAddress');
let showNames = document.querySelector('.showNames');
let showZipCity = document.querySelector('.showZipCity');
let formStorage = localStorage.getItem("formStorage");
let formStorage2 = localStorage.getItem("formStorage2");
let contact = JSON.parse(formStorage);
let contact2 = JSON.parse(formStorage2);
console.log(formStorage);
// Mise en forme et affichage des données
//showNumOrdered.textContent += ;
showNames.textContent = contact.firstName + ' ' + contact.lastName;
showAddress.textContent = contact.address;
showZipCity.textContent = contact.city  + ' - ' + contact2.zipCode  + ' - ' + contact2.country; 



