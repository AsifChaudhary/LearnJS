class User{
    constructor(name){
        this.name = name;
    }

    logme(){
        console.log(`Username:${this.name}`);
    }
    static createId(){
        return '123'
    }
}


const asif = new User('ASif')
// console.log(asif.createId())


class Teacher extends User{
    constructor(name,email){
        super(name);
        this.email = email;
    }
}

const teacher = new Teacher('asif','i@phone.com')


console.log(teacher.logme())
console.log(teacher.createId()) // if you initilise static 