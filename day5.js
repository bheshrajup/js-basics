//DAY5
//AND and OR 

// let myFood = "Chocolate Cake";

// if (myFood === "Banana" || myFood === "Apple") {
//   console.log("Eat fruits everyday to keep you healthy.");
// }

// if (myFood === "Chocolate Cake") {
//   console.log("Enjoy the sweet treat.");
// }

//Code above using switch cases
let myFood = "Banana";

switch (myFood) {
  case "Banana":
  case "Apple":
    console.log("Eat fruits everyday to keep you healthy.");
    break;
  case "Chocolate Cake":
    console.log("Enjoy the sweet treat.");
    break;
}

//Control Flows(Loops)

//for loop --> it is only used when know how many times 

for(let x=10;x>0;x--){
    console.log(x);
}

for(let x=1;x<5;x++){
    console.log(x);
}
for(let x=1;x<20;x+=5){
    console.log(x);
}

let heads = 0;
let tails = 0;
for (x = 1; x <= 10; x++) {
  if (Math.random() < 0.5) {
    tails++;
  } else {
    heads++;
  }
}

console.log("Tossed the coin ten times");
console.log(`Number of heads: ${heads}`);
console.log(`Number of tails: ${tails}`);

//while statement

let i=1
while(i<6){
    console.log(i);
    i++;
}

//This will go infinite

// let j=1;
// while(j<6){
//     console.log(`The value of i=${i}`);
//     i++;
// }

let flips = 0;
let isHeads = false;

while (!isHeads) {
  flips++;
  isHeads = Math.random() < 0.5;
}

console.log(`It took ${flips} flips to land on heads.`);


//Functions in JS
//create function using 'function' keyword

// function greet(){
//     console.log("Ni Hao");
// } //function written ends
// greet(); //function called

//function with parenthesis(parametarized)
function greet(name){
    console.log(`Ni Hao, ${name}`);
    console.log("Wo shuo zhougen");

}
greet("Bheshraj");


//default parameter
function hello(name="Bheshraj"){
    console.log(`Ni Hao, ${name}`);
    console.log("dui, ne shuo zhougen?");
    
}
hello();
// hello(Krishna); //show error


//both default and non-default parameter
function weathers(weather, name = "Bheshraj") { //non-default paramter is placed before default 
    console.log(`Hello, ${name}!`);
    console.log(`It's ${weather} today, right?`);
  }
  
  weathers("Sunny");

  //default paramter is placed before the non-default parameter
  
  function tried(name = "Bheshraj", weather) {
    console.log(`Hello, ${name}!`);
    console.log(`It's ${weather} today, right?`);
  }
  
  tried(undefined, "Rainy"); //we have to place undefined for the default paramter

//default paramters and null


//when we pass 'undefined' to a function that has a default parameter, the default parameter is used.

function delux(name="Bheshraj" ){
    console.log(name);
}
delux(undefined)//Bheshraj

//when we pass 'null' to the function, the defualt parameter will be ignored.
function bus(name="Mercedes"){
    console.log(name);
}
bus(null); //null is output

//return statement
function sum(a,b){
    return a+b;
}
let result = sum(2,3); //called and value returned
console.log(result);


function checkAge(age){
    if(age>18){
        return("You are eligible to vote");
    }
    else{
        return("You are not eligible yet.")
    }
}
console.log(checkAge(20));
console.log(checkAge(15));

//it can also be used to stop a function execution and return to the caller by specifying return statement

function car(){
    console.log("Mercedes Benz");
    return;
    console.log("Audi"); //This will not be printed
}
car();