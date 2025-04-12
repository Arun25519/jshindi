"use strict";//treat all js code new version

//conversion
// let age=33;
// let bolean=1;
// let bolean1=Boolean(bolean);
// console.log(typeof bolean1);
// let value=String(age);
//number => string

// console.log(typeof value);
// let age=1
// let value=Boolean(age);
// console.log( typeof  value)
// let marks="123abc"//Nan =>not a number
// let value=Number(marks)
// console.log(value)
// console.log(typeof value)

//operation
// const heroe=['iron man','doga','sakthi man']
// console.log(typeof heroe);

// let myobj={
//     name:"karan singh",
//     age:20,
//     email:"karan@gmail.com"
    
// }
// console.table([myobj])
// console.log(typeof myobj);

// let name=function hello(){
//     console.log('Hello world');

// }
// console.log( name())
//==========================================================
//stack(primitive)/copy milti hai data ki   heap(non-primitive)/refrence orginal value ka milta hai

//example of memory heap ishme orginal value ka seede refrence milta hai
let userone={
    name:"karan singh",
    email:'karan@gmail.com'
}
let usertwo =userone;
usertwo.name="ARUN KUMAR"
console.log(userone)
console.log(usertwo)