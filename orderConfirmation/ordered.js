// déclaration des variables pour cibler l'implantation des données
let showNumOrdered = document.querySelector('.showNumOrdered');
let showAddress = document.querySelector('.showAddress');
let showNames = document.querySelector('.showNames');
let showZipCity = document.querySelector('.showZipCity');
let formStorage = localStorage.getItem("formStorage");
let contact = JSON.parse(formStorage);
console.log(formStorage);
// Mise en forme et affichage des données
//showNumOrdered.textContent += ;
showNames.textContent = contact.firstName + ' ' + contact.lastName;
showAddress.textContent = contact.address;
showZipCity.textContent = contact.city  + ' - ' + contact.zipCode  + ' - ' + contact.country; 


// envoi des données formulaires au serveur
var sendToServer = new XMLHttpRequest();
sendToServer.open("POST", "http://localhost:3000/api/furniture/order");
if(sendToServer.open){
    alert('open ça a marché');
}else{
    alert("open pas marché");
};
sendToServer.setRequestHeader("Content-Type", "application/json");
if(sendToServer.setRequestHeader){
    alert('header ça a marché');
}else{
    alert("header pas marché");
};
sendToServer.send(formStorage);
if(sendToServer.send(formStorage)){
    alert('send ça a marché');
}else{
    alert("send pas marché");
};/*
sendToServer.onreadystatechange = function () {
    if(this.readystate == XMLHttpRequest.DONE && this.status == 201) {
        console.log('readystate alors ça marche?'); 
    }else {
    alert("readystate ça marche pas");
    }
}*/
        /*let serverResponse = JSON.parse(this.serverResponse);
        let showServerResponse = document.querySelector('.showServerResponse')
        showServerResponse.textContent = responseText;*/
 // 201 est le statut de réponse pour la création d'une ressource


