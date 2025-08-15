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

function isArmstrong(n){
    let copy = n;
    let sum = 0;

    count = n.toString().length   // count the digit

//// Calculate sum of digits raised to power 'count'
    while(copy > 0){
        let digit = copy % 10;
        sum += Math.pow(digit,count);
        copy = Math.floor(copy/10);

    }
    return sum === n ;

}
console.log(isArmstrong(153)); // true
console.log(isArmstrong(9474)); // true
console.log(isArmstrong(123));