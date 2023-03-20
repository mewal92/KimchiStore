function getAllProducts(){
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          const productsContainer = document.getElementById("products");

          data.forEach((product) => {
            const productElement = document.createElement("div");
            productElement.innerHTML = `
        <figure class="img-header">
			    <img src="${product.image}" alt="${product.title}">
        </figure>
        
        <article class="product-body">
          <h3>${product.title}</h3>
			    <p class="price">${product.price}:-</p>
        </article>
			`;
            productsContainer.appendChild(productElement);
          });
        })
        .catch((error) => console.error(error));
}

getAllProducts();