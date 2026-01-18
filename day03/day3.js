//type conversion = change the data type of a value to another data type
//string to number
/*let score = "100";
console.log(typeof score); //string

//convert string to number
score = Number(score);
console.log(typeof score); //number

//string to float 
let score2 = "100.50";
console.log(typeof score2); //string

//convert string to float
score2 = parseFloat(score2);
console.log(typeof score2); //number

//number to string
let scoree = 50;
console.log(typeof scoree);*/ //number
//the difference between alert and prompt is that alert only shows a message while prompt asks for user input 
/*let age = window.prompt("how old are you ? ");
age =  Number(age); // we use Number to convert string to number
age += 1;//
console.log(`next year you will be ${age} years old`);
console.log(typeof age);*/


// const = a variable that can't be changed
const PI = 3.14159;
let radius;
let circumference;


document.getElementById('sub').onclick = function () {
    radius = document.getElementById('txt').value;
    radius = Number(radius);
    circumference = 2* PI * radius;
    document.getElementById('hhh').textContent = circumference + " cm"; 
}


