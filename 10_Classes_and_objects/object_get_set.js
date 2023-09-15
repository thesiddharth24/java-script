const user ={
    _email:'h@hc.com',
    _password:'abc',

    get email(){
       return this._email.toLowerCase();
    },

    set email(value){
        this._email=value;
    }
}
//we can use factory fxn
const tea = Object.create(user);
tea.email

//_. shows private property we are defining