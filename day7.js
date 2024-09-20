//Day7
//Objects in JS--> special data type that allows to store more than one value just like array.
//key:value pair

//Example
let myBook={
    title: "Seto Dharti", //key-value pair
    author: "Amar Neupane",
};
console.log(`Book title: ${myBook.title}`);
console.log(`Author Name: ${myBook.author}`);

//use of square bracket
// let myDay={
//     first:"Sunday",
//     second:"Monday",
// };
// console.log(myDay["first"]);
// console.log(myDay["second"]);

//add new property to the object
let myDay={
    first : "Sunday",
    second : "Monday",
};
//add
myDay.third="Tuesday";

myDay["fourth"]="Wednesday";

console.log(myDay);

//modiy object properties
myDay.second=2;

console.log(myDay);

//delete
delete myDay.second;
console.log(myDay);

//check if the property exists in an object
let person={
    firstName: "Bheshraj",
    lastName: "Upadhyaya",
};
//check if firstName exists
console.log("firstName" in person); //true

//check if age exists
console.log("age" in person); //false


