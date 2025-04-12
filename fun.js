//block scope and global scope


// function one(){
//     let username ="Arun"

//     function two(){
//         let email ="Arun@gmail.com"
//         console.log(email)
//     }
//     console.log(username)

// }
// console.log(one())

//this keyword used in current context ko refer karta hai

// const user={
//     username:"Arun",
//     price:999,
//     msg: function(){
//         console.log(`${this.username},Welcome to website`)
//         console.log(this)
//     }
//  }
// user.msg()
// user.username="karan"
// user.msg()
// console.log(this)

// function chai(){
//     console.log(this)
// }
// chai()

// const chai=function(){
//     let username="Arun kumar"
//     console.log(this.username)
// }
// chai()

// const chai=()=>{
//     let price=20
// console.log(this.price)
// }
// chai()

//basic arrow function
// const msg=()=>{
//     console.log("Welcome Arun")
// }
// msg()

//implicit arrow function
// const sum=(num1,num2)=>(num1+num2)
// console.log(sum(3,5))

// const msg=()=>({username:"karan singh"})
// console.log(msg())

//(IIFE) Immidiately  invoked function expression
// (function msg(){
//     console.log("hello Arun")
// })();


// ((name)=>{
//     console.log(`Welcome ${name}`)
// })("karan singh")