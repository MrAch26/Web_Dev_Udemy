// jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true, "No name specified!"]
  },
  rating:{
    type: Number,
    min:1,
    max:10
  },
  review:String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit ({

  rating:10,
  review:"peach are great !"
});

const peopleSchema = new mongoose.Schema({
  name:String,
  age:Number,
  favouriteFruit:fruitSchema
});

const Person = mongoose.model("Person",peopleSchema);


const pineapple = new Fruit({
  name:"Pineapple",
  rating:5,
  review:"Mniam"
});

// pineapple.save();

const person = new Person({
  name:"Amy",
  age:18,
  favouriteFruit:pineapple
});
// person.save();

// const kiwi = new Fruit({
//   name:"Kiwi",
//   rating:5,
//   review:"kawaaaaa"
// });
// const banana = new Fruit ({
//   name:"Banana",
//   rating:9,
//   review:"delicious"
// });
//
// // Fruit.insertMany([kiwi,banana], function(err){
// //   if(err){
// //     console.log(err);
// //   } else {
// //     console.log("SUCCESS");
// //   }
// // });

// FRUIT EST AVEC UN "S" --> fruits mais pas comme le model
Fruit.find(function(err,fruits){
  if (err){
    console.log(err);
  } else {
    fruits.forEach(function(fruit) {
    console.log(fruit.name);
    });
  }
});
const orange = new Fruit({
  name:"Orange",
  rating:8,
  review:"JaffaOranges are dope!"
});

// orange.save();
//


// Person.updateOne({name:"John"}, {favouriteFruit:orange}, (err)=> {
//   if (err){
//     console.log(err);
//   } else {
//     console.log("SUCCESS");
//   }
// });

// Fruit.deleteOne({name:"Peach"},function(err){
//   if (err){
//       console.log(err);
//     } else {
//       console.log("SUCCESS");
//     }
// });
//
// Person.deleteMany({name:"John"},(err)=>{
//   if (err){
//     console.log(err);
//   } else {
//     console.log("bravoooo");
//   }
// });
