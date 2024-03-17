
// // create promise with variable
// const promiseOne = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         console.log("Promise One complete")
//         resolve()
//     },2000)
// });
// // console.log(promiseOne)

// promiseOne.then(function(){

//     console.log("Promise consumed");
// })


// // creatw promise without variable
// new Promise((resolve,reject)=>{

//     setTimeout(function(){
//         console.log("Async task 2.");
//         resolve()
//     },2000)
// }).then(function(){
//     console.log('consumed 2');})

// //create promise without variable and return a object in resolve
// new Promise((resolve,reject)=>{

// setTimeout(function(){

//     console.log("Async task 3.");
//      resolve({username:"asif",age:24})
// },2000)
// }).then(function(data){

// console.log(data,"username")
// })


// // create promise without variable and return object and reject promise

// new Promise((resolve,reject)=>{

//     setTimeout(function(){

//         console.log("Async task 4.");

//         const status = false;
//         if(!status){
//          resolve({username:"jafar",age:24})}
//          else{
//             reject('Erro: something went wrong')
//          }
//     },2000)
//     }).then(function(data){

//     console.log(data.username,"username")
//     return data.username
//     }).then(function(pp){

//         console.log(pp)
//         })
//     .catch((error)=>{
//         console.log(error);
//     })


// promise with async and await


//   const promiseFIVE = new Promise((resolve,reject)=>{

//     setTimeout(function(){

//         console.log("Async task 5.");

//         const status = false;
//         if(!status){
//          resolve({username:"jafar",age:24})}
//          else{
//             reject('Error: something went wrong')
//          }
//     },1000)
//     });

// console.log(promiseFIVE);
//     async function CONSUMEDfIVE(){
//         try {
//         const data = await promiseFIVE;
//         console.log(data);


//         } catch (error) {

//             console.log(error);
//         }


//     }
//     CONSUMEDfIVE()


// async function CONSUMED() {


//     try {

//         const response = await fetch('https://randomuser.me/api/');
//         const data = await response.json()
//         // console.log(response);
//         console.log(data.info);

//     } catch (error) {

//         console.log(error);

//     }

// }

// CONSUMED()


function bye(){
    setTimeout(() => {
        return 'bye'
    }, 2000);
}

async function happy(){
    console.log("Happy")
    const aa= new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("Async task 6.");
            resolve('Asif')
        },2000)
    }).then((data)=>{
        console.log(data);
    })

    // console.log("kkkkkk");
    // console.log(aa);
    // console.log('Asif');
}




happy()

