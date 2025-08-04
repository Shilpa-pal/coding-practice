
// Write a function isPrime(n) that returns true if n is a prime number, else false.
// Test with numbers like: 2, 5, 9, 11, 15
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}


console.log(isPrime(2));   // true
console.log(isPrime(5));   // true
console.log(isPrime(9));   // false
console.log(isPrime(11));  // true
console.log(isPrime(15));  // false