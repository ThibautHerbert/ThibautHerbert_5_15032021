const fetchFurniture = async(data) =>{
	return await fetch(`http://localhost:3000/api/furniture/${data}`).then(res => res.json());
};

//début de showCart
const showCart = async(data) => {
	let furniture = await fetchFurniture(data);
	let order = `
			<div class="card-body">
				<p class="card-text">Article(s) de votre panier :</p>
                <ul>   
                    <li class="list-inline-item"> Nom du produit |</li>
                    <li class="list-inline-item"> Identifiant produit |</li>
                    <li class="list-inline-item" id="productPrice"> Prix |</li>
                    <li class="list-inline-item"> Quantité |</li>
                </ul>
                <ul>   
                    <li class="list-inline-item">${furniture.name} |</li>
                    <li class="list-inline-item">${furniture._id} |</li>
                    <li class="list-inline-item">${Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }, { maximumSignificantDigits: 3 }).format(furniture.price)} |</li>
                    <li class="list-inline-item qty">${quantity} |</li>
                </ul>
				<p class="card-text">Total de la commande : ${Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }, { maximumSignificantDigits: 3 }).format(furniture.price)}</p>
			</div>`
            listCart.insertAdjacentHTML("beforeend", order);
    
            // calcul du montant total de la commande
     
}; // fin de showCart

// récupère le localStorage listCart, 
let dataStorage = localStorage.getItem("listCart");
let data = JSON.parse(dataStorage); //le transforme pour être lisible MAIS IL Y A SUREMENT UN PROBLEME
// si le localStorage contient des id/produits alors le panier s'affiche sinon message d'alerte
if (data) {
    showCart(data);
} else {
    alert('Aucun produit dans le panier');
}
                                // COMPTER le nombre de produit par id
//let quantity = for(let i = 1 ;_id in dataStorage);
//for (let i = 1 ; i < 21 ; i++)
// for (let i = 0 ; i == data._id.length ; i++) {
// for (let i = 0 ; i < data._id.length ; i++) {
// for (let i = 0 ; i == data._id ; i++) {
// for (let i = 0 ; i == data._id ; i++) {
//for (let i = 0 ; i < data.length ; i++) { cannot read property 0 of null
//for (let i = '' ; i == data.length ; i++) { affiche null
//for (let i = [] ; i === data.length ; i++) {
//for (let i = [] ; i === data.value ; i++) {
//for (let i = 0 ; i < data.value.length ; i++) { cannot read property length

//let showQuantity = document.querySelector('.qty');
let quantity = data.length; // ne différencie pas les id entre elles, compte le nbr total d'articles
/*if (data !== undefined){
    alert("combien y'a t'il de données: " + data.length);
    for (let i = data.value ; i <= data.length ; i+= data.length) {
    quantity = i;
}
};*/

/*if (data !== null){
    data.forEach(function(item, index, array)){

    }
    quantity += 2;
    showQuantity.textContent = quantity ;
} else {
    alert('marche pas');
}*/
/*for (let i = 0 ; i < data.value ; i++) {
 quantity[i].textContent = i;
}*/
console.log(quantity);



                                // TEMPORAIRE affichage des id
// récupération des données du localStorage et affichage des données 
let productId = document.querySelector('#productId');
productId.textContent = (localStorage.getItem("listCart"));
//productPrice.textContent = JSON.parse(DataStorage);


// Au clic du bouton le panier se vide
let cleanBtn = document.querySelector('.cleanBtn');
cleanBtn.addEventListener('click', () => {
    cleanCart();
});
// fonction qui nettoie le panier (localStorage correspondant)
function cleanCart () {
    alert('Le panier a été vidé');
    localStorage.removeItem('listCart');
    //rajouter une fonction pour enlever les id de l'écran avant rafraichissement de la page panier
}
//                              découvre le formulaire au clic du btn commander
let orderBtn = document.querySelector('#order');
let form = document.querySelector('#block-form');
orderBtn.addEventListener('click', () => {
    //vérification alert('btn commander cliqué');
    form.style.display = 'block';
});

//let sumPrice = price
/*for (let id in DataStorage) {
    console.log(`Voici l'index ${id} et l'identifiant ${DataStorage[id]} ${[id]}`) ;
}*/


/*if(typeof localStorage!='undefined'){ //https://www.youtube.com/watch?v=VKOysUIIF8E typeof != undefined
    let idStorage = [];
    
    if(localStorage.getItem("listCart")) {
    idStorage = JSON.parse(localStorage.getItem("listCart"));// décompresse le format JSON
    addId(id, idStorage);
    alert("Un produit supplémentaire a été ajouté au panier !");
    window.location.href = "cart.html";// envoie vers la page cart.html
    
    } else {
    addId(id, idStorage);
    alert("Le produit a été ajouté au panier");
    window.location.href = "ordered.html"; // envoie vers la page cart.html
    }
}*/