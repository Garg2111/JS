let myDate= new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate);

// let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-12-2025")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getDate());
// '${newDate.getDate()} and the time'

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}))
    