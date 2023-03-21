export default class Product {
    constructor(id, title, price, category, description, imageURL){
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
        this.description = description;
        this.imageURL = imageURL;
    }

    toHTMLDisplay(){
       return `
        <div>
            <figure class="img-header">
                <img src="${this.imageURL}" alt="${this.title}">
            </figure>
            <article class="product-body">
                <h3>${this.title}</h3>
                <p class="price">${this.price} €</p>
            </article>
        </div>
        `;
    }

    toHTMLDetail(){
        return `
        <div>
          <figure class="img-header">
            <img src="${this.imageURL}" alt="${this.title}">
          </figure>
          <article class="product-body">
            <h3>${this.title}</h3>
            <p class="price">${this.description}</p>
            <p class="margin-top price">${this.price} €</p>
          </article>
        </div>
      `;
    }
}