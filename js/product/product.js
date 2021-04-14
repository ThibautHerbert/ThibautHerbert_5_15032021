// recherche complexe dans le DOM - 
const pictureProduct = document.querySelector("#pictureProduct");
const descriptionProduct = document.querySelector("#descriptionProduct");
let clickForCart = document.querySelector('#cart');
let varnishDisabled = document.querySelector('.varnishDisabled');
// déclarations de variables realtives au chargement du produit sélectionné
let url = new URL(window.location.href); // permet de charger la page product via le lien href de la page home
let id = url.searchParams.get("id"); // permet de cibler l'élément clé (identifiant : id)pour le chargement de l'URL

//varnishDisabled.style.background = 'red';

//appel de l'API via une fonction async await avec la méthode fetch avec un paramètre qui récupère la variable id
const fetchFurniture = async(id) =>{
	return await fetch(`http://localhost:3000/api/furniture/${id}`).then(res => res.json());
};
// affichage d'un seul produit par page via la récupération de l'id produit dont les informations sont contenus dans l'API 
const showFurniture = async(id) => {
	var furniture = await fetchFurniture(id);
    // essai 
    //il faut chercher dans l'api si vernis option 2 n'existe pas, alors on n'affiche pas 
    //for (color in furniture.varnish)
    
    if(furniture.varnish[2] === undefined) { //varnish.value ?
        
        varnishDisabled.setAttribute("disabled", "true");
        varnishDisabled.style.background = 'red';
        //varnishDisabled.setAttribute("disabled", "true");
        //this.optionvalue.style.display = 'none';
    }
// fin essai boucle vernis

// affichage des données produit en 2 blocs :
	pictureProduct.innerHTML = `
				<img class="card-img-top" src="${furniture.imageUrl}" />
                <div class="card-body">
					<p class="card-text">Description : ${furniture.description}</p>
				</div>
				`
    descriptionProduct.innerHTML = `
				<h2 class="card-title text-warning">${furniture.name}</h5>
                <p class="card-text">N° du produit : ${furniture._id}</p>
				<p class="">${Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }, { maximumSignificantDigits: 3 }).format(furniture.price/100)}</p>
                <label for=quantity>Quantité :</label>
                <select name="quantity" class="quantityCount">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>   
                </select>
                <div>
                    <label for="varnishSelect">Choisir un vernis :</label>
                    <select name="varnish" class="varnish" id="varnishSelect">
                        <option value="">Sélectionnez votre vernis</option>
                        <option value="0">${furniture.varnish[0]}</option>
                        <option value="1">${furniture.varnish[1]}</option>
                        <option value="2" class="varnishDisabled">${furniture.varnish[2]}</option>     
                    </select>
                </div>
				`
    // ne pas montrer option value="2" s'il n'y a pas de 3ème option de personnalisation (vernis) pour le produit
    /*if(furniture.varnish[2] === undefined) {
        descriptionProduct.innerHTML = `
			<h2 class="card-title text-warning">${furniture.name}</h5>
            <p class="card-text">N° du produit : ${furniture._id}</p>
			<p class="">${Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }, { maximumSignificantDigits: 3 }).format(furniture.price/100)}</p>
            <label for=quantity>Quantité :</label>
            <select name="quantity" class="quantityCount">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>   
            </select>
            <div>
                <label for="varnishSelect">Choisir un vernis :</label>
                <select name="varnish" class="varnish" id="varnishSelect">
                    <option value="">Sélectionnez votre vernis</option>
                    <option value="0">${furniture.varnish[0]}</option>
                    <option value="1">${furniture.varnish[1]}</option> 
                </select>
            </div>
			`
        }*/
}; // fin du showFurniture

// si la variable id existe et n'est pas indéfini alors la fonction showFurniture s'exécute, sinon message d'alerte
if (id) {
    showFurniture(id);
} else {
    alert('Aucun produit à afficher');
}
// fonction événement : ajout au panier au clic de l'id et de la quantité : ces données seront stockées dans un localStorage
clickForCart.addEventListener('click', () => {
    let quantity = Number(document.querySelector('.quantityCount').value); // récupère la donnée sélectionnée dans le select quantité, précise que c'est un nombre
    // opérateur conditionnel https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {}; 
    // conditional operator : si le localStorage cart existe alors le récupère, sinon crée un objet vide

    if (cart[id]) {
        cart[id] += quantity; // panier contient un ou plusieurs produits : ajout d'un nouvel article +=
        alert("Vous avez ajouté un nouvel article dans votre panier !");
    } else {
        cart[id] = quantity; // panier vide : ajout d'un article =
        alert("Vous avez ajouté un article dans votre panier !");
    }

    localStorage.setItem("cart", JSON.stringify(cart)); // stocke l'id et la quantité indiqué dans un localStorage
});