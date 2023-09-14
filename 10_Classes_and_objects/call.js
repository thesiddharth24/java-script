function setUsername(username){
    //complex DB calls 
    this.username=username;
}


function createUser(username,email,password){
    //setUsername(username);//ye abhi call nahi hua hai 
    setUsername.call(this,username);//.call se refrence hold kark rakega 
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai","chai@gmail.com");

console.log(chai);