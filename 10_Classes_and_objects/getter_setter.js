class user{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
  
    //getter
    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email=value;
    }
    get password(){
        return `${this._password}siddharth`;
    }

    //setter
    // set password(value){
    //     this.password=value;//maxium call stack size is exeded 
    // }
    set password(value){
        this._password=value.toUpperCase();
    }

}

const hitesh= new user("sidd@gmail.com","123");
console.log(hitesh.email)