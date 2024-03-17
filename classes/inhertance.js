class User{
    constructor(name){
        this.name = name;
    }

    logme(){
        console.log(this.name + " is logging in.");
    }
}


class Teacher extends User{
    constructor(name,age){
        super(name); // use for solce call issue
        this.age = age;
    }

    addcourse(){
        console.log(`new course added by ${this.name}`);
    }
}

const teacher = new Teacher('asif',25);

const chai = new User('chai')
// teacher.addcourse();
teacher.logme();
chai.logme();

console.log(chai === teacher);

console.log(teacher instanceof User);
console.log(chai instanceof User);