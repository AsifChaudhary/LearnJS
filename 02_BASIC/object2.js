// const obj = {

//     fullname:{
//         username:{
//             firstname:"asif",
//             lastname:"chaudhary"
//         }
//     },
//     age:24,
// }

// console.log(obj)

// console.log("hiiiiiiiiiiiii")
// console.log(obj.fullname.username);


const obj1 ={'a':1,b:2,c:3}
const obj2 ={'d':1,e:2,f:3}
const obj3 ={'g':1,h:2,i:3}


// const obj4 = Object.assign({},obj1,obj2,obj3)   // asign is used for merge objects and return a single obj

const obj4 = {...obj1,...obj2,...obj3} // we can use spread also for merge
console.log(obj4);