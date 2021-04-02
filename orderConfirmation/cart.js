const fetchFurniture = async() =>{
	return await fetch(`http://localhost:3000/api/furniture`).then(res => res.json());
};

//début de showCart
const showCart = async(products) => {
	let furnitures = await fetchFurniture();
    products.map(id =>  {
        //console.log(furnitures);
        let product = furnitures.filter(item => item._id == id)[0];
        let cart = `
        <ul>   
        <li class="list-inline-item">${product.name} |</li>
        <li class="list-inline-item">${product._id} |</li>
        <li class="list-inline-item getPrices">${Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }, { maximumSignificantDigits: 3 }).format(product.price/100)} |</li>
        <li class="list-inline-item qty">${quantity} |</li>
        </ul>`
        listCart.insertAdjacentHTML("beforeend", cart);
        
        /* 01/04 essai pour récupérer les prix
        let getPrices = document.querySelector('.getPrices');
        console.log("alors getPrices ? "+ getPrices.value);
        */
        //function addPrices(prices, total){ //push de l'identifiant id vers un tableau idStorage
            
            //localStorage.setItem("listCart", JSON.stringify(idStorage)); //création du localStorage listCart et conversion des données en string
        //}
        const displayQuantityProducts = () => {
            let showQuantityProducts = document.querySelector('#quantityProducts');
            showQuantityProducts.innerHTML += " " + quantity + " article(s)";
        }
        displayQuantityProducts();
        const displayTotal = () => {
            let showTotal = document.querySelector('#total');
            //let total = 0;
            //let cart = localStorage.getItem("listCart") ? JSON.parse(localStorage.getItem("listCart")) : {} ;
                //console.log(total);
            
            //console.log(typeof(product.price/100));
            //let prices = [];
            //let price = (product.price);
            //prices.push(price/100);
            //console.log(typeof price);
            /*
            if(prices.length === 0) {
            return 0;
            }
            */
            //for (i = 0 ; i < prices.length ; i++) {
            //    prices.push(price[i].product.price/100);
            //}
            /*
            console.log("prices alors ?" + prices);
            let prices = [];
            let price = (product.price);
            let sum = 0;
            for (let price of prices) {
                sum += price;
                return sum /prices.length // moyenne du prix total
            }
            console.log("sum alors ?" + sum);
            showTotal.textContent += sum;
            */
            
                        // essai 1 avec des chiffres déjà présents : marche pas prix égal objet affiche rien dans showTotal
            /*let tab = [];
            let prix = {0:10,1:20,2:30,3:40};
            for (i = 0 ; i < tab.length ; i++) {
                tab.push(prix[i]);
                showTotal.textContent += tab;
            }
            */
                        // essai 2 avec des chiffres déjà présents : marche pas prix égal objet, affiche tout l'objet avec l'index dans showTotal
            /*
            let tab = [];
            let prix = {0:10,1:20,2:30,3:40};
            //for (i = 0 ; i < tab.length ; i++) {
                tab.push(JSON.stringify(prix));
                showTotal.textContent += tab;
            //}
            console.log(typeof prix);
            console.log("tab alors ? " + tab);
            */

                        // essai 3 avec des chiffres déjà présents : marche pas prix égal objet, affiche un array [] vide dans consolelog
            /*
            let tab = [];
            let prix = {0:10,1:20,2:30,3:40};
            for (i = 0 ; i < tab.length ; i++) {
                tab.push(JSON.stringify(prix[i]));
                showTotal.textContent += tab;
            }
            console.log(typeof prix);
            console.log("tab alors ? " + JSON.stringify(tab));
            */
                        // essai 4 affiche tous les fruits 4 fois mais le push fonctionne
            /*
            var tab= new Array("Pommes", "Poires", "Ananas", "Cerise");
            var nb=tab.push("Banane", "Fraise")
            tab.join(", ");
            console.log("Nombre d'éléments dans le tableau : "+nb);
            showTotal.textContent += tab;
            */
                        // essai 5 résultat : répète 4 fois l'action car j'ai 4 produits dans l'article, mais push fonctionne indique 6 éléments
            /*
            var tab= new Array("1", "10", "20", "30");
            var nb=tab.push("15", "40")
            console.log("Nombre d'éléments dans le tableau : "+nb);
            showTotal.textContent += tab;
            */

            // essai 5 résultat : nombre d'éléments undefined
            /*
            var tab= new Array(1, 10, 20, 30);
            var nb;
            console.log("Nombre d'éléments dans le tableau : "+ tab);
            tab[0] = 45;
            console.log("2: Nombre d'éléments dans le tableau : "+ tab)
            for (let chiffre in tab){
                let total = a + b;
                return total
            }
            function somme (tab){
                let total = a + b;
                return total;
            }
            console.log(somme);
            

            fin test 5
            */
            /*for (i = 0 ; i < tab.length ; i++) {
                nb=tab.push(15);
                console.log(nb);
                //showTotal.textContent += nb;
            }*/

            // 01-04 essai avec Nina et Sébastien array vide mais pas d'erreur sur le push
            
            let prices = [];
            let price = product.price;
            for (i = 0 ; i < price.length ; i++) {
                prices.push(price[i]);
                showTotal.textContent += prices;
            }
            console.log(prices);
            //console.log(prices);
            /*var tab = new Array();
            var nb = tab.push(product.price);
            console.log(" combien de prix nb? " + nb);
            console.log(" combien de prix dans la tab ? " + tab);
            tab[0] = prices;
            console.log(" tab" + tab);
            console.log(typeof prices);*/
            //total.push(prices);

            // essai avec for let of
            /*for(let price of prices){
                //
                //addPrices(prices, total)
                tab[0] = price;
                console.log(" tab dans for" + tab);
                console.log("le montant de cet article est de " + price/100); //price s'insère dans prices ?
                /*total += prices;
                console.log(typeof total);
                showTotal.textContent += Number(total);*//*
                
            }*/
            // essai avec for let in
            /*
            for(let i in prices){
                //
                //addPrices(prices, total)
                console.log("le montant de cet article est de " + prices[i]/100); //price s'insère dans prices ?
                total += prices[i];
                console.log(typeof total);
                showTotal.textContent += Number(total);
                
            }
            */
            
            //localStorage.setItem("prices", JSON.stringify(prices));
            //var sumPrice = [];
            //var addPrices = [];
            //addPrices = sumPrice.push(prices);
            //console.log(prices);
            //console.log(sumPrice);
            //console.log(addPrices);
            /*for(var i = 0; i < sumPrice.length ; i++){
                    total += sumPrice[i];
            }
            total += (product.price);*/
                //sumTotal = total
            //console.log(typeof total);
                //sumTotal = total.length * 
            
           //showTotal.innerHTML += ` ${Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }, { maximumSignificantDigits: 3 }).format(total / 100)}`;
            //console.log(cart[id]);
           /* total = Number(product.price/100) ;
            let sum = 0;
            sum += (total);
            showTotal.innerHTML += Number(total) ;
            //console.log(total);
            console.log(sum);*/
    }
        displayTotal();
    })
     
}; // fin de showCart

