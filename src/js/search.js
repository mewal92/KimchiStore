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
            let word = e.split("/");
            let searchWord = search.value.toLowerCase().trim();
            if(word[0].trim().toLowerCase().includes(searchWord) && count < 11){
                count++
                let element = document.createElement("span");
                element.classList.add("searchResult");
                element.innerText = word[0];
                searchDrop.appendChild(element);
                element.addEventListener("click", (e) => {
                    search.value = e.target.innerText;
                    searchDrop.innerHTML = `
                        <span class="searchResult">${search.value}</span>
                    `;
                    searchEventStatic(search.value.trim(), word[1]);
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
        if(searchWord == "electronics" ||
        searchWord == "jewelery" ||
        searchWord == "men's clothing" ||
        searchWord == "women's clothing"){
            window.sessionStorage.setItem("category",searchWord);
            window.document.location = "produkter.html";
        } else {
            window.sessionStorage.setItem("productID", id);
            window.document.location = "product-info.html";
        }
    }
}

function searchEvent(searchWord){
    if(!searchWord == "" || !searchWord == null){
        if(searchWord == "electronics" ||
        searchWord == "jewelery" ||
        searchWord == "men's clothing" ||
        searchWord == "women's clothing"){
            window.sessionStorage.setItem("category",searchWord);
            window.document.location = "produkter.html";
        } else {
            let productIDList = [];
            let matchWholeWord = false;
            list.forEach(e =>{
                let word = e.split("/");
                if(word[0].toLowerCase().trim() === searchWord){
                    window.sessionStorage.setItem("productID", word[1]);
                    matchWholeWord = true
                }
                else if(word[0].toLowerCase().includes(searchWord)){
                    productIDList.push(word[1]);
                }
            })
            if(matchWholeWord){
                //window.document.location("product-info.html");
                //?id=
                window.document.location = "product-info.html";
            } else if (productIDList.length == 1){
                window.sessionStorage.setItem("productID", productIDList[0]);
                window.document.location = "product-info.html";
            } else if (productIDList.length > 1){
                window.sessionStorage.setItem("productIDList", productIDList);
                window.document.location = "produkter.html";
            }
        }
    }
}
