// ternary operator = a shortcut to if{} else{} statements helps to write less code and easier to read
//condition ? true : false
//Exemple
//let age = 20; let message; if (age <= 18) { message = "you are an adult"; } else { message = "you are a minor"; }
//this is a shortcut in one line
let age = 20;
let messagee = age <= 18 ? "you are an adult" : "you are a minor";
console.log(messagee);

let time = 10;
let greeting = time < 12 ? "Good morning" : "Good afternoon";
console.log(greeting);

let student = true;
let message = student ? "you are a student" : "you are not a student";
console.log(message);

let amount = 125 ;
let discount = amount >= 100 ? 10 : 0;
console.log(`your total is $${amount - amount * (discount / 100)} and your discount is $${discount}`);

