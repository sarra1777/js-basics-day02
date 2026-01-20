//string = allow you to manipulate and work with text (collection of characters and numbers) 
//Exemple
let username = "sarra";
console.log(username.charAt(0)); //charAt = method that returns the character at a specific index in a string

console.log(username.indexOf("a")); //indexOf = method that returns the index of a specific character in a string username.indexOf("a");

console.log(username.length); //length = property that returns the number of characters in a string

console.log(username.toUpperCase()); //toUpperCase = method that returns a copy of a string with all characters converted to uppercase

console.log(username.toLowerCase()); //toLowerCase = method that returns a copy of a string with all characters converted to lowercase

console.log(username.slice(2, 4)); //slice = method that returns a copy of a string from a specific start index to a specific end index the last index is not included

console.log(username.substring(2, 4)); //substring = method that returns a copy of a string from a specific start index to a specific end index the last index is not included

console.log(username.replace("a", "A")); //replace = method that returns a copy of a string with a specific character replaced by another character

console.log(username.split("")); //split = method that returns an array of substrings in a string

console.log(username.concat(" nndd")); //concat = method that returns a new string by concatenating two or more strings

console.log(username.trim()); //trim = method that returns a copy of a string with leading and trailing whitespace removed

console.log(username.repeat(3)); //repeat = method that returns a new string by repeating a string a specified number of times

let res = username.startsWith("s");//return true if it is true else returns false
console.log(res);

let res2 = username.endsWith("a");//return true if it ends with the specific string else returns false
console.log(res2);

let res3 = username.includes("a");//return true if it is included the specific string else returns false
console.log(res3);

let res4 = username.match(/a/);//return an array of matches for a specific pattern in a string we use /a/ to find a and / / to find space
console.log(res4);

let res5 = username.search(/a/);//return the index of the first match for a specific pattern in a string
console.log(res5);

  
let phoneNumber = "123 456 789" ;
phoneNumber = phoneNumber.replaceAll(" ", "-");// replace only used to the first match and replaceAll used to replace all matches
console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(12, "*");//padStart used to add characters to the start of the string
console.log(phoneNumber);

phoneNumber = phoneNumber.padEnd(15, "00");//padEnd used to add characters to the end of the string
console.log(phoneNumber);





