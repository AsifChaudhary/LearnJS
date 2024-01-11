// console.log(array1.length)
// console.log(array1);


// const myarr2=new Array(1,2,3);
// console.log(myarr2,"KKKKKKKKK")


// const newarr = []
// newarr.push("Hello","world")
// console.log(newarr);
// console.log(newarr.length);
// newarr.length = 6

// console.log(newarr.length);

// newarr[4]="Bye"
// console.log(newarr);

// for (let i in newarr){
//     console.log(newarr[i]);
// }

// Array methods

const array1 =['Asif','chaudhary','maddy']
// console.log(array1)

array1.push('Khan')
console.log(array1)
// array1.pop()

// array1.unshift(9)   // insert element at first index

// console.log(array1)

// array1.shift()   // remove first element
// console.log(array1.includes('Asif'))
// console.log(array1.indexOf('Asif'))

// const newarr = array1.join().split(',')
// console.log(newarr,typeof newarr,"JJJJ",newarr[0])

// Slice is use for slicing

const myn1=array1.slice(0,2)
console.log(myn1);
console.log(array1)


// Splice is use for cut element in new array

const myn2= array1.splice(1,3)
console.log(myn2)
console.log(array1)

// Spread operator is use for concate 2 array 


const arr1=[1,2,3,4]
const arr2=[5,6,7]
const final = arr1.concat(arr2)
console.log(final)


const spread_final = [...arr1,...arr2]  // spread denoted by [...arrayname]
console.log(spread_final);


//flat\


const an_array =[1,2,3,[4,3,2,56],[3,[3,[4,4,9]]]]

const real_an_array3 = an_array.flat(Infinity)

console.log(real_an_array3);    // [ 1,  2, 3, 4, 3,2, 56, 3, 3, 4,4,9]


console.log(Array.isArray("Hitesh"))  // check it is array or not
console.log(Array.from("Hitesh"))     // convert in array
console.log(Array.isArray(an_array))  // check it is array or not


let score1=100
let score2=200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // return a new array from all elements

