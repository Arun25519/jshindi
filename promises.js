// const promiseone=new Promise(function(resolve,reject){
    //do an async task
    //db calls ,network
//     setTimeout(function(){
//         resolve()
//         console.log("async task complete");

const { response } = require("express");

        
//     })
// })

// promiseone.then(function(){
//     console.log("promise consume")
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task two")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("async 2 resolve")
// })


// const promisThree=new Promise(function(resolve,reject){
     
//      setTimeout(function(){
//          resolve({name:"Arun kumar",email:"arun@gmail.com"})
//      },5000)
// })
// promisThree.then(function(user){
//   console.log(user)
// })

// const promisFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let err=false
//         if(!err){
//              resolve({username:"Hites",password:1234
//             })
//         }else{
//             reject("Error : somthing went wrong")
//         }
//     })
// })

// promisFour.then(function(user){
//     console.log(user)
//     return user.password
// }).then((username)=>{
//     console.log(username)
// }).catch(function(error){
//     console.log(error)
// })


// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let err=false
//         if(!err){
//             resolve({name:"Arun kumar",age:18})
//         }else{
//             reject("Error : something went wrong")
//         }
//     },2000)
// })


// promiseFive
// .then((user)=>{
//     console.log(user)
//     return user.age
// })
// .then((age)=>{
//     console.log(age)
// })
// .catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("promise resolve and rejected")
// })

// const promisSix=new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         let err=false
//         if(!err){
//             resolve({lang:"js",pwd:9027})
//         }else{
//             reject("somtehing went wrong")
//         }
//     },2000)
// })

// async function promisconsumesix(params) {
//     try{
//         const response=await promisSix
//     console.log(response)
//     }catch(err){
//         console.log(err)
//     }
    
// // }

// async function getAllUser(params) {
//    try {
//     const response=await fetch("https://jsonplaceholder.typicode.com/users/")
//   console.log(response)
//        const data= await response.json()   
//        console.log(data)
    
//    } catch (err) {
//     console.log("error something",err)
//    }
// }
// getAllUser()


// fetch('https://jsonplaceholder.typicode.com/users/')
// .then((response)=>{
//     return response.json()

// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })