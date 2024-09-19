//DAY3

//Operators

//Arithematic Operators
console.log(10+7)
console.log(6-5)
console.log(6*5)
console.log(6/5)
console.log(6%5)

let x=7;
console.log(x)
x++;
console.log(x)
x--;
console.log(x)


//'+' can be used to add multiple string
let msg= "Hello "
let world ="World!"
let p=7;
console.log(msg+world) //NaN value
console.log(msg+p)

//Assignment operator
//'=' is used

// //Comparision operator
// let a = 10;
// let b = '10';
// let c = 20;

// console.log("a is equal to b (double equals):", a == b);  // Equal to (type coercion)
// console.log("a is strictly equal to b (same data type):", a === b);  // Strictly equal (no type coercion)

// console.log("a is not equal to c:", a != c);   // Not equal
// console.log("a is strictly not equal to b:", a !== b);   // Strictly not equal

// console.log("a is greater than c:", a > c);    // Greater than
// console.log("a is less than c:", a < c);       // Less than
// console.log("a is greater than or equal to c:", a >= c);  // Greater than or equal to
// console.log("a is less than or equal to c:", a <= c);     // Less than or equal to


//String comparision are case sensitive
console.log("ABC"=="ABC") //True
console.log("ABC"=="abc")//false
console.log('a'=='b')//false

console.log("8"==8)//True
console.log("8"===8)//false
console.log(true==1)//true
console.log(true===1)//false


//Logical operators
let t = true;
let f = false;

console.log(t && f);  // AND operator (false)
console.log(t || f);  // OR operator  (true)
console.log(!t);      // NOT operator (false)


//typeof operator
//returns the datatype
let a=5
b= typeof(x)
console.log(b); //number

let s= "Bheshraj";
console.log(typeof s);  //string
console.log(typeof true) //boolean
console.log(typeof 4.5) //number

//Exercise
console.log(19%3) //6
console.log(10==3) //false
console.log(10!=="10") //true because strict ineqeuality
console.log(2<"10") //true
console.log("5">2) //true
console.log((false&&true)||true); //true


