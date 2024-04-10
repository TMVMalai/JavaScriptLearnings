let person_age =20;
if(person_age>=18){
    console.log("Eligible for Vote");
}
else{
    console.log("Program Exited");
}

// import { createInterface } from 'readline';

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let userInput;

// rl.question('Enter an integer: ', (integerInput) => {
//   userInput.integer = parseInt(integerInput);
//         console.log('User Input:', userInput);
//         rl.close();
//       });


let num = 10;
if(num%=0){
    console.log("Even Number");
}
else{
    console.log("odd Number");
}

let WeekNum =1 ;

switch (WeekNum){
    case 1: console.log("sunday");
    break;
    case 2: console.log("Monday");
    break;
    case 3: console.log("Tuesday");
    break;
    case 4: console.log("Wednesday");
    break;
    case 5: console.log("Thursday");
    break;
    case 6: console.log("friday");
    break;
    case 7: console.log("saturday");
    break;
    default:
        console.log("Invalid Week Number");
}