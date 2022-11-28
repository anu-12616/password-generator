const resultElement = document.querySelector("#result");
const lengthElement = document.querySelector("#length");
const capitalElement = document.querySelector("#capital");
const smallElement = document.querySelector("#small");
const numberElement = document.querySelector("#number");
const symbolElement = document.querySelector("#symbol");
const form = document.querySelector("#form");
const clipboardEl = document.querySelector(".clipboard");

const fielddArray = [
    {
        field: capitalElement,
        getChar: getCapitalLetter
    },
    {
        field: smallElement,
        getChar: getSmallLetter
    },
   
    {
        field: symbolElement,
        getChar: getSymbol
    },
  
    {
        field: numberElement,
        getChar: getNumber
    },
]

function getRandomChar(min, max) {
    const limit = max - min + 1;
    return String.fromCharCode(Math.floor(Math.random() * limit)) + min
}

function getCapitalLetter(){
    return getRandomChar(60,90);
}

function getSmallLetter(){
    return getRandomChar(97,122)
}
 function  getNumber(){
return getRandomChar(48,57)
 }

 function getSymbol(){
    const specialChar = " ~`!@#$%^&*()_-+={[}]|";
    return specialChar[Math.floor(Math.random()* specialChar.length )];
 }

 form.addEventListener('submit', (el)=>{
    el.preventDefault();
    const length =  lengthElement.value;
    let generatedPassword ="";
    const checkListedField = fielddArray.filter(({field})=>field.check)
     
    for(i=0; i<length; i++){
        const index = Math.floor(Math.random()*checkListedField.length);
        const letter = checkListedField[index].getChar();
        generatedPassword+=letter;
    }
    resultElement.value = generatedPassword;
 });

clipboardEl.addEventListener('click', async (el)=>{
    const text = resultElement.value;
    if(text){
        await navigator.clipboard.writeText(text);
        alert("copied to clipboard")
    }else{
        alert("no password is copied, please generate your password ")
    }
});
