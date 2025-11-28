// cheack Palindrome
function isPalindrome(a){
    let str = 0
    let end = a.length-1
    while(str<end){
        if(a[str] !==a[end]){
            return false // mismatch → not palindrome
        }
        str++;
        end--;
    }
    return true // all matched
}
console.log(isPalindrome("madam")); 
console.log(isPalindrome("good"));  

// reverse string
function reverseString(name){
     // convert string to array manually
    let arr = []
    for(let i =0;i<name.length;i++){
        arr[i] = name[i]
    }
    let start = 0
    let end = name.length-1
    // swap
    while(start<end){
        [arr[start],arr[end]] = [arr[end],arr[start]];
        start++;
        end--;
        if(start === end){
            console.log("it is a palindrome")
        }else {
            console.log("it is not a Palindrome")
        }
    }
     // build string manually
    let result = "";
    for(let i =0;i<name.length;i++){
        result +=arr[i]
    }
    return result

} 
console.log(reverseString("good"));

// // reverse string with using built in function
function reverseStr(n){
    return n.split("").reverse().join("")
}
console.log("reverse string output",reverseStr("shilpa"))

