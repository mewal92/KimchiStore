function getProductsByCount(){
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            data.sort((a, b) => {
                return b.rating.count - a.rating.count
            });
            for (let i = 0; i < 10; i++){
                document.getElementById("products").innerHTML += `
                <div>
			    <h3>${data[i].title}</h3>
			    <img src="${data[i].image}" alt="${data[i].title}">
			    <p>${data[i].description}</p>
			    <p>${data[i].price}</p>
                </div>
			`;
            }
        })
        .catch((error) => console.error(error));
}
getProductsByCount();
