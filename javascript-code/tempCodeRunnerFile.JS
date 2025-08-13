
// // check prime number...........
// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;

// }


// // way of giving the prompt in javascript  without install 3rd party package it is built in function 
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function ask() {
//   rl.question("Type 'exit' to quit: ", (userInput) => {
//     if (userInput === 'exit') {
//       rl.close();
//     } else {
//       ask(); // keep asking until 'exit' is typed
//     }
//   });
// }

// ask();

// // this prompt message work on installing npm install prompt-sync' 
// const prompt = require('prompt-sync')();
// let name = prompt("What's your name? ");
// console.log("Hello, " + name);

// function ispalindrome(num) {

// }