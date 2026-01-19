const txt = document.getElementById("txt");
const mySub = document.getElementById("mySub");
const res = document.getElementById("res");
let age;
mySub.onclick = function(){
    age = txt.value;
    age = Number(age);
    if(age >= 18){
        res.textContent = "you are old enough to drive";
    }
    else{
        res.textContent = "you are not old enough to drive";
    }
}