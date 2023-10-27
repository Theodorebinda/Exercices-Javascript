// Exercices sur les objects
// Ex1 Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// var étudiant = {
//     nom: "David Rayy",
//     classe: "VI",
//     numéroDeRole: 12
//   };
//   console.log("Objet avant suppression :", étudiant);
//   delete étudiant["numéro de rôle"];
//   delete étudiant["nom"];
//   console.log("Objet après suppression :", étudiant);
   


//   const jeremieMengi = {
//     name: "Theodore",
//     age: 25,
//     height: "169 cm",
//     hairColor: "black",
//     eyeColor: "green",
//     colorSkin : "black"
//   };
  
//   console.log("Complete object:", attributes);
  
//   attributes.gender = "female";
  
//   console.log("Object with additional property:", attributes);
  
//   delete attributes.eyeColor;
  
//   console.log("Object after deleting attribute:", attributes);
  const shoe_1 = {}
  shoe_1.brand = "jordan" ;
  shoe_1.color = "Blue" ;
  shoe_1.size = 42 ;
  shoe_1.price = 200 ;

  const shoe_2 = {}
  shoe_2.brand = "Levi's" ;
  shoe_2.color = "red's" ;
  shoe_2.size = 28 ;
  shoe_2.Price = 150 ;

  
  const  shirt_1 = {
    brand :"channel" ,
    color :"black" ,
    size : 28 ,
    price : 50 ,
    quantity : 3
  }
  const shirt_2 = {
    brand :"Dior" ,
    color :"green" ,
    size :30 ,
    price : 70 ,
    quantity :5
  }
  
  const  warehouse = {};
  warehouse.shoe_1 = shoe_1;
  warehouse.shoe_2 = shoe_2;
  warehouse.shirt_1 = shirt_1;
  warehouse.shirt_2 = shirt_2;
  console.log(warehouse.shirt_2.price);
  
  
  
//     shoe_1 :
//     shoe_2 ,
//     shirt_1 ,
//     shirt_2
//   }
//   console.log( warehouse(shoe_2.price)) ;