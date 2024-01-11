const sym = Symbol("key1")
 
 const userobj ={

    
    name:'Asif',
    age:24,
    email:"asif@gmail.com",
    [sym]:"Mykey1",
 }

//  console.log(userobj.name)
//  console.log(userobj['age'])
//  console.log(typeof userobj[sym])

//  userobj.name = "maddy"
//  console.log(userobj.name)

//  Object.freeze(userobj)  // freeze is used for restriction when we update value in obj
//  userobj.name = "khan"

 console.log(userobj);

 userobj.greeting = function(){
    console.log("hello i am greeting") }



 console.log(userobj.greeting());

 userobj.greeting2 = function(){
    console.log(`hello i am greeting, ${this.name}`) }

    console.log(userobj.greeting2());

console.log(userobj.hasOwnProperty('agse'))
console.log(userobj.hasOwnProperty('age'))


