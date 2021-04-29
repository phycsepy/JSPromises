// let p = new Promise((resolve,reject) =>{
//     let a = 11;
//     if(a == 2){
//         resolve("correct")
//     }
//     else{
//         reject('failed')
//     }
   
// }) 


// p.then((message)=>{
//     console.log(`when it  is ${message} it will be in then`)
// }).catch((message)=>{
//     console.log(`when it  is ${message} it will be in catch `)
// })


// It is best to replace callbacks 

// const userLeft = true;
// const userWatchingOtherStuff = true;

// const watchingT = () =>{
//     return new Promise((reslove,reject)=>{
//         if(userLeft||userWatchingOtherStuff){
//             reject("Not watching ")
//         }
//         else{
//             reslove("watching")
//         }
//     })
// }

// watchingT().then((message)=>{
//     console.log(`Success :${message}`)
// }).catch((message)=>{
//     console.log(`failed ${message}`)
// })


const video1 = new Promise((resolve,reject)=>{
    resolve('video 1 played')
})
const video2 = new Promise((resolve,reject)=>{
    resolve('video 2 played')
})
const video3 = new Promise((resolve,reject)=>{
    resolve('video 3 played')
})


// Promise.all([
//     video1,
//     video2,
//     video3
// ]).then((message)=>{
//     console.log(message)
// })

Promise.race([
    video1,
    video2,
    video3
]).then((message)=>{
    console.log(message)
})






