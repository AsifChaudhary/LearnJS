const buttons = document.querySelectorAll('.button');
// console.log(buttons);
var body = document.querySelector('body');
console.log(body);

// buttons.forEach(button =>{
//     console.log(button);
// })

buttons.forEach(function(button){

    // console.log(button);

    button.addEventListener('click', function(ev){
        console.log(ev.target.id)
        body.style.backgroundColor = ev.target.id;
        
       
    })
})