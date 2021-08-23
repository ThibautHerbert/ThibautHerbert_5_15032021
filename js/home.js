const products = document.querySelector(".products");
//appel de l'API via une fonction async await avec la méthode fetch
// url Api en version distante ou en version localhost
let urlApiServer = "https://oc-p5-api.herokuapp.com/api/furniture";
let urlApiLocalHost = "http://localhost:3000/api/furniture";

const fetchFurnitures = async() =>{
	try {
        return await fetch(`${urlApiLocalHost}`).then(res => res.json());
    } catch (error) {
        console.log('Serveur localhost non connecté !')
    }
    try {
        return await fetch(`${urlApiServer}`).then(res => res.json());
    } catch (error) {
        console.log('Serveur déconnecté, essayez en version localhost !')
    }
};
// affichage des produits contenus dans l'API
const showFurnitures = async() => {
	let furnitures = await fetchFurnitures();
	if(furnitures.length == 0){
		products.innerHTML = `<div class="alert alert-info">Aucun produit n'est disponible</div>`
		return
	}
	// création d'une map pour faire apparaître un bloc pour chaque produit
	furnitures.map(furniture => {
		showContent ();
		function showContent () {
			let content = `
					<div class="col-12 col-lg-6">
						<div class="card borderPlus bg-white text-warning my-2" id="product1">
							<img src="${furniture.imageUrl}" class="card-img-top" alt="">
							<div class="card-body">
								<h5 class="card-title text-warning">${furniture.name}</h5>
								<p class="card-text">${furniture.description}</p>
								<p class="card-text">Disponible</p>
								<p class="">${Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }, { maximumSignificantDigits: 3 }).format(furniture.price/100)} </p>
								<a href="js/product/product.html?id=${furniture._id}" class="btn btn-info">En savoir plus</a>
							</div>
						</div>
					</div>`
					products.insertAdjacentHTML("beforeend", content);
		}
	})
			
};
showFurnitures();

