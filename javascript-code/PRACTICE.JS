
// Write a function isPrime(n) that returns true if n is a prime number, else false.
// Test with numbers like: 2, 5, 9, 11, 15
// function isPrime(n) {
//     if (n <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }


// console.log(isPrime(2));   // true
// console.log(isPrime(5));   // true
// console.log(isPrime(9));   // false
// console.log(isPrime(11));  // true
// console.log(isPrime(15));  // false


// solved using arrow function 
// const isprime = (n) =>{
//     if(n<=1) return false;
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n % i === 0) return false;
//     }
//     return true;
// };
// console.log(isprime(5))


// alternative of to cheak prime number without math.sqrt 


// function checkPrime(num){
//     if (num<=1){
//         return false;
//     }
//     for(let i=2;i<num;i++){
//         if(num % i === 0) return false
//     }
//     return true;
// }
// console.log(checkPrime(9))


//check palindrome. for number............

// function ispalindrome(n){
//     if(n<0) return false;
    
//     let original = n;
//     let reversed = 0; 
//     while(n>0){
//         digit = n % 10;
//         reversed= reversed * 10 + digit;
//         n = Math.floor(n/10)
//     }
//     return original === reversed;

// }
// let result = ispalindrome(1213);
// console.log("check palindrone ",result)

//check palindrome. for string............

// function checkingpalindrome(str){
//     while(str.length> 1){
//         if(str[0] !== str[str.length-1]){
//             return false;
//         }
//         str = str.toString(1,str.length - 1)
//     }
// }
// console.log(checkingpalindrome("madam")); // true
// console.log(checkingpalindrome("hello")); // false
// it is for string palindrom to cheack directly......................
// function ispalindrome(str) {
//     return str === str.split('').reverse().join(''); 
// }
// console.log(ispalindrome("121"))

// // it is for num to check direactly palindrome ........

function checkpalindrome(num){
    return num.toString() === num.toString().split('').reverse().join('')

}
console.log(checkpalindrome(121))


// // here used for checking for num and string palindrome

function both_check_palindrome(value){
    const str = value.toString()
    return str === str.split('').reverse().join('');
}
console.log(both_check_palindrome(121));
console.log(both_check_palindrome("madam"));

// if i want to convert only number not string so I should not use below,split,reverse,join method
function find_palindrome(value){
    value =String(value);               // convert value in the string
    if (value === value.split('').reverse().join('')){
        return true;
    }else{
        return false;
    }
}
result = find_palindrome("121");
console.log("here I checking palindrome",result)

//to check number direactly without converting string then use following

function ispalindrome(num){
    if (num<0) return false;
    let original = num;
    let reverse = 0;
    while(num>0){
        last_di = num % 10;
        reverse = reverse * 10 + last_di;
        num = Math.floor(num/10);
    }
    return original === reverse;
}
output = ispalindrome(121);
console.log(output)

