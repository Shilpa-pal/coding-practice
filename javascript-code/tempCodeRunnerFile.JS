function checkpalindrome(num){
    return num.toString() === num.toString().split('').reverse().join('')

}
console.log(checkpalindrome(121))