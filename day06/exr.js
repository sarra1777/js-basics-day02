const email = "FjJtD@example.com";
let username = email.slice(0, email.indexOf("@"));
let extention = email.slice(email.indexOf("@") + 1);
console.log(username);
console.log(extention);