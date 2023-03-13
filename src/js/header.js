function header(){
    const header = document.querySelector("#header");
    
    if(window.document.location.pathname === "/") {
        window.document.location.pathname = "/index.html"
    }
    
    header.innerHTML = `
    <nav class="nav">
        <ul>
          <li>
            <a
              class="transition-all duration-200 hover-color-dark-gray:hover ${window.document.location.pathname === "/kontakt.html" ? "text-black" : null }"
              href="kontakt.html"
              >Kontakt</a
            >
          </li>
          <li>
            <a
              class="transition-all duration-200 hover-color-dark-gray:hover ${window.document.location.pathname === "/produkter.html" ? "text-black" : null }"
              href="produkter.html"
              >Produkter</a
            >
          </li>
          <li>
            <a
              class="transition-all duration-200 hover-color-dark-gray:hover ${window.document.location.pathname === "/order.html" ? "text-black" : null }"
              href="order.html"
              >Beställning</a
            >
          </li>
          <li>
            <a
              class="transition-all duration-200 hover-color-dark-gray:hover ${window.document.location.pathname === "/index.html" ? "text-black" : null }"
              href="index.html"
              >Startsida</a
            >
          </li>
        </ul>
      </nav>
    `
}
header();