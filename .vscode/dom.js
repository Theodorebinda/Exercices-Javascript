// // Recuperations des Element html

// const titre = document.querySelector("#titre");
// const instruction = document.querySelector("#instru");
// const premierBloc = document.querySelector("#premierBloc");
// const deuxiemeBloc = document.querySelector("#deuxiemeBloc");
// const TroisiemeBloc = document.querySelector("#TroisiemeBloc");
// const quatriemeBloc = document.querySelector("#quatriemBloc");
// const cinquiemeBloc = document.querySelector("#cinquiemeBloc");
// const buttonStyle = document.querySelector("jsstyle");


// titre.innerHTML = "EXERCICES JAVASCRIPT";
// instruction.innerHTML = "Veillez Utiliser la console du navigateur pour voir les resultats associer aux Exercices";
// premierBloc.innerHTML = "Premiere Partie <br>variable.js";
// deuxiemeBloc.innerHTML = "Deuxieme Parties <br> condition.js";
// TroisiemeBloc.innerHTML = "Troisiemes Parties <br> sur index.js";
// quatriemeBloc.innerHTML = "Quatrieme  Parties <br> sur index.js";
// cinquiemeBloc.innerHTML = "Cinquieme  Parties <br> sur index.js";

// //Gestion de style avec DOM

// // console.log(premierBloc);

// // Ex1 You are given some names of different fruit and an unordered list html element; add a list item for each to the unordered list in page.
// // The Html sample code : <ul></ul>

// const fruitList = ["pomme", "banane", "tomate", "mangue"];
// const ul = document.querySelector("#list");
// // console.log(ul);

// fruitList.forEach(fruit => {
//     const li = document.createElement("li")
// li.innerHTML = fruit
//     ul.appendChild(li)
    
// });

// // Ex2 Add the CroCoder logo (image element) as a child element to the existing div element.
// // The Html sample code : <div></div>
// // The uri : 
// // const imageSrc = "https://crocoder.dev/icon.png";

// const logo = document.querySelector("#logo");
// const imageSrc = "https://crocoder.dev/icon.png";
// const img = document.createElement("img");
// img.setAttribute("src", "" );
// img.src = imageSrc


// logo.appendChild(img)
// // console.log(img)

// // EX3 Change the text in the first and the last list item element in every unordered list element on this page. Change it to 'first' and 'last'.

// const ulElements = document.querySelectorAll("#liste");
// ulElements.forEach(function(ulElements) {

//     let firstListItem = ulElements.querySelector("li:first-child");
//     let lastListItem = ulElements.querySelector("li:last-child");

//     firstListItem.textContent = "premier";
//     lastListItem.textContent = "dernier";
// });

// // Ex4 You are building a web page that displays a list of items. The user should be able to add new items to the list and edit the text of the items. Your task is to use the DOM API to create the necessary elements, add event listeners to them, and manipulate the elements as the user interacts with the page.
// // The Html sample code :

// <div id="list-app"></div>




// // Ex5 Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
// // Even numbers background is green
// // Odd numbers background is yellow
// // Prime numbers background is red


// // selection de conteneur "div"
// const container= document.querySelector('#div');
// function isPrimeNbr(nbr){
//     if (nbr < 8 && (nbr=== 2 || nbr=== 3 ||nbr === 5 || nbr === 7) ){
//         return true
//     }
//     else if ( nbr > 8 && nbr % 2 !== 0 && !(nbr % 3 === 0 || nbr % 5 === 0 || nbr % 7 === 0)) {
//         return true;
//     } else {
//       return  false;
//     }
// }
// // puis créer une boucle qui ira de 0 à 100
// for(let i=0; i<=100; i++){
//     const paragraph = document.createElement('p');
//     paragraph.innerHTML = i;
//     paragraph.style.width = "30px";
//     paragraph.style.textAlign = "center";

// if (i%2 === 0 && i !== 2){
//     paragraph.style.backgroundColor = 'green';
//     }
//     else if(isPrimeNbr(i) ) {
//         paragraph.style.backgroundColor = 'red';
//     } else {
//         paragraph.style.backgroundColor = 'yellow';
//     }
//     container.appendChild(paragraph);
// }
// // pour chaque itération créer un p , qui contiendra le nombre


// Ex6 Write a JavaScript function to get the values of First and Last names of the following form.
const label =  document.getElementById("label")
function getFormvalue(e) {
    // e.preventDefault();
    let firstName = document.forms["form1"]["fname"].value;
    let lastName = document.getElementById("form1").elements.namedItem("lname").value;

    let result = alert("Welcom " + firstName + " " + lastName)
    // console.log("Last name: " + firstName);
    // console.log("Last name: " + lastName);
  }

//   getFormvalue()
