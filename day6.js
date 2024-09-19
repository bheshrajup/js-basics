//DAY6
/*Variable Scope
--> A variable declared inside a function can only be accessed from that function. This is because that variable has a local scope.
On the other hand, a variable declared outside any block is known as a global variable because of its global variable.
*/

// function greet(){
//     let myMsg= "Ni Hao";
// }
// greet();
// console.log(myMsg) //throws error

function greet(){
    let myMsg= "Ni Hao";
    console.log(myMsg) //print Ni Hao

}
greet(); //--> greet() is accessing the variable outside the function. this is because the variable is declard using let. only 'let' and 'const' are accesed outside scope

let myDay="Monday";
function day(){
    let myDay="Tuesday";
    console.log(myDay);
}
day(); //local myDay variable is called
console.log(myDay);//global variable 


//rest parameters
//--> The rest parameter is a parameter that can accept any number of data as its arguments. The arguments will be stored as an array.
//triple dots(...)is used

function printArguments(...args){
    console.log(args);
}
printArguments('a','e','i','o','u');
printArguments(1,2,3,4,5);


//Arrow Function
//The JavaScript arrow function syntax allows you to write a JavaScript function with a shorter, more concise syntax.

//Normal function
// function greetings(name) {
//     console.log(`Hello, ${name}!`);
//   }
  
//   greetings("John"); // Hello, John!

const greetings = (name) => {
    console.log(`Hello, ${name}!`);
  };
  
  greetings("John"); // Hello, John!


  //Single and MultiLine arrow functions

const gree=()=>"Hello World";
console.log(gree());

//Arrow function doesn't have arguments binding

// const printArgs=()=>console.log(argumets);//throws error
// printArgs(1,2,3,4);

const printArgs=(...arguments)=>console.log(arguments[1]);
    printArgs(1,2,3,4)


//Arrow function without round brackets
//-->when we have exactly one parameter
const addNum=num=>num+3;
console.log(addNum(2));

/*Converting normal function into arrow function step-wise

Given normal function
function plusTwo(num){
return num+2;
}
step1: replace fuction keyword with let or const
let plusTwo(num){
return num+2;
}
step2: add = after the function name
let plusTwo=(num){
return num+2;
}
step3: add => after the round brackets
let plusTwo=(num)=>{
return num+2;
}
*/