class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(emai){
        this._email = emai
    }

    get password(){
        return `${this._password}ansh`
    }

    set password(value){
        this._password = value
    }
}

const ansh = new User("ansh@google.com","abcdef")
console.log(ansh.password);
console.log(ansh.email);


