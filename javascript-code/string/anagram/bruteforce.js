//Check if two Strings are anagrams of each other
//Problem Statement: Given two strings, check if two strings are anagrams of each other or not.

function checkAnagram(str1,str2){
    // Case 1: when both of the strings have different lengths
    if(str1.length !==str2.length){
        return false// Strings can't be anagrams if lengths are different
    }
    // Convert strings to arrays and sort them
    const sortedstr1 = str1.split("").sort().join("")
    const sortedstr2 = str2.split("").sort().join("")
     // Case 2: check if every character of str1 and str2 matches with each other
    if(sortedstr1 === sortedstr2){
        return true// Strings are anagrams if sorted versions are equal
    }
    //else (sortedstr1 !== sortedstr2)
    return false// Strings are not anagrams if sorted versions differ
}
let str1 =  "INTEGER";
let str2 = "TEGERNI";
console.log(checkAnagram(str1,str2))
