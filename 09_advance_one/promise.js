// const promiseOne = new Promise(function(resolve,reject){
//     //do an async task
//     //db calls,cryptography,,network calls

//     setTimeout(function(){
//         console.log('Async task is completed ');
//         resolve();
//     },1000)
// });

// promiseOne.then(function(){
//     console.log("Promide consumed");
// });


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task is completed ');
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("async 2  consumed");
// });

// const promise3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("hii");
//         //resolve always return anythinmg like object ,string etc
//     },1000)
// })
// promise3.then(function(usr){
//     console.log( usr);
// });

/*
const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let err = false
        if(!err){
            resolve({username:"sidd",password:"123"});
        }else{
            reject(`ERROR: Something went wrong`)
        }
    },1000)
})


promise4
.then((usr) =>{
    console.log(usr);
    return usr.username;
})
.then((username) => {
    console.log(username);
})
.catch((err) =>{
    console.log(err);
})
.finally(()=>{
    console.log("finally promise is either resolved or rejected ")
})
*/

const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let err = false
        if(!err){
            resolve({username:"java script",password:"123"});
        }else{
            reject(`ERROR: JS went wrong`)
        }
    },1000)
})
//promise5 ek object hai 
async function consumePromise5(){
    const response = await promise5
    console.log()
}


as