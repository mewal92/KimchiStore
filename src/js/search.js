import list from "./fetchcount.js";

const search = document.querySelector("#search");
search.value = "";

const searchDrop = document.querySelector(".searchDropdown");

search.addEventListener('keyup', (e) =>{
    if(search.value == "" || search.value == null){
        searchDrop.innerHTML = "";
    } else {
        searchDrop.innerHTML = "";
        let count = 0;
        list.forEach((e) =>{
            let searchWord = search.value.toLowerCase().trim();
            if(e.title.trim().toLowerCase().includes(searchWord) || e.category.trim().toLowerCase().includes(searchWord) && count < 11){
                count++
                let element = document.createElement("span");
                element.classList.add("searchResult");
                element.innerText = e.title + " (" + e.category + ")";
                searchDrop.appendChild(element);
                element.addEventListener("click", (ee) => {
                    search.value = ee.target.innerText;
                    searchDrop.innerHTML = `
                        <span class="searchResult">${search.value}</span>
                    `;
                    searchEventStatic(search.value.trim(), e.id);
                })
            }
        })
    }
});

const submitButton = document.querySelector("#submit");

submitButton.addEventListener('click', (e) =>{
    e.preventDefault();
    searchEvent(search.value.toLowerCase().trim());
})

function searchEventStatic(searchWord, id){
    if(!searchWord == "" || !searchWord == null){
        window.sessionStorage.setItem("productID", id);
        window.document.location = "product-info.html?id=" + id;
    }
}

function searchEvent(searchWord){
    if(!searchWord == "" || !searchWord == null){
        let productIDList = [];
        let matchWholeWord = false;
        list.forEach(e =>{
            if(e.title.toLowerCase().trim() === searchWord){
                window.sessionStorage.setItem("productID", e.id);
                matchWholeWord = true
            }
            else if(e.title.toLowerCase().includes(searchWord)){
                productIDList.push(e.id);
            }
        })
        if(matchWholeWord){
            window.document.location = "product-info.html?id=" + id;
        } else if (productIDList.length == 1){
            window.sessionStorage.setItem("productID", JSON.stringify(productIDList));
            window.document.location = "product-info.html?id=" + id;
        } else if (productIDList.length > 1){
            window.sessionStorage.setItem("productIDList", JSON.stringify(productIDList));
            window.document.location = "produkter.html";
        }
    }
}
