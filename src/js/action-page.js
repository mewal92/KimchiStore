if(!window.sessionStorage.getItem('customer')){
    window.location.replace("index.html");
} else {
    const customer = JSON.parse(window.sessionStorage.getItem('customer'));
    const product = JSON.parse(window.localStorage.getItem('product'));
    document.querySelector("#address").innerHTML = `
        Varan väntas skickas till: ${customer.address} ${customer.zip} ${customer.county}
    `;
    document.querySelector("#email").innerHTML = `
        Ditt kvitto har skickats till: ${customer.email}
    `;
    document.querySelector("#name").innerHTML = `
        Beställaren: ${customer.name}
    `;
    document.querySelector("#phone").innerHTML = `
        Telefon: ${customer.phone}
    `;
    document.querySelector("#title").innerHTML = `
        Vara: ${product.title}
    `;
    document.querySelector("#price").innerHTML = `
        Pris: ${product.price}
    `;
}