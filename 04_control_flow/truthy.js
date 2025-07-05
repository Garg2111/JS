const userEmail = []
// if(userEmail)
// {
//     console.log("Got user email");
    
// } else{
//     console.log("dont have user email");
// }

//falsy values - false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy values - true, "0",'false'," ",[],{},function(){}


// if(userEmail.length===0)
// {
//     console.log("Array is empty");
    
// }

// const emptyObj = {}
// if(Object.keys(Object).length === 0)
// {
//     console.log("Object is empty");
// }


// false == 0 =>true
// false == '' => true
// 0 == '' =>true



// Nullish Coalescing Operator(??): null and undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
// console.log(val1);


// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice>=100 ? console.log("Bahut mhengi hai") : console.log("etni mhengi hai");




