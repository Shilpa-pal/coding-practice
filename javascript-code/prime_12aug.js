
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
function printPrimesInRange(start, end) {
  for (let num = start; num < end; num++) {
    if (isPrime(num)) {
      console.log(num)
    }
  }
}
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;

  }
  return true

}
printPrimesInRange(1, 100)

// //Print all prime numbers in a range (e.g., 1 to 100) with skiping even number......................

function isItPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;  // 2 is prime
  if (n % 2 === 0) return false; // it skip even numbers
  for (let i = 3; i <= Math.sqrt(n); i += 2) {  //check odd divisors only
    if (n % i === 0) return false;
  }
  return true;
}

function checkInRange(start, end) {
  for (let num = start; num <= end; num += 2) {
    if (isItPrime(num)) {
      console.log(num)
    }
  }

}
checkInRange(1, 20)
//amother aternative
function printPrimesInRange(start, end) {
  if (start <= 2 && end >= 2) console.log(2); // print 2 if in range

  // Start from the first odd number ≥ start
  let num = start % 2 === 0 ? start + 1 : start;

  for (; num <= end; num += 2) { // increment by 2 (skip evens)
    let isPrime = true;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (num > 2 && isPrime) console.log(num);
  }
}

printPrimesInRange(1, 20);



// checkig prime number in range just alternative way of write

function isPrimeNum(n) {
  if (n <= 1) return false
  for (let i = 2; i <= Math.sqrt(n); i++) {           // math.sqrt chexk till the root square
    if (n % i === 0) {
      return false
    }
  }
  return true;
}

function printPrimeNumInRange(start, end) {
  for (let num = start; num <= end; num++) {
    if (isPrimeNum(num)) {                   // called function if true it print the prime number
      console.log(num);
    }
  }
}
printPrimeNumInRange(1, 30)



// another way to check number in range but while use one function

function printIsPrimeNumber(start, end) {
  for (let num = start; num <= end; num++) {
    if (num > 1) {
      let isPrime = true // assume num is prime WE INITIALIZE
      for (let i = 2; i <= Math.sqrt(num); i++) {           // math.sqrt chexk till the root square
        if (num % i === 0) { // found a divisor
          isPrime =  false;  // change assumption
          break;  // no need to check more
        } 
      }
      if (isPrime) console.log(num);   // only print if still true
    }  
  }
}
printIsPrimeNumber(1,10)