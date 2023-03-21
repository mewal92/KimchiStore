import Product from "./product.js";
const productsContainer = document.getElementById("products");

if (window.sessionStorage.getItem("productID") == null){
    window.location.replace("index.html");
    
} else {
    const id = window.sessionStorage.getItem("productID");
    getProductById(id)
}

async function getProductById(id){
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((data) => {
        productsContainer.innerHTML = new Product(
          data.id, data.title, data.price, data.category, data.description, data.image
        ).toHTMLDetail();
    })
    .catch((error) => console.error(error));
}