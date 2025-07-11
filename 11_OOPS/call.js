function setUsername(username){
    this.username = username
    console.log("Called");
    
}

function Createuser(username,email,password){
    setUsername.call(this,username)
    this.email = email;
    this.password = password
}

const me = new Createuser("Ansh","ansh@google.com","123")
console.log(me);
