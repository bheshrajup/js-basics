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
    case 10:
        console.log("You are not a teenager");
        break;
    
    case 14:
        console.log("You just become teenager");
        break;
    
    case 18:
        console.log("You are now matured.");
        break;
    
    default:
        console.log("This will run when the case abouve are not true.");
        break;
}
