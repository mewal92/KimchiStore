function panel(){
  const header = document.querySelector("#panel");
  
  if(window.document.location.pathname === "/") {
      window.document.location.pathname = "/index.html"
  }
  
  header.innerHTML = `
  <nav class="nav">
      <ul>
        <li class="transition-all duration-200 hover-color-dark-gray:hover ${window.document.location.pathname === "/kontakt.html" ? "text-black" : null }">
          <a href="kontakt.html">Kontakt</a></li>
        <li class="transition-all duration-200 hover-color-dark-gray:hover ${window.document.location.pathname === "/produkter.html" ? "text-black" : null }">
          <a href="produkter.html" >Produkter</a></li>
        <li class="transition-all duration-200 hover-color-dark-gray:hover ${window.document.location.pathname === "/order.html" ? "text-black" : null }">
          <a href="order.html">Beställning</a></li>
        <li class="transition-all duration-200 hover-color-dark-gray:hover ${window.document.location.pathname === "/index.html" ? "text-black" : null }">
          <a href="index.html" >Startsida</a></li>
      </ul>
    </nav>
  `
}

panel();