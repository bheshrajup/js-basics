//DAY4
//Arrays

//Accessing the elements of the array
let num = [1,2,3,4]

console.log(num[0]) //output 1
console.log(num[1]) //output 2

//replacing
let vowel = ['a','e','i','o','u'];
vowel[0]='p';

console.log(vowel); //a is replaced by p

//push method-->used to add item to the end of the array

let cha =['a','b','c']
cha.push('d');

console.log(cha);

//pop method--> usd to remove the element of the array from the end
let word=['air','water','land','fire'];
word.pop();
console.log(word);

//unshift method--> add an item from the front at index 0
let animal=['cat','dog','goat','cow'];
animal.unshift('buffalo');

console.log(animal)

//shift method--> delete an item from the index 0 of the array

let water=['mineral','aqua','bisleri','seawater'];
water.shift();
console.log(water)

//indexOf method--> used to find and return the index of an item in the array
//the method will return -1 when the item isn't found inside the array

let land=['fertile','infertile','sandy','rocky'];
console.log(land.indexOf('sandy'))

//length property--> to access the length of an array
let college=['jmc','kmc','bmc','tmc','pk'];

console.log(college.length);

//Exercise #4
let colors = ['red','green','blue'];
colors.push('black');
console.log(colors);

colors.shift();
console.log(colors);

colors[0]= 'blue'
colors[1]= 'green';

console.log(colors);

colors.unshift('yellow');

console.log(colors)

//control flows

//if-else
let salary =30000;
if(salary>40000){
    console.log("Congratulations!!")
}
console.log("Sorry");

let marks = 500;
if(marks>600){
    console.log("Congratulations! you got A+");
}
else{
    console.log("Sorry! you failed");
}
console.log("This will run anyhow");``

//switch--case
let age= 18;

switch(age){
    case 10+8:
        console.log("This is true.");
        break;
    case 10:
        console.log("You are not a teenager");
        break;
    
    case 14:
        console.log("You just become teenager");
        break;
    
    case 22:
        console.log("You are now matured.");
        break;
    
    default:
        console.log("This will run when the case abouve are not true.");
        break;

    
}

//won't work the comparision
let number = 5;

switch (number) {
  case number < 10:
    console.log("Value is less than ten");
    break;
  case number < 20:
    console.log("Value is less than twenty");
    break;

  default:
    console.log("Value is twenty or more");
}


//using if--else--if
// let weekdayNumber = 1;

// if (weekdayNumber === 0) {
//   console.log("Sunday");
// } else if (weekdayNumber === 1) {
//   console.log("Monday");
// } else if (weekdayNumber === 2) {
//   console.log("Tuesday");
// } else if (weekdayNumber === 3) {
//   console.log("Wednesday");
// } else if (weekdayNumber === 4) {
//   console.log("Thursday");
// } else if (weekdayNumber === 5) {
//   console.log("Friday");
// } else if (weekdayNumber === 6) {
//   console.log("Saturday");
// } else {
//   console.log("The weekday number is invalid");
// }

//using switch statement
let weekdayNumber = 1;

switch (weekdayNumber) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("The weekday number is invalid");
}