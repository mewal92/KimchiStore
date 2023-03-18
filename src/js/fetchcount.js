
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
			    <h3>${data[i].title}</h3>
			    <img src="${data[i].image}" alt="${data[i].title}">
			    <p>${data[i].price} €</p>
                </div>
			`;
            }
        })
        .catch((error) => console.error(error));
}

// function getProductsCategory(){
//     fetch("https://fakestoreapi.com/products/categories")
//         .then((response) => response.json())
//         .then((data) => {
//             data.forEach(element => {
//                 productList.push(element)
//             });
//         })
//         .catch((error) => console.error(error));
// }

getProductsByCount();
//getProductsCategory();

export default productList;