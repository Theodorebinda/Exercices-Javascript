// Exercices Partie2
// let a = 0, b = 1, c = "1";

//   if(a === 0){
//     true
//   }

//   if(a === 1){
//     false
//   }   
//   if(a === b){
//     false
//   }   
//   if(a === 0 && b === 1){
//     true
//   };  
//   if(a === 0 && b === 0){
//     false
//   } 

//   if(a === 0 || b === 0){
//     true
//   };  
//   if(b === c){
//     false
//   }      
//   if(a < b){
//     true
//   }       
//   if(a >= b){
//     false
//   };     
   
//   if(b == c){
//     true
//   };  
//   if(a !== b){
//     true
//   };   
//   if(a === 0 && (b === 1 || b === 2)){
//     true
//   } ;

//  if (a === 0 && true){
//     true
//  };




//   Ex2 "Ecrivez une fonction qui prend 3 paramètres (mots).

//   Concaténez les trois variables et vérifiez si sa taille est 
//   suppérieure à 100 alors affichez ""C'est une grande phrase"" 
//   sinon affichez ""C'est une petite phrase


// function verifieLaTaille(mot1, mot2, mot3) {
//     let phrase = mot1 + mot2 + mot3;
//     if (phrase.length > 100) {
//       return "C'est une grande phrase";
//     } else {
//       return "C'est une petite phrase";
//     }
//   }


// Ex3 Déclarer et définir 2 variables misteryNumber et myNumber de type number.
// En utilisant uniquement l'opérateur ternaire, on affiche :

// Si les 2 nombres sont égaux Congratulations !
// Sinon
// Si le nombre myNumber est inférieur au nombre misteryNumber, on affiche +
// Sinon on affiche -

// const misteryNumber = 3;
// const   myNumber = 3;
// if(misteryNumber === myNumber){
//     return Congratulation;
// } else if(myNumber < misteryNumber) {
//     return "+";
// }
// else {
//     return console.log("+")
// }

// Ex4 Create Function `findLargest()` finds the largest of three numbers.

// function findLargest(num1, num2, num3) {
//     let largest = num1;
    
//     if (num2 > largest) {
//       largest = num2;
//     }
    
//     if (num3 > largest) {
//       largest = num3;
//     }
    
//     return largest;
//   }
// Ex7 "Create `evalNumbers()` prints the result after evaluating arithmetic operations between two numbers of addition, multiplication, division, and modulus in JavaScript.
// Print result of num1+num2 if operation is “add”
// Print result of num1-num2 if operation is “subtract”
// Print result of num1*num2 if operation is “multiply”
// Print result of num1/num2 if operation is “divide”
// Print result of num1%num2 if operation is “modulus”
// Else print “Invalid operation”"

// function evalNumbers(num1, num2, operation) {
//     let result;
  
//     switch (operation) {
//       case "add":
//         result = num1 + num2;
//         break;
//       case "subtract":
//         result = num1 - num2;
//         break;
//       case "multiply":
//         result = num1 * num2;
//         break;
//       case "divide":
//         result = num1 / num2;
//         break;
//       case "modulus":
//         result = num1 % num2;
//         break;
//       default:
//         console.log("Opération non valide");
//         return;
//     }
  
//     console.log(result);
//   }
// Ex8 "Create Function `checkLeapYear()` find if the given year is a leap year 
// If year is divisble by 4 and not divisble by 100 then print “leap year”.
// Or if year is divisible by 400 then print “leap year”.
// Else print “not a leap year”."
  
// function checkLeapYear(year){
//     if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         console.log("Leep Year");
//     } else{
//         console.log("not a Leap year");
//     }

// }
// checkLeapYear(2200)
// Ex9  "Function `findDaysInMonth()` finds the number of days in a given month of a year.
// If month is outside the range of 1 and 12 print “Invalid month”.
// If month is equal to 2 ie, February print “29 days” if leap year else print “28 days” 
// .Else if month is equal to 4, 6, 9 or 11 print “30 days”.
// Else print “31 days”."

function findDaysInMonth(month, year) {
    if (month < 1 || month > 12) {
      console.log("Invalid month");
    } else if (month === 2) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("29 days");
      } else {
        console.log("28 days");
      }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      console.log("30 days");
    } else {
      console.log("31 days");
    }
  }
