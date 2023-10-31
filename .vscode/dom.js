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
premierBloc.innerHTML = "Premiere Partie <br>index.js";
deuxiemeBloc.innerHTML = "Deuxieme Parties <br> index.js";
TroisiemeBloc.innerHTML = "Troisiemes Parties <br> sur index.js";
quatriemeBloc.innerHTML = "Quatrieme  Parties <br> sur index.js";
cinquiemeBloc.innerHTML = "Cinquieme  Parties <br> sur index.js";


console.log(premierBloc);

const fruitList = ["pomme", "banane", "tomate", "mangue"];
const ul = document.querySelector("#list");
console.log(ul);

fruitList.forEach(fruit => {
    const li = document.createElement("li")
    li.setAttribute("title", "djo")
    li.innerHTML = fruit
    ul.appendChild(li)
    console.log(li);
});