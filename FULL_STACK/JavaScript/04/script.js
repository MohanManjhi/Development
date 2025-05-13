//conditional statement and SwitchCase statement in js

const age = 1;

if(age>18){
    console.log("You can vote");
}
else if(age==18){
    console.log("You can vote");
}
else{
    console.log("you can not vote")
}


//ternary operator if we have only two conditiopn

age>=18 ? console.log("yes") : console.log("No");


//switch case statement

const option = 2;

switch(option){
    case 1: console.log("option 1")
    break;
    case 2: console.log("option 2")
    break;
    case 3: console.log("option 3")
    break;
    default: console.log('invalid option')
}