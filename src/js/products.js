import Product from "./product.js";

const productsContainer = document.getElementById("products");

let idList = JSON.parse(window.sessionStorage.getItem("productIDList"));

function getAllProducts(){
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          if(window.sessionStorage.getItem("category") != null){
            data.forEach((product) => {
              if(product.category == window.sessionStorage.getItem("category")){
                productsContainer.innerHTML += printProductHTML(product.image, product.title, product.price);
              }
            });
          } else if (idList){
            data.forEach((product) => {
              idList.forEach(e =>{
                if(product.id == e){
                  productsContainer.innerHTML += printProductHTML(product.image, product.title, product.price);
                }
              })
            });
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

function printProductHTML(imageURL, title, price){
  return `
        <div>
            <figure class="img-header">
                <img src="${imageURL}" alt="${title}">
            </figure>
            <article class="product-body">
                <h3>${title}</h3>
                <p class="price">${price} €</p>
            </article>
        </div>
        `;
  //productsContainer.innerHTML += product.toHTMLDisplay();
}

getAllProducts();