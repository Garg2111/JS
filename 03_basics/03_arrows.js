const user ={
    username: "ansh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}
        
// user.welcomeMessage()
// user.username = "yoyo"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "ansh"
//     console.log(this.username);
    
// }
// chai()


// const chai = function(){
//     let username = "ansh"
//     console.log(this.username);
// }

const chai = () => {
    let username = "ansh"
    console.log(this);
}
// chai()


// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username:"ansh"})
console.log(addTwo(2,3));

// const myArray = [3,6,7,5,4]
// myArray.forEach()

