// switch = a control structure that allows you to execute code based on different cases also replaces if else statement 
/*//Exemple
let day = 1;
if(day == 1){
    console.log('monday');
}
if(day == 2){
    console.log('tuesday');
}
if(day == 3){
    console.log('wednesday');
}
if(day == 4){
    console.log('thursday');
}
if(day == 5){
    console.log('friday');
}
if(day == 6){
    console.log('saturday');
}
if(day == 7){
    console.log('sunday');
}
*/
//simple 

let day = 8;
switch(day){
    case 1:
        console.log('monday');
        break;// we use break to stop the execution of the code after the case is executed 
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
    default:// we use default to execute the code if none of the cases are true 
        console.log('invalid day');
}

let testScore = 92;
let lettreGrade;

switch(true){
    case testScore >= 90:
        lettreGrade = 'A';
        break;
    case testScore >= 80:
        lettreGrade = 'B';
        break;
    case testScore >= 70:
        lettreGrade = 'C';
        break;
    case testScore >= 60:
        lettreGrade = 'D';
        break;
    default:
        lettreGrade = 'F';
        break;
}
