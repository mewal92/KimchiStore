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
                printHTML(new Product(product.id, product.title, product.price, product.category, product.description, product.image));
              }
            });
          } else if (idList){
            data.forEach((product) => {
              idList.forEach(e =>{
                if(product.id == e){
                  printHTML(new Product(product.id, product.title, product.price, product.category, product.description, product.image));
                }
              })
            });
          } else {
            data.forEach((product) => {
              printHTML(new Product(product.id, product.title, product.price, product.category, product.description, product.image));
            });
          }
          window.sessionStorage.removeItem("category");
          window.sessionStorage.removeItem("productIDList");
        })
        .catch((error) => console.error(error));
}

function printHTML(product){
  productsContainer.innerHTML += product.toHTMLDisplay();
}

getAllProducts();