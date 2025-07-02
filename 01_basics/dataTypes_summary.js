// Primitive datatypes(yeh call by value hote hai).

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score=100;
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
// console.log(id);
// console.log(id==anotherId);

const bigNumber=345664839849349234345345n



//JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.


// Reference type(Non-Primitive)
// Arrays, Objects, Functions


const heros=["shaktimaan", "naagraj", "doga"]
console.log(heros);

 let myObj = {
    name:"ansh",
    age:22
}
console.log(myObj);

const myFunction=function(){
    console.log("Hello World");
}
console.log(myFunction);

console.log(typeof myFunction); // function ka return type vaise toh object hi hota hai but terminal pe function likha aata hai!!

console.log(typeof heros);
console.log(typeof myObj);




//++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory and Heap memory.
// Stack memory used in primitive dataTypes and Heap Memory used in non-primitive dataTypes.

let myName="Ansh Garg"
console.log(myName);

let anotherName=myName
anotherName = "helloo"
console.log(anotherName);


let userOne = {
     email:" user@gmail.com",
     upi: "user@ybl"

}
console.log(userOne)

let userTwo = userOne
userTwo.email = "ansh@gmail.com"
console.log(userOne);
console.log(userTwo);






    
