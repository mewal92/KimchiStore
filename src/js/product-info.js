import Product from "./product.js";

const productsContainer = document.querySelector("#products");

let product;

if (window.sessionStorage.getItem("productID") == null){
    window.location.replace("index.html");
} else {
    const id = window.sessionStorage.getItem("productID");
    getProductById(id);
    const orderButton = document.querySelector("#ORDER");
    orderButton.addEventListener('click', (e) => {
      e.preventDefault();
      if(window.localStorage.getItem("product")){
        window.localStorage.removeItem("product");
        window.localStorage.setItem("product", JSON.stringify(product));
      } else {
        window.localStorage.setItem("product", JSON.stringify(product));
      }
      window.document.location = "order.html";
    })
}

async function getProductById(id){
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((data) => {
        product = new Product(
          data.id,
          data.title,
          data.price,
          data.category,
          data.description,
          data.image
        );
        productsContainer.innerHTML = printProductHTML(product.imageURL,
          product.title,
          product.description,
          product.price
          );
    })
    .catch((error) => console.error(error));
}

function printProductHTML(imageURL, title, description, price){
  return `
        <div>
          <figure class="img-header">
            <img src="${imageURL}" alt="${title}">
          </figure>
          <article class="product-body">
            <h3>${title}</h3>
            <p class="price">${description}</p>
            <p class="margin-top price">${price} €</p>
          </article>
        </div>
      `;
}