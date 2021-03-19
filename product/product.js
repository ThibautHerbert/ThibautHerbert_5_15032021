const pictureProduct = document.querySelector("#pictureProduct");
const descriptionProduct = document.querySelector("#descriptionProduct");

const fetchFurnitures = async() =>{
	return await fetch("http://localhost:3000/api/furniture").then(res => res.json());
};
const showFurnitures = async() => {
	furnitures = await fetchFurnitures();
	pictureProduct.innerHTML= (
		furnitures
			.map(furniture => (
				`
				<img class="card-img-top" src="${furniture.imageUrl}" />
                <div class="card-body">
					<p class="card-text">${furniture.description}</p>
				</div>
				`
				)).join('')	
	);
    descriptionProduct.innerHTML= (
		furnitures
			.map(furniture => (
				`
				<h2 class="card-title text-warning">${furniture.name}</h5>
                <p class="card-text">N°${furniture._id}</p>
				<p class="">${furniture.price} €</p>
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
				<button class="btn btn-warning">Ajouter au panier</button>
                `
				)).join('')	
	);
};
showFurnitures();