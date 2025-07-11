// const User = {
//     username : "Ansh",
//     loginCount:8,
//     signedIn:true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`Username:${this.username}`);
//         console.log(this);
//     }
// }
// console.log(User.username);
// console.log(User.getUserDetails());
// console.log(this);
        
        
// const promiseOne = new Promise()
// const date = new Date()

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this;
}

const userOne = new User("ANSH",8,true)
const userTwo = new User("Hello",12,false)
console.log(userOne.constructor);
// console.log(userTwo);

// new keyword use krte hi ek empty object bnta jisko instance bola jata hai.
// Constructor Function call hota hai new keyword ke karann.
//this keyword hai(jo sb arguments hai) woh sb eske andhar inject ho jaate hai.
// hme mil jaate hai function ke andhar 





        

