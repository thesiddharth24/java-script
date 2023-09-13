const user ={
    username:"siddharth",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
        console.log("got user details from the network ");
       // console.log(this);//it will return current context 
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());

// const promiseOne = new Promise()//new is to create new execution context 


function User(username,loginCount,signedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.signedIn=signedIn;

    return this;
}

const userOne =new User("sidd",12,true)
const userTwo =new User("XX",13,false)

// console.log(userTwo);
// console.log(userOne);

console.log(userOne.constructor);