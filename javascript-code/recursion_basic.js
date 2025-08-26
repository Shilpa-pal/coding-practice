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

//Aternate method of above
function printWord(n){
    if(n === 0) return
    console.log("Rahul")
    printWord(n -1)
}
printWord(5)

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
function printNToOne(i) {
    if (i < 1) return;

    console.log(i);
    printNToOne(i - 1);
}

printNToOne(4); // Output: 4 3 2 1

// another (forward recursion)..............................
function printOneToN(i, n) {
    if (i > n) return;  
    console.log(i);    
    printOneToN(i + 1, n);  // move forward
}
printOneToN(0,5)

//(backward recursion)......................................
function printNToOne(i) {
    if (i < 1) return;  
    console.log(i);    
    printNToOne(i - 1); // move backward
}
printNToOne(5)
//////////////////////////////////////////////////////////////////////////////////
function backward(n) {
  if (n < 1) return;
  console.log(n);
  backward(n - 1);
}
backward(5);

function countdown(n) {
    if (n === 0) return;   // base case
    console.log(n);
    countdown(n - 1);      // making `n` smaller
}
countdown(5);

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

// without parameter  it print 5 to 0
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



// print char of string using recursion 
//method.1 of base case
function priString(str,times){
    if (times === 0 )return 
    console.log(str)
    priString(str,times-1)
}
priString("Shilpa",6)
//method.2 of base case
function printStr(str,i,n){
    if(i>=n)return
    console.log(str)
    printStr(str,i+1,n)
}
printStr("Shilpa",0,3)

//method.3 of base case
function printS(str){
    if(str.length === 0) 
        console.log("SHilpa")
    printS(str.slice(1))  // it get decrese by one ,on each call

}
printS("#####") // number of hashtag = number of shilpa gets print

//method.4 of base case
function printS(str, index) {
    if (index === str.length) return;   // base case: stop when index reaches length
    console.log("Shilpa");              // print once
    printS(str, index + 1);             // move to the next index
}
printS("#####", 0);   // start with index = 0

//method.5 of base case
function printEAchWord(str){
    if(str.length === 0) return
    console.log(str[0])
    printEAchWord(str.slice(1))
}
printEAchWord("Hello")

