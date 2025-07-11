class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
    
    static createId(){
        return `123`
    }
}

const ansh = new User("Ansh")
// console.log(ansh.createId())
        

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone","Iphone@apple.com")
// iphone.logMe()
console.log(iphone.createId());

