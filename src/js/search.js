import list from "./fetchcount.js";
//let testList = ["brun", "blå", "gul"];

const searchResult = document.querySelectorAll(".searchResult");
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
        let word = e.toLowerCase();
        let searchWord = search.value.toLowerCase();
        if(word.includes(searchWord) && count > 11){
            count++
            let element = document.createElement("span");
            element.classList.add("searchResult");
            element.innerText = e;
            searchDrop.appendChild(element);
            element.addEventListener("click", (e) => {
                search.value = e.target.innerText;
                searchDrop.innerHTML = `
                    <span class="searchResult">${search.value}</span>
                `;
                })
            }
        })
    }
});
