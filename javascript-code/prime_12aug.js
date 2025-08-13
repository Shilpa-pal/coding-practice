
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

//Print all prime numbers in a range (e.g., 1 to 100)......................
function printPrimesInRange(start,end){
  for(let num = start; num<end;num++ ){
    if (isPrime(num)) {
      console.log(num)
    }
  }
}
function isPrime(n){
  if(n<=1) return false;
  for(let i = 2;i<=Math.sqrt(n);i++){
    if (n % i === 0) return false;

  }
  return true

}
printPrimesInRange(1,100)

// //Print all prime numbers in a range (e.g., 1 to 100) with skiping even number......................

function isItPrime(n){
  if (n<=1) return false;
  if (n === 2) return true;  // 2 is prime
  if (n % 2 === 0) return false; // it skip even numbers
  for(let i= 3;i<=Math.sqrt(n);i+=2){  //check odd divisors only
    if (n % i === 0) return false;
  }
  return true;
}

function checkInRange(start,end){
  for(let num = start;num<=end;num+=2){
    if (isItPrime(num)) {
      console.log(num)
    }
  }

}
checkInRange(1,20)