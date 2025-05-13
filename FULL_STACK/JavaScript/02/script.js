// variables in js
console.log("Test")

//var - in old js uses var


//DataType varName = value; Strongly Typed Lan

// javaScript is loos
var age = 22;

var num1 =10;
var num2 = 30;

age= "Eighteen"; //overwrite the 22 because of loose typed 
console.log(age);

//var --> Global

if(true){
    var age = 20; // global means we can access anywhere 
}

console.log(age);

age = 30 //we have already init it into the if statemet but we can update it globally

console.log(age) 


//Naming Convention

//firstname
//firstName   --> preffered way
//FirstName
//first_name



//let variable --> it is a local variable so we can not access it globally
//came into the latest js version

if(true){
    let a = 20;
}

console.log(a); // it will give error of undefined a

//const keyword

const age = 20;

const age = 30 // we can not do that because it can not modify it assign only one time 

//const ko value dena hi hota hai aur ise hum change nhi kr skte hai


//var - Global 
//re-assign
//kahi bhi access kr skte hai


//let - local 
//Re-assign 
//sirf local me access kr skte hai


//const - Local 
//Re-assign  nhi kar skte 
//access sirft khud ke block ke andr