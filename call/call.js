function setUsername(username) {
    this.username = username;
console.log('called set');
}

function createuser(username,email) {
setUsername.call(this,username)
this.email = email;

}

const user = new createuser('asif','abc@abc.com');
console.log(user);
