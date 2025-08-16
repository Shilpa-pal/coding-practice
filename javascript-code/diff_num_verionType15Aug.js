// // sum of num 

// let no = 4567;  //Store original number
// let su = 0,tem = no; //su = sum of digits, tem = copy of no

// while(tem > 0){  //Loop until tem becomes 0
//     console.log(tem);  //Print current value of tem
//     su+=tem % 10   //Add last digit of tem to su
//     tem = Math.floor(tem/10)   // 6️⃣ Remove last digit from tem
// }
// console.log(no)  // Print original number
// console.log(su) // print sum number


// // sum of digit
//     let num = 123
//     let sum = 0, temp = num;  // it create copy of input num that we can modify the temp  in the loop without losing the original num.
//     while(temp>0){         // loop runs as long as temp greater than 0 Why? Because we’ll keep removing digits from temp until it becomes 0, 
//     // meaning all digits have been processed.
//         sum +=temp  % 10;    //temp % 10 extracts the last digit of temp.2)sum += ... means “add that last digit to sum”.
//         temp = Math.floor(temp /10) //Removes the last digit from temp.Math.floor() ensures it’s rounded down to an integer.
//     }
//     console.log(sum)


//reverse the digit

let number = 12345     // original number input
let tempr = number  // tempr is copy of number so we don't nee to change the original number
let reverse = 0  // here we store the revese number

while (tempr > 0) {    // loop untill tempr greater than 0
    let d = tempr % 10   // we get value of d via # get last digit of number
    reverse = reverse * 10 + d  // appending(adding from last digit of number one by one) digit to reverse
    tempr = Math.floor(tempr / 10)  // removed the last digit 

}
console.log(reverse)   // printing the reverse number

//count the digit 

let value = 1234;   // original num 
let t = value; //copy so we don't lose original number
let count = 0;

while (t > 0) {    //loop untilno digit left
    count++                  //found digit , add 1 to count
    t = Math.floor(t / 10)   // remove the last digit 
}
console.log(count)

// shorter version without using loop 

let integer = 1234566
let counting = integer.toString().length
console.log(counting)


// palindrome 
function isPalindrome(original) {
    let opp = original          // copy of the original number
    let opposite = 0
    while (opp > 0) {
        let di = opp % 10       // get last digit 
        opposite = opposite * 10 + di;
        opp = Math.floor(opp / 10)   // remove last digit 
    }
    return opposite === original;   // compare reversed with original

}
console.log(isPalindrome(121))


// isarmstrong number

function isArmstrong(n) {
    let copy = n;
    let sum = 0;

    count = n.toString().length   // count the digit

    //// Calculate sum of digits raised to power 'count'
    while (copy > 0) {
        let digit = copy % 10;
        sum += Math.pow(digit, count);
        copy = Math.floor(copy / 10);

    }
    return sum === n;

}
console.log(isArmstrong(153)); // true
console.log(isArmstrong(9474)); // true
console.log(isArmstrong(123));

// number isharshad (number that is divisible by the sum of its digits.)
//Example: 18 ÷ (1+8=9) = 2 → Harshad.
function isharshad(num) {
    let ti = num;     // copy of number
    let sum = 0;     // it store the sum value
    while (ti > 0) {             // until ti is greater than 0 run the loop 
        sum += ti % 10;        //temp % 10 extracts the last digit of temp.2)sum += ... means “add that last digit to sum”.  
        ti = Math.floor(ti / 10)  // remove the last digi 
    }
    return num % sum === 0
}
console.log(isharshad(15))

// // 2.  check if it is Abundant Number
//A number is abundant if the sum of its proper divisors (excluding itself) is greater than the number.
//Ee.12 → divisors are 1, 2, 3, 4, 6 → sum = 16 > 12 ✅ abundant.

function isAbundantNum(num) {
    let sum = 0
    // i = 1 used because 0 is invalid as a divisor. 
    for (let i = 1; i <= num / 2; i++) {      // here it divide by two becuse the number itself should not in consider in divisor 
        if (num % i === 0) sum += i;  // and sum like above
        // (num % i === 0)  i is number of loop 1,2,3,4 it checks if 12 % 1,12 %2 ,so on if reminder is 0 than only sum += i index get add
    }
    return sum > num;  // if this  condition true than it is abundant number

}
console.log("isAbundant", isAbundantNum(12))

// isdeficientNum 

function isdeficientNum(num) {
    let sumnum = 0
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) sumnum += i;
    }
    return sumnum < num
}
console.log("isdeficientNum", isdeficientNum(12))


// is perfect number
//Divisors of 12 → 1, 2, 3, 4, 6, 12 , Proper divisors = 1 + 2 + 3 + 4 + 6 = 16
// 16 ≠ 12, so 12 is NOT a Perfect Number (it’s Abundant because 16 > 12).

function isPerfectNum(num) {
    let sumnum = 0
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) sumnum += i;
    }
    return sumnum === num   //true if Perfect Number
}
console.log("perfect number", isPerfectNum(6))
console.log("perfect number", isPerfectNum(28))
console.log("perfect number", isPerfectNum(12))

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
    return isprime(num1) && isprime(num2) && Math.abs(num1 - num2) === 2;
}
console.log("TwinPrimenumber", isTwinPrime(3, 5))
console.log("TwinPrimenumber", isTwinPrime(7, 5))
console.log("TwinPrimenumber", isTwinPrime(17, 19))



