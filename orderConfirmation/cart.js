//appel de l'API via une fonction async await avec la méthode fetch
const fetchFurniture = async() =>{
	return await fetch(`http://localhost:3000/api/furniture`).then(res => res.json());
};
// déclarations de variables pour le panier:
let calcTotalCart = 0;
let quantityCount = 0;
let numberRow = 1;

// récupère le localStorage (listCart) qui contient les id des produits ajoutés au panier, 
let dataStorage = localStorage.getItem("cart");
let productsArray = JSON.parse(dataStorage); //converti les données pour être lisible 

//console.log("type of products : " + typeof products);
console.log("type of " + typeof dataStorage);

// convertir products en array :
//https://www.journaldunet.fr/web-tech/developpement/1441035-comment-convertir-un-objet-en-un-tableau-array-de-paires-cle-valeur-en-javascript/

// créer une variable products qui sera utilisée pour l'envoi au serveur dans le fetch post qui doit contenir l'id uniquement et non la quantité
//console.log("objet keys :" + Object.keys(products));
//1ère méthode :
//let keysId = Object.keys(products);
//console.log("type of keysId : " + typeof keysId);
// ou 2ème méthode de Object.keys :
let products = Object.keys(productsArray).map(function(cle) {
    return [cle];
});
console.log("contenu du nouveau products" + products);
// fin de la variable products contenant l'id uniquement


//console.log("nouvel array : " + array);
//console.log("type of " + typeof array);

//essai avec un array créé - même échec property map of undefined
//let array2 = ["5beaadda1c9d440000a57d98","5beaaf2e1c9d440000a57d9a","5be9cc611c9d440000c1421e","5beaae361c9d440000a57d99"];
//debugger
//console.log("type of array2 : " + typeof array2);
//console.log("deuxieme array : " + array2);
// fin de la conversion echec ? type of object

//tests simulation d'un array panier avec boucle for in 09 04
console.log(dataStorage);

// fonction qui permet d'afficher le contenu du panier
//if (typeof array2 !== 'undefined') {
const showCart = async() => {
    let furnitures = await fetchFurniture();
    console.log("ce sont les furnitures" + furnitures);
        //debugger
    for (let id in productsArray) { // id est la clé/key de l'array products
            //console.log("ligne52 id :" + id);
            //array.map(id =>  { retirer le .map sinon il dédouble le panier
        let product = furnitures.filter(item => item._id == id)[0];
        let cart = `
                    <tr>
                        <th scope="row position">${numberRow}</th>
                            <td>${id}</td> 
                            <td>${product.name}</td>
                            <td class="getPrices">${Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }, { maximumSignificantDigits: 3 }).format(product.price/100)}</td>
                            <td>${productsArray[id]}</td>
                        </tr>
                    `;
                        // id représente la clé de la variable products donc l'identifiant
                        // product.name provient de l'API
                        // product.price provient de l'API
                        // products[id] représente la value de la variable products donc la quantité du produit ajouté au panier
        listCart.insertAdjacentHTML("beforeend", cart);

                // affiche la quantité de produits au total présent dans le panier
        const displayQuantityProducts = () => {
            let showQuantityProducts = document.querySelector('#quantityProducts');
            quantityCount += productsArray[id];
            showQuantityProducts.innerHTML = "Vous avez dans votre panier " + quantityCount + " article(s)";
        }
        displayQuantityProducts();
                
                // affiche un numéro de ligne à chaque article ajouté au panier
        const displayNumberRow = () => {
            numberRow ++;
        }
        displayNumberRow();
        
        const displayTotal = () => {
            let showTotal = document.querySelector('#total');
            //let formatTotal = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }, {maximumSignificantDigits: 3}).format(product.price/100);
            //calcTotalCart += formatTotal; le formatage des nombres empêche l'addition
            calcTotalCart += product.price/100;
            totalCart = calcTotalCart;
            console.log(typeof (totalCart));
            console.log(totalCart);
            showTotal.textContent = "Total de la commande : " + Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }, {maximumSignificantDigits: 3}).format(calcTotalCart) + " TTC";
        }
        displayTotal();
            //}) //fin du map
        //.catch(err => console.log(err));
    } // fin de la boucle for in
 }; //fin du nouveau showCart (affiche l'id et la quantité par le localStorage et le reste par l'API)
showCart();
//} fin de if typeof array2 is not undefined

//test 3 avec boucle for in 09 04
// la boucle permet d'afficher tous les ajouts d'identifiant avec leur quantité ajoutés au panier
/*
        for (let id in products) {
            //console.log(`${id} : ${array[id]}`);
            //console.log(`la clé ${id} `);
            let cart = `
                    <tr>
                        <th scope="row position">${numberRow}</th>
                            <td>${id}</td>
                            <td>nom ?</td>
                            <td class="getPrices"> prix?</td>
                            <td>${products[id]}</td>
                    </tr>
                `;
                listCart.insertAdjacentHTML("beforeend", cart);
/*
                const displayQuantityProducts = () => {
                    let showQuantityProducts = document.querySelector('#quantityProducts');
                    quantityCount += products[id];
                    showQuantityProducts.innerHTML = "Vous avez dans votre panier " + quantityCount + " article(s)";
                }
                displayQuantityProducts();
                const displayNumberRow = () => {
                    numberRow ++;
                }
                displayNumberRow();
 */
 //       }
  
//début de showCart v1
/*
const showCart = async(products) => {
	let furnitures = await fetchFurniture();
    products.map(id =>  {
        console.log("ce sont les furnitures" + furnitures);
        let product = furnitures.filter(item => item._id == id)[0];
        let cart = 
        `
		    <tr>
				<th scope="row position">#</th>
                    <td>${product._id}</td>
					<td>${product.name}</td>
					<td class="getPrices">${Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }, { maximumSignificantDigits: 3 }).format(product.price/100)}</td>
					<td>1</td>
			</tr>
		`
        listCart.insertAdjacentHTML("beforeend", cart);
        
        const displayQuantityProducts = () => {
            let showQuantityProducts = document.querySelector('#quantityProducts');
            showQuantityProducts.innerHTML = "Vous avez dans votre panier " + quantityTotal + " article(s)";
        }
        displayQuantityProducts();
        const displayTotal = () => {
            let showTotal = document.querySelector('#total');
            calcTotalCart += product.price/100;
            totalCart = calcTotalCart;
            console.log(typeof (totalCart));
            console.log(totalCart);
            showTotal.textContent = "Total de la commande : " + calcTotalCart + " € TTC";
    }
        displayTotal();
    }) // fin de products.map
    
     
}; // fin de showCart
*/

// si le localStorage contient des id/produits alors le panier s'affiche sinon message d'alerte
/*
if (products) {
    showCart(products);
} else {
    alert('Aucun produit dans le panier');
}
*/
console.log("datastrorage c'est" + dataStorage);
console.log("products c'est" + products);
console.log("ce sont les produits" + JSON.stringify(products)); // affiche le contenu de l'objet cart {"id":quantité,etc}

// Au clic du bouton le panier se vide

let cleanBtn = document.querySelector('.cleanBtn');
cleanBtn.addEventListener('click', () => {
    cleanCart();
});
// fonction qui vide le panier (le localStorage correspondant)
function cleanCart () {
    alert('Le panier a été vidé');
    localStorage.removeItem('cart');
    listCart.style.display = 'none';
    quantityProducts.style.display = 'none';
    total.style.display = "none"; // doit enlever la mention du prix total de la commande

    //window.location.reload(); rafraichit la page autre façon de faire disparaitre la listCart
}
//suite de la commande
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
