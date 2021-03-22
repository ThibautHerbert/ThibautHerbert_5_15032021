const pictureProduct = document.querySelector("#pictureProduct");
const descriptionProduct = document.querySelector("#descriptionProduct");

const fetchFurniture = async(id) =>{
	return await fetch(`http://localhost:3000/api/furniture/${id}`).then(res => res.json());
    
};
// récupérer les données à partir de l'API et implantation dans le HTML
const showFurniture = async(id) => {
	furniture = await fetchFurniture(id);
    debugger
	pictureProduct.innerHTML = `
				<img class="card-img-top" src="${furniture.imageUrl}" />
                <div class="card-body">
					<p class="card-text">Description : ${furniture.description}</p>
				</div>
				`
    descriptionProduct.innerHTML = `
				<h2 class="card-title text-warning">${furniture.name}</h5>
                <p class="card-text">N° du produit : ${furniture._id}</p>
				<p class="">${Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }, { maximumSignificantDigits: 3 }).format(furniture.price)}</p>
                <label for=quantity>Quantité :</label>
                <select name="quantity" class="quantity">
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
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>   
                    </select>
                </div>
				<p class="card-text">Disponible</p>
				<button class="btn btn-warning">Ajouter au panier</button>`
};
let url = new URL(window.location.href); // permet de charger la page product via le lien href de la page home
let id = url.searchParams.get("id"); // permet de cibler l'élément clé d'un item pour le chargement de l'URL
if (id) {
    showFurniture(id);
} else {
    alert('Je ne sais pas quel produit afficher');
}
