//arithmetic operators + - * / %
let students = 30 ;
students += 1;
console.log(students);//31
students *= 2;
console.log(students);//62
let extrastudents = students % 3;
console.log(extrastudents); //2
students--;//students = students -1 decrease by 1
students++;//students = students + 1 increase by 1
//operator precedence ( ) exposant multiplication/division modulus addition /substraction

let result = 1 + 2 * 3 + 16;
console.log(result);//23

let result2 = 6 / 2 ** 7;
console.log(result2); //0.046875

let result3 = (4 + 6) * 2 ** 3;
console.log(result3); //80 */

// how to get input from user
// easy way is to use prompt function or a proffetional way is to use a html textboxlet username = window.prompt('enter your name : ');// prompt function to get input from user

let username = window.prompt('enter your name : ');// prompt function to get input from user
console.log('hello' + ' ' + username + ' !');
let username;
document.getElementById("mySubmit").onclick = function() { //when the button is clicked the function will be executed 
// and we use onclick to detect the click event 
// and we put function to define what will happen when the button is clicked
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("title").textContent = `hello ${username}`;//addes the username to the title 
  // and textContent change the content of the element

}