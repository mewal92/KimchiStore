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
        
        <div class="product-body">
          <h3>${product.title}</h3>
			    <p>${product.description}</p>
			    <p>${product.price}</p>
        </div>
			`;
            productsContainer.appendChild(productElement);
          });
        })
        .catch((error) => console.error(error));
}

getAllProducts();