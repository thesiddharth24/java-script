const descriptor =Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(descriptor);
// //o/p
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

//apni bhi value ham kuch hardcode kara skte hai


const chai = {
    name:"ginger chai",
    price:250,
    isAvailabe:true 
}

// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    //writable:false,
    enumerable:false
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    
    if(typeof value !== 'function'){
       console.log(`${key}:${value}`);
    }
    
    
}

