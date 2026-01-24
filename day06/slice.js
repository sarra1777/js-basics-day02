// string slicing = extracting a part of a string and storing it in a new string variable or array .
//string.slice(start, end)
//the difference between let and const is that let is mutable(changeable) and const is immutable(unchangeable) .

const fullName = "Sarra Naddari";
let firstName = fullName.slice(0, 5);//the last index is not included 'sarra'
let lastName = fullName.slice(6, 13);//'Naddari'
let firstChart = fullName.slice(0, 1);//'S'
let lastCharct = fullName.slice(-1);//'i'
let fist = fullName.slice(0, fullName.indexOf(" "));//'a'//'Sarra'
let last = fullName.slice(fullName.indexOf(" ") + 1);//'Naddari' indexof used to find the index of a character in a string 
console.log(last);
console.log(fist);
console.log(lastCharct);
console.log(firstChart);
console.log(lastName);
console.log(firstName);
