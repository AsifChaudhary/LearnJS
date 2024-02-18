const forrrm = document.querySelector('form')
// console.log(forrrm);

forrrm.addEventListener('submit', function(ev){
    ev.preventDefault();
    console.log(ev);

// console.log(ev.target);
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#result');


console.log(height, weight);
const bmi = (weight/((height*height)/10000)).toFixed(2);
console.log(bmi);
let category; 
if (bmi <18.5) {
    category = 'Underweight';
} else if (bmi <=24.9) {
    category = 'Normal Weight'
} else if (bmi<=29.9) {
    category = "Overweight";
}else{
    category="Obese"
}

result.innerHTML = `Your BMI is ${bmi} and your category is ${category}`;


})