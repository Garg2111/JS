// singleton(constructor se bnega object toh singleton bnega)
// Object.create

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name:"Ansh",
    "full name": "Ansh Garg",
   [ mySym]: "mykey1",
    age: 22,
    location: "Sunam",
    email: "ansh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email="ansh@gmail.com"
// console.log(JsUser.email);

// Object.freeze(JsUser)
// JsUser.email="ansh@hello.com"
// console.log(JsUser.email);


JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
    


