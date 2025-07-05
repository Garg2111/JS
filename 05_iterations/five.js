const coding = ["js","ruby","python","java","cpp"]

coding.forEach(  function (item){
    // console.log(item);
})
    

coding.forEach((val) => {
    // console.log(val);
})
    


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)    


coding.forEach((item,index,arr) => {
    // console.log(item,index,arr)
})


const myCoding = [
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})
    