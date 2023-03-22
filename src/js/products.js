import Product from "./product.js";

const productsContainer = document.getElementById("products");

//Lista med IDs som har matchat fåran sökning
let idList = JSON.parse(window.sessionStorage.getItem("productIDList"));

//fetcha produkter baserat på categori, sök matchningar
//annars skriv ut alla produkter
function getAllProducts(){
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          //Skriv ut alla produkter om categori valts
          if(window.sessionStorage.getItem("category") != null){
            data.forEach((product) => {
              if(product.category == window.sessionStorage.getItem("category")){
                productsContainer.innerHTML += printProductHTML(product.image, product.title, product.price);
              }
            });
            //Skriv ut alla produkter som matchat en sökning
          } else if (idList){
            data.forEach((product) => {
              idList.forEach(e =>{
                if(product.id == e){
                  productsContainer.innerHTML += printProductHTML(product.image, product.title, product.price);
                }
              })
            });
            //Annars skriv ut alla
          } else {
            data.forEach((product) => {
              productsContainer.innerHTML += printProductHTML(product.image, product.title, product.price);
            });
          }
          window.sessionStorage.removeItem("category");
          window.sessionStorage.removeItem("productIDList");

        })
        .catch((error) => console.error(error));
}

//Metod som printar HTML
function printProductHTML(imageURL, title, price){
  return `
        <div class="product-card">
            <figure class="product-header">
                <img src="${imageURL}" alt="${title}">
            </figure>
            <article class="product-body">
                <h3 class="product-title">${title}</h3>
                <p class="price">${price}€</p>
            </article>
        </div>
        `;
}

getAllProducts();