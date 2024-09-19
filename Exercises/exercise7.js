function calculateSquare(side){
console.log(`The square side is ${side}`);
let area = side*side;
let perimeter= 4*side;
console.log(`The area of the square is ${area}`);
console.log(`The perimeter of the square is ${perimeter}`);
}
calculateSquare(8);

//Using arrow function
const calSquare=side=>{
    console.log(`The square side is ${side}`);
    let area = side*side;
    let perimeter= 4*side;
    console.log(`The area of the square is ${area}`);
    console.log(`The perimeter of the square is ${perimeter}`);
}
calSquare(5);