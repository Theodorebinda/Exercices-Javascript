// Exercices sur les objects
// Ex1 Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// const étudiant = {
//     nom: "David Rayy",
//     classe: "VI",
//     numéroDeRole: 12
//   };
//   console.log("Objet avant suppression :", étudiant);
//   delete étudiant["numéro de rôle"];
//   delete étudiant["nom"];
//   console.log("Objet après suppression :", étudiant);
   
// Ex2 Create an object which describes some of your physical or mental attributes.
// Add another property to the object. Show the complete object again.
// Delete the least important attribute. Show the complete object again.

//   const Theodore = {
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

// Ex 4 Create two objects shoe_1 and shoe_2 which characterize shoes. 
// Use the literal notation.
// Create two other objects shirt_1 and shirt_2 which characterize shirts. 
// First, create empty objects. Then, add attributes to the objects.
// Create an object warehouse and add all 4 objects to it.
// Show the price of the 4.-th product out of the warehouse object.

  // const shoe_1 = {}
  // shoe_1.brand = "jordan" ;
  // shoe_1.color = "Blue" ;
  // shoe_1.size = 42 ;
  // shoe_1.price = 200 ;

  // const shoe_2 = {}
  // shoe_2.brand = "Levi's" ;
  // shoe_2.color = "red's" ;
  // shoe_2.size = 28 ;
  // shoe_2.Price = 150 ;

  // const  shirt_1 = {
  //   brand :"channel" ,
  //   color :"black" ,
  //   size : 28 ,
  //   price : 50 ,
  //   quantity : 3
  // }
  // const shirt_2 = {
  //   brand :"Dior" ,
  //   color :"green" ,
  //   size :30 ,
  //   price : 70 ,
  //   quantity :5
  // }
  
  // const  warehouse = {};
  // warehouse.shoe_1 = shoe_1;
  // warehouse.shoe_2 = shoe_2;
  // warehouse.shirt_1 = shirt_1;
  // warehouse.shirt_2 = shirt_2;
  // console.log(warehouse.shirt_2.price);
  
//     shoe_1 :
//     shoe_2 ,
//     shirt_1 ,
//     shirt_2
//   console.log( warehouse(shoe_2.price));

// Ex5 The Cat
// Write yourself a virtual cat - animals with a CLI are so much nicer than ones with fur.
// Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness
// Next, write methods that increase and decrease those properties (there's an example in the slides). Call them something that actually represents what would increase or decrease these things, like "feed", "sleep", or "pet".
// Last, write a method that prints out the cat's status in each area.
// Bonus: Make the functions take arguments that increase or decrease arbitrary amounts
// Bonus: Make the functions as arbitrary as cats are - sometimes make it so the cat doesn't want to be petted.

// const cat = {
//   tiredness : 9,
//   hunger : 5,
//   lonliness : 0,
//   happiness : 0,

//   sleep : function(){
//       this.tiredness -= 1
//   },
//   eat : function(){
//       this.hunger -= 1
//   },
//   pet : function(){
//       this.lonliness += 1
//   },
//   handelHappiness : function(){
//       let counter = 0;
//       if(this.tiredness === 0){
//           counter++;
//       };
//       if(this.hunger === 0){
//           counter++;
//       };
//       if(this.lonliness > 0 ){
//           counter++;
//       };
//       this.happiness += counter

//   }
// };
// cat.sleep();
// cat.sleep();
// cat.sleep();
// cat.sleep();
// cat.sleep();
// cat.sleep();
// cat.sleep();
// cat.sleep();

// cat.eat();
// cat.eat();
// cat.eat();

// cat.eat();
// cat.eat();
// cat.pet();
// cat.pet();
// cat.pet();
// cat.handelHappiness();
// console.log(cat)


// Ex6 The Recipe Card 
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). On separate lines (one console.log statement for each), log the recipe information so it looks like: Mole Serves: 2 Ingredients: cinnamon cumin cocoa
// Création de l'objet recette
// let recette = {
//   titre: "Mole",
//   portions: 2,
//   ingredients: ["cannelle", "cumin", "cacao"]
// };

// // Affichage des informations de la recette
// console.log(recette.titre);
// console.log("Portions : " + recette.portions);
// console.log("Ingrédients : " + recette.ingredients.join(" "));
