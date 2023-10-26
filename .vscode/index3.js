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
// function getFistElemArr(n){
//     if(Array.isArray(n)){
//         console.log(n[0]);
//     } else{
//         console.log("ceci n'est un tableau");
//     }

// }
// getFistElemArr(["merci",3,5,6])
// Ex3 Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// function getFirstElements(array, n) {
//     if (n === undefined) {
//       return array[0];
//     } else if (n > array.length){
//       return console.log("le parametre est superieur au tableau");
//     }
//      else {
//       return array.slice(0, n);
//     }
//   }
//   const myArray = [1, 2, 3, 4,5];
// const firstElement = getFirstElements(myArray,8); 
// const firstTwoElements = getFirstElements(myArray, 3);
// console.log(firstTwoElements);
// console.log(firstElement);
  
// Ex4 Write a simple JavaScript program to join all elements of the following array into a string.Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"

