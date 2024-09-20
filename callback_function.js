//CallBack Function--> Passing function as parameter
function print(callback){
    callback();
}

// function mainFunction(callback) {
//     console.log("Performing operation...");
//     // Use setTimeout to simulate an asynchronous operation
//     setTimeout(function() {
//       callback("Operation complete");
//     }, 1000);
//   }
  
//   // Define the callback function
//   function callbackFunction(result) {
//     console.log("Result: " + result);
//   }
  
//   // Call the main function with the callback function
//   mainFunction(callbackFunction);
  

//
let numbers = [1, 2, 3, 4, 5];
function mainFunction(callback) {
  console.log("Performing operation...");
  numbers.forEach(callback);
}
function callbackFunction(number) {
  console.log("Result: " + number);
}

mainFunction(callbackFunction);
