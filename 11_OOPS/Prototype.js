// let myName = "Ansh    "
// console.log(myName.truelength);


let myHeros = ["Thor","Spiderman"]
let heroPower = {
    Thor:"hammer",
    Spiderman:"sling",

    getspiderpower: function(){
        console.log(`Spidy power is${this.Spiderman}`);
    }
}
        
Object.prototype.ansh = function(){
    console.log(`Ansh is present in all objects`);
}

Array.prototype.heyAnsh = function(){
    console.log(`Ansh says hello`);
    
}

// heroPower.ansh();
// myHeros.ansh();

myHeros.heyAnsh();
// heroPower.heyAnsh();


// INHERITANCE

const user = {
    name:"ansh",
    email:"ansh@google.com"
}

const teacher = {
    makeVideo:true
}
const TeachingSupport = {
    isAvailable:false
}
const TASupport = {
    makeAssignment:'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}
teacher.__proto__ = user;


//Modern Syntax

Object.setPrototypeOf(TeachingSupport,teacher)


let anotherUsername = "hello    "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}
anotherUsername.trueLength()

"Ansh".trueLength()
"iceTea".trueLength()



    
