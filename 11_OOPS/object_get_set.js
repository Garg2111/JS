const User = {
    _email:'hello@google.com',
    _password:'abcdefg',

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    },
    get password(){
        return this._password.toUpperCase();
    },
    set password(value){
        this._password = value;
    }
}

const hi = Object.create(User)
console.log(hi.email);
