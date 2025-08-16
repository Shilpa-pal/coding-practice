// twinPrime number
function isprime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }
    return true;
}
// function for twin primes
function isTwinPrime(num1, num2) {
    return isprime(num1) && isprime(num2) && Math.abs(num1 - num2 === 2);
}
console.log("TwinPrimenumber", isTwinPrime(3, 5))
console.log("TwinPrimenumber", isTwinPrime(7, 5))
console.log("TwinPrimenumber", isTwinPrime(17, 19))