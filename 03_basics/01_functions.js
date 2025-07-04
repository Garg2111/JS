// console.log("A");
// console.log("N");
// console.log("S");
// console.log("H");


function sayMyName(){
console.log("A");
console.log("N");
console.log("S");
console.log("H");
}

// sayMyName()

// function add(number1,number2){
//     console.log(number1+number2)
// }
function add(number1,number2){
//   let result = number1 + number2
//   return result
    return number1 + number2

}
const a = add(3,5)
// console.log(a);


function loginUserMessage(username="reshmi"){
    if(username === undefined){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage("ansh"))
// console.log(loginUserMessage())


function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    name: "ansh",
    price: 200
}
function handleObject(anyobject){
     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam",
    price:399
})



const myNewArray = [200,400,600,100]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,900,600,100]));

