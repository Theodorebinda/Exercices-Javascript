// Exercices sur Le Tableau
// Ex1 Write a JavaScript function to check whether an `input` is an array or not.
// function verifTableau(input) {
//     if (Array.isArray(input)) {
//         console.log("c'est un tableau");
//     } else{
//          console.log("ce n'est pas un tableau");
//     }
//  }
 
//  verifTableau("salut");

// Ex2 Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
function getFistElemArr(n){
    if(Array.isArray(n)){
        console.log(n[0]);
    } else{
        console.log("ceci n'est un tableau");
    }

}
getFistElemArr(["Theo",5,6])