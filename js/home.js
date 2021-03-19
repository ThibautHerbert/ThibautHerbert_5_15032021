const cards = document.querySelectorAll(".card");
const fetchFurnitures = async() =>{
	return await fetch("http://localhost:3000/api/furniture/").then(res => res.json());
};

const showFurnitures = async() => {
	furnitures = await fetchFurnitures()
	cards.forEach(card => {
			card.innerHTML= (
				furnitures.map(furniture => (
					`
					<img class="card-img-top" src="${furniture.imageUrl}" />
						<h5 class="card-title text-warning">${furniture.name}</h5>
						<p class="card-text">${furniture.description}</p>
						<p class="">${furniture.price}</p>
					`)).join()
					)
			
});
};

showFurnitures();

const ProductPage2 = document.querySelector("#product2");
const showProductPage2 = async() => {
	furnitures = await fetchFurnitures();
}