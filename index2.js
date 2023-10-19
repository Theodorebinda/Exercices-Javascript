// Exercices Partie2
let a = 0, b = 1, c = "1";

  if(a === 0){
    true
  }

  if(a === 1){
    false
  }   
  if(a === b){
    false
  }   
  if(a === 0 && b === 1){
    true
  };  
  if(a === 0 && b === 0){
    false
  } 

  if(a === 0 || b === 0){
    true
  };  
  if(b === c){
    false
  }      
  if(a < b){
    true
  }       
  if(a >= b){
    false
  };     
   
  if(b == c){
    false
  };  
  if(a !== b){
    true
  };   
  if(a === 0 && (b === 1 || b === 2)){
    true
  } ;

 if (a === 0 && true){
    true
 };




//   Ex2 "Ecrivez une fonction qui prend 3 paramètres (mots).

//   Concaténez les trois variables et vérifiez si sa taille est 
//   suppérieure à 100 alors affichez ""C'est une grande phrase"" 
//   sinon affichez ""C'est une petite phrase
function verifieLaTaille(mot1, mot2, mot3) {
    let phrase = mot1 + mot2 + mot3;
    if (phrase.length > 100) {
      return "C'est une grande phrase";
    } else {
      return "C'est une petite phrase";
    }
  }index