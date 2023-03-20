
let productList = [];

function getProductsByCount(){
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            data.forEach(element => {
                productList.push(element.title)
                if(!productList.includes(element.category)){
                    productList.push(element.category)
                }
            });
            data.sort((a, b) => {
                return b.rating.count - a.rating.count
            });
            for (let i = 0; i < 10; i++){
                document.getElementById("topproducts").innerHTML += `
                
                <div>
                    <figure class="img-header">
			            <img src="${data[i].image}" alt="${data[i].title}">
                    </figure>
        
                    <article class="product-body">
                        <h3>${data[i].title}</h3>
			            <p class="price">${data[i].price}:-</p>
                    </article>
                </div>
			`;
            }
        })
        .catch((error) => console.error(error));
}



getProductsByCount();

export default productList;