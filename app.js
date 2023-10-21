//jshint esversion:6
import mongoose from "mongoose";



await mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB",{useNewUrlParser:true})
.then(()=>{
    console.log("connected to mongoDb");
})


const fruitSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name missing"],
    },
    rating:{
        type:Number,
        min:1,
        max:10,
    },
    review:String
})

const Fruit=mongoose.model("Fruit",fruitSchema)

const fruit=new Fruit({
  name:"Peach",
    rating:9,
    review:"Peaches solid as a fruit"
})


const personSchema=new mongoose.Schema({
name:String,
age:Number,
favouriteFruit:fruitSchema

})
const pineapple=new Fruit ({
    name:"pineapple",
    score:5,
    review:"great fruit"
})

// pineapple.save()
const Person=mongoose.model("Person",personSchema)

const person=new Person({
name:"Amy",
age:12,
favouriteFruit:pineapple

})
const jackfruit=new Fruit({
    name:"jackfruit",
    rating:7,
    review:"delicious"
})

jackfruit.save()

Person.updateOne({name:"John"},{favouriteFruit:jackfruit})
.then(function(){
    console.log("updated");
})
.catch(function(err){
    console.log(err);
})



// fruit.save()
person.save();

// const kiwi=new Fruit({
//     name:"kiwi",
//     score:3,
//     review:"nice"
// })
// const orange=new Fruit({
//     name:"orange",
//     score:1,
//     review:"sour"
// })
// const mango=new Fruit({
//     name:"mango",
//     score:7,
//     review:"delicious"
// })




// Fruit.insertMany([kiwi,orange,mango])
// .then(function(){
//     console.log("succesfully added to DB");
// })
// .catch(function(err){
//     console.log(err);
// })
     

// Fruit.find({})
// .then(function(fruits){
//     mongoose.connection.close()
//     fruits.forEach((fruit)=>{
//         console.log(fruit.name);
//     })
   
// }).catch(
//     function(err){
//    console.log(err);
//     }
// )


// Fruit.updateOne({_id:"6531c4c87aa16cbd0e6896ec"},{name:"Peach"})
// .then(function(){
//     console.log("updated succesfully");
// })
// .catch(function(err){
//     console.log(err);
// })


// Fruit.deleteOne({name:"Peach"})
// .then(function(){
//     console.log("deleted");
// })
// .catch(function(err){
//     console.log(err);
// })

// Person.deleteMany({name:"John"})
// .then(function(){
//         console.log("deleted");
//  })
// .catch(function(err){
//         console.log(err);
//     })
    