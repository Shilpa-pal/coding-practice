function printstring(n){
    if(n === 0) return 
    
    printstring(n-1)
    console.log(n)

}
printstring(5)


function useSum(n,last){
    if(n>last) return 
    console.log(n)
    useSum(n+ 1,last)
}
useSum(0,6)


function useSum1(num){
    if(num>5)return
    console.log(num)
    useSum1(num+ 1)
}
useSum1(1)


function printstring(str,i=0){
    if(i >=str.length) return//bae case
    console.log(str[i])   //  take the i-th character Example flow:
//i=0 → str[0] = S
// i=1 → str[1] = h
// … and so on.
    printstring(str,i+1)  //// move to next character
}
printstring("Shilpa")

// we can print each charchter by ##slice mathod also using ##one parameter as well
function printstr(s){
    if (s === "") return
    //console.log(s[0])  // this print each word in diff row   // if i add i before s[0] it will print index of each alphabates also
    process.stdout.write(s[0] + " ")   // print first character // this method pritn each word in same row 
    printstr(s.slice(1))   //    // pass remaining string
}
printstr("Harish")
/// another methods with one parameter slice  in this console.log used in last 
function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("Shilpa"));

// index decreasing with two parameter
function reverseString(str,i){
    if(i<0) return " ";
    return str[i] + reverseString(str,i-1)
}
console.log(reverseString("Shilpa","shilpa".length-1))


// here is another method like slice just we have to replace ##slice with ##substring  another way
//  to solve same method diff syntax and one parameter also

function method2(string){
    if(string === "") return;
    console.log(string[0]) // 
    method2(string.substring(1))
}
method2("Shilpa & harish")


// got another method to pirnt each words(string) in differnt row 
function printEachstr(str,i =0){
    if (i>=str.length) return
    console.log(str[i])
    printEachstr(str,i + 1)
    
}
let wordsarray=  "I love coding".split(" "); // we used i To get the **i-th word**, we use `words[i]`.
    
printEachstr(wordsarray)


// print the string
function printingstr(str,i){
    if(i<0) return ""
    return str[i] + printingstr(str,i-1)  // str[i] it print a ,agter2nd recursive call it print "p" and lastt "a" and so on  
}
console.log(printingstr("shilpa","shilpa".length-1))  // we written this becuse it outside function it will not recgnise str from out side the function

// sum of the number
function sum(n){
    if(n<=0) return 0
    console.log(n) // it print each number 1st than we get sum of all the number
    return n + sum(n-1)  // ewcursive call
    
}
console.log(sum(5))


//another way to solve that is count down
function sumNum(i,n){
   if(i>n) return 0
   console.log(i)   // it print number like 1,2,3
   return i + sumNum(i+1,n)
}
console.log( "Total",sumNum(1,5)) //This goes upward (1 → 5) instead of downward (5 → 1).


// another method tail rexursion 
function tailRecurion(n,acc = 0){
    if (n <= 0) return acc
    tailRecurion(n-1,acc+ n)
}
console.log(tailRecurion(5)) 
 // sum(5, 0)
//→ condition false
// → calls sum(4, 0+5) → sum(4, 5)
// sum(4, 5)
// → calls sum(3, 5+4) → sum(3, 9)
// sum(3, 9)
// → calls sum(2, 9+3) → sum(2, 12)


//	
//Factorial of N numbers

function factorialNum(n){
    if(n === 0) return  1 //
    console.log(n) // just to see the flow
    return n * factorialNum(n-1)// recursive case
}
console.log(factorialNum(5))


//  swap the array

function swapArray(i,arr,n){
    if(i>= Math.floor(n/2)) return   // base case

    // swaping             
    // // temp = a
    // a = b
    //b = temp
    let temp = arr[i]
    arr[i]=arr[n-i-1]
    arr[n-i-1]=temp

    swapArray(i+ 1,arr,n);   // recursive call
}
let arr = [1,2,3,4,5]
let n = arr.length
swapArray(0,arr,n)
console.log(arr.join(" "))


// here is another method without temp (using ES6 swap shorthand):

function swapArray(i,arr,n){
    if(i>= Math.floor(n/2)) return   // base case

    // swaping             
    // // temp = a
    // a = b
    //b = temp
    //[a, b] = [b, a];
    [arr[i] ,arr[n-i-1]]= [arr[n-i-1],arr[i]]
    
    swapArray(i+ 1,arr,n);   // recursive call
}
let arr1 = [1,2,3,4,5]
let n1 = arr1.length
swapArray(0,arr1,n1)
console.log(arr1.join(" "))

