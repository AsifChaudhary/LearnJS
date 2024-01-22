arr=['asif','jafar','ritesh','danish']


// arr.forEach(function(val){
//     console.log(val);
// });

// arr.forEach(ele=>{

//     console.log(ele);
// })


// const abc = ()=>{
//     console.log('abc');
// }

// abc();


// arr.forEach((ele,inde)=>{
//     console.log(ele,inde);
// });



const mynum =[1,2,3,6,5,4,7,5,1]

// const aa = mynum.filter((num)=>{
//     return num>4
// })

// console.log(aa)


// const newNum= []
// mynum.map((ele)=>{
//     (ele > 5)?newNum.push(ele):console.log("Byyeeee");

// })
// console.log(newNum);

const newNum = mynum.map((num)=> num*10)
.map((num)=>num+1)
.filter((num)=>num>40)


console.log(newNum);