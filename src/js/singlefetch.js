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
        productsContainer.innerHTML = `
        <div>
          <figure class="img-header">
            <img src="${data.image}" alt="${data.title}">
          </figure>
          <article class="product-body">
            <h3>${data.title}</h3>
            <p class="price">${data.description}</p>
            <p class="margin-top price">${data.price} €</p>
          </article>
        </div>
      `;
    })
    .catch((error) => console.error(error));
}