// const tinderUser = new Object()
const tinderUser={}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullname:{
            firstname:"ansh",
            lastname:"garg"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"b",4:"c"}
const obj4 = {5:"c",6:"d"}

// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);


const users = [
    {
        id: 1,
        email:"ansh@google.com"
    },
    {
        id: 1,
        email:"ansh@google.com"
    },
    {
        id: 1,
        email:"ansh@google.com"
    },
]

// console.log(users[1].email)
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));



const course = {
    coursename:"JS",
    price:"Free",
    courseInst:"Ansh"
}

// console.log(course.courseInst);

const {courseInst: instructor} = course
// console.log(courseInst);
console.log(instructor);


// {
//     "name":"ansh",
//     "coursename": "Js",
//     "price":"free"
// }


[
    {},
    {},
    {}
]

