//Math = buit-in object that provides a collection of properties methods
console.log(Math.PI);

let x = 3.21;
let y = 2;
let z;

z = Math.round(x);//3 round to the nearest whole number
console.log(z);

z = Math.floor(x);//floor used to choose the lowest whole number
console.log(z);//3

z = Math.ceil(x);//ceil used to choose the highest whole number
console.log(z);//4

z = Math.sqrt(y);//square root
console.log(z);//1.41

z = Math.abs(y);//absolute value
console.log(z);//2

z = Math.pow(y,2);//power
console.log(z);//4

z = Math.min(1,2,3,4,5);//minimum value
console.log(z);//1

z = Math.max(1,2,3,4,5);//maximum value
console.log(z);//5

z = Math.random();
console.log(z);//random value between 0 and 1

z = Math.random() * 100;
console.log(z);//random value between 0 and 100

z = Math.floor(Math.random() * 100) + 1; //.random() * 100) + 1 used to get random value between 1 and 100 we add +1 to get the value
console.log(z);//random value between 1 and 100

z = Math.trunc(x);//trunc used to remove the decimal
console.log(z);//3

z = Math.log(x);// log used to get the natural logarithm
console.log(z);//0.9999999999999999

z = Math.cos(x);
console.log(z);//0.9999999999999999

z = Math.sign(x);//sign used to get the sign of a number exemple if the number is positiv it will return 1 else it will return -1
console.log(z);//1