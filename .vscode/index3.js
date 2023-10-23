// Exercices sur Le Tableau
// Ex1 Write a JavaScript function to check whether an `input` is an array or not.
function verifTableau(input) {
    if (Array.isArray(input)) {
        console.log("c'est un tableau");
    } else{
         console.log("ce n'est pas un tableau");
    }
 }
 
 verifTableau(["salut"]);
