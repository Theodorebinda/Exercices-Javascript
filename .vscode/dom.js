// Recuperations des Element html

const titre = document.querySelector("#titre");
const instruction = document.querySelector("#instru");
const premierBloc = document.querySelector("#premierBloc");
const deuxiemeBloc = document.querySelector("#deuxiemeBloc");
const TroisiemeBloc = document.querySelector("#TroisiemeBloc");
const quatriemeBloc = document.querySelector("#quatriemBloc");
const cinquiemeBloc = document.querySelector("#cinquiemeBloc");

titre.innerHTML = "EXERCICES JAVASCRIPT";
instruction.innerHTML = "Veillez Utiliser la console du navigateur pour voir les resultats associer aux Exercices";
premierBloc.innerHTML = "Premiere Partie <br>variable.js";
deuxiemeBloc.innerHTML = "Deuxieme Parties <br> condition.js";
TroisiemeBloc.innerHTML = "Troisiemes Parties <br> sur index.js";
quatriemeBloc.innerHTML = "Quatrieme  Parties <br> sur index.js";
cinquiemeBloc.innerHTML = "Cinquieme  Parties <br> sur index.js";


// console.log(premierBloc);

// Ex1 You are given some names of different fruit and an unordered list html element; add a list item for each to the unordered list in page.
// The Html sample code : <ul></ul>

const fruitList = ["pomme", "banane", "tomate", "mangue"];
const ul = document.querySelector("#list");
console.log(ul);

fruitList.forEach(fruit => {
    const li = document.createElement("li")
li.innerHTML = fruit
    ul.appendChild(li)
    
});

// Ex2 Add the CroCoder logo (image element) as a child element to the existing div element.
// The Html sample code : <div></div>
// The uri : 
// const imageSrc = "https://crocoder.dev/icon.png";

const logo = document.querySelector("#logo");
const imageSrc = "https://crocoder.dev/icon.png";
const img = document.createElement("img");
img.setAttribute("src", "" );
img.src = imageSrc


logo.appendChild(img)
console.log(img)

// EX3 Change the text in the first and the last list item element in every unordered list element on this page. Change it to 'first' and 'last'.

const ulElement = document.querySelectorAll("ul");
ulElement.forEach(function(element) {
    const firstListItem = ulElement.querySelector('li:first-child');
    const lastListItem = ulElement.querySelector('li:last-child');
    
    
});
