// let myName="siddharth"

// console.log(myName.length)


let myName="siddharth     "

//method banao true length ka 
 let myHeros =["thor","spider"];
 
 let heroPower={
    thor:"hammer",
    spider:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spider}:`);
    }
 }

 Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all object `);
 }

//  heroPower.hitesh();
//  myHeros.hitesh();

//ab array ko power do 
Array.prototype.heySidd = function(){
    console.log(`Siddharth is present in all array  `);
}
// myHeros.heySidd();
heroPower.heySidd();

//inheritance

const user ={
    username:"siddharth",
    email:"siddharth@gmail.com"
}

const teacher = {
    makeVideo:true
}

const TeachingSupport ={
    isAvailable:false
}
const TASupport ={
    makeAssignment:"JS Assignment",
    fullTime:true,
    __proto__:TeachingSupport
}

//every object in js has different instance 
//prototypel inheritance 
teacher.__proto__=user;


//mordern index
Object.setPrototypeOf(TeachingSupport,teacher);
