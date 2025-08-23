//print the number
function printNum(n) {
    if (n === 0) {
        console.log("1");  // base case
        return;
    }
    process.stdout.write(n + " ")  // it print number inline eg.4,3,2,1
    printNum(n - 1);    // recursion 
}
printNum(4)  


// factorial 
function factorial(n) {
    if (n === 0) return 1;            // base case: 0! = 1
    return n * factorial(n - 1);      // recursive case
}

console.log(factorial(4)); 

// sum of the number

function sum(n){
    if (n === 1) return 1;
    return n + sum(n-1)

}
console.log(sum(4))