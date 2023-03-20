const productsContainer = document.getElementById("products");

let idList = [];

if(window.sessionStorage.getItem("productIDList") != null){
  idList = window.sessionStorage.getItem("productIDList").split(",");
  idList.forEach(e =>{
    console.log(e);
  })
}

function getAllProducts(){
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          if(window.sessionStorage.getItem("category") != null){
            data.forEach((product) => {
              if(product.category == window.sessionStorage.getItem("category")){
                printHTML(product.image, product.title, product.price);
              }
            });
          } else if (idList.length > 0){
            data.forEach((product) => {
              idList.forEach(e =>{
                if(product.id == e){
                  printHTML(product.image, product.title, product.price);
                }
              })
            });
          } else {
            data.forEach((product) => {
              printHTML(product.image, product.title, product.price);
            });
          }
          window.sessionStorage.removeItem("category");
          window.sessionStorage.removeItem("productIDList");
        })
        .catch((error) => console.error(error));
}

function printHTML(imgaURL, title, price){
  productsContainer.innerHTML += `
    <div>
      <figure class="img-header">
        <img src="${imgaURL}" alt="${title}">
      </figure>
      <article class="product-body">
        <h3>${title}</h3>
        <p class="price">${price} €</p>
      </article>
    </div>
  `;
}

getAllProducts();