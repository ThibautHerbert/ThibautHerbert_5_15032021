// déclarations de variables relatives au localStorage et à l'envoi serveur:
    // récupère le localStorage (cart) qui contient les id des produits ajoutés au panier, 
let dataStorage = localStorage.getItem("cart");
let productsArray = JSON.parse(dataStorage); //converti les données pour être lisible 
// recherche complexe dans le DOM
let cleanBtn = document.querySelector('.cleanBtn'); // bouton vider le panier
// url Api en version distante ou en version localhost
let urlApiServer = "https://oc-p5-api.herokuapp.com/api/furniture";
let urlApiLocalHost = "http://localhost:3000/api/furniture";
// fonction qui vide le panier (le localStorage correspondant)
function cleanCart () {
    alert('Le panier a été vidé');
    localStorage.removeItem('cart');
    listCart.style.display = 'none';
    quantityProducts.style.display = 'none';
    total.style.display = "none";
    localStorage.removeItem("responseServer");
    localStorage.removeItem("formStorage");
    localStorage.removeItem("formStorage2");
}
//appel de l'API via une fonction async await avec la méthode fetch


const fetchFurniture = async() =>{
    try {
        return await fetch(`${urlApiLocalHost}`).then(res => res.json());
    } catch (error) {
        console.log('Serveur localhost non connecté !')
    }
    try {
        return await fetch(urlApiServer).then(res => res.json());
    } catch (error) {
        console.log('Serveur déconnecté, essayez en version localhost !')
    }
};

// fonction qui permet d'afficher le contenu du panier
const showCart = async() => {
    let furnitures = await fetchFurniture();
    let numberRow = 1;
    let calcTotalCartPrice = 0;
    let totalQuantity = 0;
    let container = document.querySelector('#listCart');

    container.innerHTML = '';
    document.querySelector('#quantityProducts span').innerHTML = totalQuantity;
    document.querySelector('#total span').textContent = calcTotalCartPrice +"€";

    for (let id in productsArray) { // id est la clé/key de l'array productsArray
        let product = furnitures.filter(item => item._id == id)[0];
        let quantity = productsArray[id];

        if (quantity) {
            
            let cart = `
                <tr>
                    <th scope="row position">${numberRow}</th>
                        <td>${id}</td> 
                        <td>${product.name}</td>
                        <td class="getPrices">${Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }, { maximumSignificantDigits: 3 }).format(product.price/100)}</td>
                        <td>${productsArray[id]}</td>
                </tr>`;
                // id représente la clé de la variable products donc l'identifiant
                // product.name provient de l'API
                // product.price provient de l'API
                // products[id] représente la value de la variable products donc la quantité du produit ajouté au panier
            container.insertAdjacentHTML("beforeend", cart);
                    // intérêt visuel : ajoute un numéro de ligne à chaque article ajouté au panier :
            numberRow ++;
                    // calcule la quantité de produits au total présent dans le panier :
            totalQuantity += quantity;      
                    // calcule le prix total de tous les articles ajoutés au panier :
            calcTotalCartPrice += product.price/100 * quantity;
            
            document.querySelector('#quantityProducts span').innerHTML = totalQuantity;
            document.querySelector('#total span').textContent = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }, {maximumSignificantDigits: 3}).format(calcTotalCartPrice);
            
        }
    } 
 }; 
showCart(); //(affiche l'id et la quantité par le localStorage et le reste par l'API)

// si le localStorage contient un objet (id:quantité) relatifs aux produits alors le panier s'affiche sinon message d'alerte
if (productsArray) {
    showCart();
    //suite de la commande
        // fonction événement : découvre le formulaire au clic du btn commander seulement s'il y a des produits dans le panier
    let orderBtn = document.querySelector('#order');
    let form = document.querySelector('#block-form');
    if (orderBtn) {//empêche une erreur valeur nulle sur la page de confirmation de commande sur la fonction événement
        orderBtn.addEventListener('click', () => {
            form.style.display = 'block';
        });
    };
    // fonction événement : Au clic du bouton le panier se vide s'il y a des produits
    if(cleanBtn) { //empêche une erreur valeur nulle sur la page de confirmation de commande sur la fonction événement
        cleanBtn.addEventListener('click', () => {
            cleanCart();
        });
    }
} else {
    alert('Aucun produit dans le panier');
}

