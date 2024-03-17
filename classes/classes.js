class User{
    constructor(name,age){
        this.name = name;
        console.log("Hiiiii");
        this.age = age;
    }

    encry(){
        return this.name;
    }

    getage(){
        return this.age
    }
}

const user = new User('asif',25);
console.log(user.encry());
console.log(user.getage());


// behind the scene

// function user(name,age){
//     this.name = name;
//     this.age = age;
// }
// // function user1(name,age){
// //     this.name = name;
// //     this.age = age;
// // }

// user.prototype.encry = function(){
//     return this.name;
// }

// user.prototype.getage = function(){
//     return this.age
// }

// const user1 = new user('Asif',25);
// console.log(user1.encry())