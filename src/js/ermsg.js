//document.getElementById("submit").classList.add('hiddem');

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const telInput = document.getElementById("tel");
const addressInput = document.getElementById("address");
const postnrInput = document.getElementById("postnr");
const ortInput = document.getElementById("ort");

nameInput.value = "";
emailInput.value = "";
telInput.value = "";
addressInput.value = "";
postnrInput.value = "";
ortInput.value = "";

let correctName = false;
let correctEmail = false;
let correctTel = false;
let correctAddress = false;
let correctPostnr = false;
let correctOrt = false;

nameInput.addEventListener('input', (e) =>{
    correctName = symbolRange(nameInput, "name-ermsg", "Behöver 2-50 bokstäver");
    submitField();
});

emailInput.addEventListener('input', (e) =>{
    correctEmail = symbolRangeWithRegX(emailInput,
        "email-ermsg",
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/,
        emailInput.value.includes("."),
        "Behöver email format \"exempel@domain.org\"");
        submitField();
});

telInput.addEventListener('input', (e) =>{
    correctTel = symbolRangeWithRegX(telInput,
        "tel-ermsg",
        /^[0-9+() -]*$/,
        true,
        "Behöver ett telefonnummer");
        submitField();
});

addressInput.addEventListener('input', (e) =>{
    correctAddress = symbolRange(addressInput, "address-ermsg", "Behöver 2-50 bokstäver");
    submitField();
});

postnrInput.addEventListener('keyup', (e) =>{
    console.log(e.key);
 
    correctPostnr = symbolRangeWithRegX(postnrInput,
        "postnr-ermsg",
        /^[0-9]{3}\s?[0-9]{2}$/,
        true,
        "Behöver ett postnummer format \"000 00\"");
        if(postnrInput.value.length == 3 && e.key != "Backspace"){
            postnrInput.value = postnrInput.value + " ";
        } else if (postnrInput.value.length == 4 && e.key == "Backspace"){
            postnrInput.value = postnrInput.value.substring(0,2);
        } 
        submitField();
});

ortInput.addEventListener('input', (e) =>{
    correctOrt = symbolRange(ortInput, "ort-ermsg", "Behöver 2-50 bokstäver");
    submitField();
});

function symbolRangeWithRegX(tag, pID, regX, bool, message){
    if(tag.value == null || tag.value == ""){
        document.getElementById(pID).classList.add('yellow');
        document.getElementById(pID).classList.remove('green');
        document.getElementById(pID).classList.remove('red');
        document.getElementById(pID).innerText = "Obligatoriskt fält";
        return false;
    }else if (tag.value.match(regX) && bool && tag.value.length > 2 && tag.value.length < 51){
        document.getElementById(pID).classList.remove('yellow');
        document.getElementById(pID).classList.add('green');
        document.getElementById(pID).classList.remove('red');
        document.getElementById(pID).innerText = "Accepterat";
        return true;
    }else{
        document.getElementById(pID).classList.remove('yellow');
        document.getElementById(pID).classList.remove('green');
        document.getElementById(pID).classList.add('red');
        document.getElementById(pID).innerText = message;
        return false;
    }
}

function symbolRange(tag, pID, message){
    if(tag.value.length < 2 || tag.value.length > 50){
        if(tag.value == null || tag.value == ""){
            document.getElementById(pID).classList.add('yellow');
            document.getElementById(pID).classList.remove('green');
            document.getElementById(pID).classList.remove('red');
            document.getElementById(pID).innerText = "Obligatoriskt fält";
        } else {
            document.getElementById(pID).classList.remove('yellow');
            document.getElementById(pID).classList.remove('green');
            document.getElementById(pID).classList.add('red');
            document.getElementById(pID).innerText = message;
        }
        return false;
    }else{
        document.getElementById(pID).classList.remove('yellow');
        document.getElementById(pID).classList.add('green');
        document.getElementById(pID).classList.remove('red');
        document.getElementById(pID).innerText = "Accepterat";
        return true;
    }
}

// .preventDefault

function submitField(){
    document.getElementById("submit").classList.add('hidden');
    if (correctName &&
        correctEmail &&
        correctTel &&
        correctAddress &&
        correctPostnr &&
        correctOrt){
        document.getElementById("submit").classList.remove('hidden');
    }
}