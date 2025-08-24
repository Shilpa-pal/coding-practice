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

function sum(n) {
    if (n === 1) return 1;
    return n + sum(n - 1)

}
console.log(sum(4))

// count number n to 1
function count(n) {
    if (n === 2) return
    count(n - 1)
    process.stdout.write(n + " ")


}
count(4)

// when i want to print 0 to 4
function print(n, current = 0) {  // to intiate with 0 we need to write this 
    if (current > n) return     // base case
    process.stdout.write(current + " ")  // print on erminal
    print(n, current + 1)              // recursion
}
print(4)

// without parameter 
function print(n) {
    if (n < 0) return;
    process.stdout.write(n + " ")
    print(n - 1)

}
print(5)

// Here I am  print 1 to  num
function printnum(num, n) {
    if (num > n) return    // base case
    console.log(num)     // here make sure to print num not n if you print n it will give same number 
    // but here is cath if we print after the recursive call weget reverse num 
    printnum(num + 1, n)
}
printnum(1, 7)

//.........................print number in reverse order 
function numPrint(i, n) {
    if (i > n) return
    numPrint(i + 1, n)  // we can change the print position or else chnage condtion and recursive call
    console.log(i)
}
numPrint(3, 8)

// print num n to 1

function printonetoN(i, n) {
    if (i < n) return
    console.log(i)
    printonetoN(i - 1, n)

}
printonetoN(7, 1)

/// print string
function printName(nam,time) {
    if (time<1) return  
    console.log(nam);
    printName(nam,time-1)    // it print 5 to 1
}
printName("hir")

// print string  ////////////////////////////////////////////////////////
// Two parameters
function printOneToN(i, n) {
    if (i > n) return;
    console.log(i);
    printOneToN(i + 1, n);
}
printOneToN(1, 5);  // needs both start (1) and limit (5)

// One parameter
function printNToOne(i) {
    if (i < 1) return;
    console.log(i);
    printNToOne(i - 1);
}
printNToOne(5);     // needs only start (5), limit is implicit
