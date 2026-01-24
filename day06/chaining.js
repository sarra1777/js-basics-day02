// method chaining = calling one method after another in one continuous line of code
// method chaining is used to make the code more readable and maintainable
// -----no method chaining-----
let username = window.prompt("Enter your username");
username = username.trim();//trim is used to remove the spaces
let letter = username.charAt(0);//'A'
letter = letter.toUpperCase();
let extraChars = username.slice(1);//'arr'we use slice to extract a part of a string
extraChars = extraChars.toLowerCase();
username = letter + extraChars;//'A'+'arr'
console.log(username);
// -----method chaining-----
let user = window.prompt("Enter your username");
user = user.trim().charAt(0).toUpperCase() + user.trim().slice(1).toLowerCase();
console.log(user);

// logical operators == and = &&  or = || not = ! 




