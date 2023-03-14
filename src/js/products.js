function getAllProducts(){
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          const productsContainer = document.getElementById("products");

          data.forEach((product) => {
            const productElement = document.createElement("div");
            productElement.innerHTML = `
			  <h3>${product.title}</h3>
			  <img src="${product.image}" alt="${product.title}">
			  <p>${product.description}</p>
			  <p>${product.price}</p>
			`;
            productsContainer.appendChild(productElement);
          });
        })
        .catch((error) => console.error(error));
}

getAllProducts();