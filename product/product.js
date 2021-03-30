const pictureProduct = document.querySelector("#pictureProduct");
const descriptionProduct = document.querySelector("#descriptionProduct");

const fetchFurniture = async(id) =>{
	return await fetch(`http://localhost:3000/api/furniture/${id}`).then(res => res.json());
    
};
// récupérer les données à partir de l'API et implantation dans le HTML
const showFurniture = async(id) => {
	var furniture = await fetchFurniture(id);
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
                    <option value="">0</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>   
                </select>
                <div>
                    <label for=vernisSelect>Choisir un vernis :</label>
                    <select name="vernis" class="vernis">
                        <option value="">Sélectionnez votre vernis</option>
                        <option value="0">${furniture.varnish[0]}</option>
                        <option value="1">${furniture.varnish[1]}</option>
                        <option value="2">${furniture.varnish[2]}</option>     
                    </select>
                </div>
				`
                let quantity = document.querySelector('.quantityCount');
                quantity.addEventListener('change', (event) => {
                    //console.log(event.target.value);
                    //if(localStorage.getItem("listCart")) { le if ne suffit pas car il vérifie seulement s'il y a une valeur dans listCart pas le n°id
                    localStorage.setItem("quantityMention", JSON.stringify(event.target.value));
                    //}
                    // quantité est seulement lié au select mais sur un autre produit cela modifiera tout le select, il faudrait relier le select à l'id du produit
                })
    

}; // fin du showFurniture


let url = new URL(window.location.href); // permet de charger la page product via le lien href de la page home
let id = url.searchParams.get("id"); // permet de cibler l'élément clé d'un item pour le chargement de l'URL
if (id) {
    showFurniture(id);
} else {
    alert('Aucun produit à afficher');
}

// ajout au panier au clic
let clickForCart =document.querySelector('#cart');
clickForCart.addEventListener('click', () => {
    if(typeof localStorage!='undefined'){ // si le localStorage est non défini alors crée un array vide
        let idStorage = [];
        //let qtyStorage = [];

        if(localStorage.getItem("listCart")) { // si localStorage a la clé listCart (il y a déjà des produits dans le panier) alors :
            idStorage = JSON.parse(localStorage.getItem("listCart")); // converti la donnée en objet
            addId(id, idStorage); // réalise la fonction addId
            //addQuantity(id, qtyStorage);
            alert('Un produit supplémentaire a été ajouté au panier !'); // affiche un message d'alerte

        } else { // s'il n'y a pas encore de storage au nom de listCart alors :
            addId(id, idStorage); // réalise la fonction addId
            //addQuantity(id, qtyStorage);
            alert('Le produit a été ajouté au panier'); // affiche un message d'alerte
        }
        function addId(id, idStorage){ //push de l'identifiant id vers un tableau idStorage
            idStorage.push(id);
            localStorage.setItem("listCart", JSON.stringify(idStorage)); //création du localStorage listCart et conversion des données en string
        }
        /*function addQuantity(id, qtyStorage){ //push de l'identifiant id vers un tableau idStorage
            qtyStorage.push(id);
            localStorage.setItem("quantity", JSON.stringify(qtyStorage)); //création du localStorage listCart et conversion des données en string
        }*/
    }

});



