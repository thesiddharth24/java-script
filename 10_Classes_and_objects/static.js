class user {
    constructor(username){
        this.username=username
    }


    logMe(){
        console.log(`Username is ${this.username}`);
    }

    //user bante hee user ko ek unque id ban jaye
    static createID(){
        return `123`;
    }
}

const sidd = new user("siddharth");
// console.log(sidd.createID());


class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}


const iphone = new teacher("iphone","I@phone.com");
iphone.logMe();
iphone.createID();


