// #DAY2

//This is a single line comment
/*
This 
is a 
multiple line
comment
*/
console.log("This is the learning about comments.");

//Printing simple numbers
console.log(1);
console.log(2);
console.log(3);

//javascript variables
let message ="Hello world!"
console.log(message);

//variable value overwritten when its value is changes
// msg = "Hello nepal";
// console.log(msg);
// msg= "Today is raining.";
// console.log(msg);

/*
var keyword--> used to declare variable with global scope which can be accessed from anywhere.
avoid using 'var' keyword. use of 'let' keyword is fine.
*/

//principle of least exposure

// if(true){
//     let name="Bheshraj";
// }
// console.log(name); //this will prompt error

//Data types

console.log(2+2)
console.log(2 +" "+ "Two")


//String
// const msg = "Hello, Bheshraj !";
// console.log(msg);

const hello = "Hello"+ "I" + "am" + "Bheshraj";
console.log(hello);

const msg= "Bheshraj Upadhyaya";
console.log("My name is "+ msg);

let subject = "Javascript"
let topic="String";
console.log("I am learning about"+topic+"of"+subject);
//this is important
//template string format
// back tick(`) is used
console.log(`${topic} is a topic of ${subject}`);

let numAsString = "20"+"81"; 
console.log(numAsString);


//Numbers(integer and float)
let x=1;
let y=2;
let z = x+y;
let m = x*y;
let n = x/y;
console.log(z);
console.log(m);
console.log(n);

let f= 2.35;
let g= 0.65;
let h= f+g;
console.log(h);


//Boolean
//true or false
let on =true;
let off= false;

//Undefined in javascript
let first_name;
console.log(first_name);// print undefined

//Null in JavaScript
let firstName=null;
console.log(firstName);

//Type conversion and coercion

//we know
let s="7";
let a= 5;
console.log(s+a); //output 75
//but expected output is 12.
//convert 's' string value to number.
s = Number(s);
console.log(s+a); //output 12

// END OF DAY2