//Data Types

//isme data type init krne ki jrurat nhi hoti hai 
//isme automatic typecasting hoti hai

let num1 = 3
let num2 = 10.45

//String 

const name = "Mohan";
const name2 = 'Manjhi'

console.log(name+' '+name2);

//Boolean

let ans = false
let ans2 = true

//Null --> baad me kuch bhi assign kr skte hai

let a = null;

//Object 

const Person = {
    firstName: 'Mohan',
    lastName :'Manjhi',
    age :20,
    ans : true,
}


console.log(Person.firstName)
console.log(Person.lastName)
console.log(Person.age)

//In js have 1 --> true;
// 0 --> false;

//agr hum true false ke saath arithmetci operations krte hai to wo 1 aur 0 ki trh behave krenge

//string  '1' + '1'  = will be string
// string + numbere = string
//string  *  num = number

console.log('123'*2)  //it will give number

console.log('Mohan'*2) //it will give Nan(Not a Number)

//type of for show the type of variable

console.log(typeof a)

//null is object