// récupère le localStorage (listCart) qui contient les id des produits ajoutés au panier, 
let dataStorage = localStorage.getItem("listCart");
let products = JSON.parse(dataStorage); //le transforme pour être lisible 
// si le localStorage contient des id/produits alors le panier s'affiche sinon message d'alerte
if (products) {
    showCart(products);
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
let quantity = products.length; // ne différencie pas les id entre elles, compte le nbr total d'articles
/*if (products !== undefined){
    alert("combien y'a t'il de données: " + products.length);
    for (let i = products.value ; i <= products.length ; i+= products.length) {
    quantity = i;
}
};*/

/*if (products !== null){
    products.forEach(function(item, index, array)){

    }
    quantity += 2;
    showQuantity.textContent = quantity ;
} else {
    alert('marche pas');
}*/
/*for (let i = 0 ; i < products.value ; i++) {
 quantity[i].textContent = i;
}*/

// total de la commande :



// Au clic du bouton le panier se vide
let cleanBtn = document.querySelector('.cleanBtn');
cleanBtn.addEventListener('click', () => {
    cleanCart();
});
// fonction qui nettoie le panier (localStorage correspondant)
function cleanCart () {
    alert('Le panier a été vidé');
    localStorage.removeItem('listCart');
    listCart.style.display = 'none';
    quantityProducts.style.display = 'none';
    //window.location.reload(); rafraichit la page autre façon de faire disparaitre la listCart
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


// 01/04 essai pour récupérer les prix via le html créé par JS
/*
let getPrices = document.querySelector('.getPrices');
console.log("alors getPrices ? "+ getPrices);
localStorage.setItem("pricesStorage", getPrices);
*/