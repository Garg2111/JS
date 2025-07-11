// // ES6

// class User{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
         
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const me = new User("Ansh","Ansh@google.com","123")
// console.log(me.encryptPassword());
// console.log(me.changeUsername()); 


// Behind the scene

function User(username,email,password){
    this.username = username
        this.email = email
        this.password = password
}
User.prototype.encryptPassword
= function(){
    return `${this.password}abc`
}
User.prototype.changeUsername
= function(){
    return `${this.username.toUpperCase()}`
}

const you = new User("yoyo","yoyo@gmail.com","234")

console.log(you.encryptPassword());
console.log(you.changeUsername()); 
