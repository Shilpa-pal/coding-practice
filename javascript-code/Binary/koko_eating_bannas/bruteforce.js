//Problem Statement: A monkey Koko is given ‘n’ piles of bananas, whereas the 'ith' 
// pile has ‘a[i]’ bananas. An integer ‘h’ is also given, which denotes
// the time (in hours) for all the bananas to be eaten.

// Input: N = 4, a[] = {7, 15, 6, 3}, h = 8
// Output: 5
// Explanation:  If Koko eats 5 bananas/hr, he will take 2, 3, 2, and 1 hour to eat the piles accordingly. So, he will take 8 hours to complete all the piles.  

// Input: N = 5, a[] = {25, 12, 8, 14, 19}, h = 5
// Output: 25
// Explanation: If Koko eats 25 bananas/hr, he will take 1, 1, 1, 1, and 1 hour to eat the piles accordingly. 
class Solution {
calculateHour(arr, h) {
    let totalhour = 0
    for (let plie of arr) {
        totalhour += Math.ceil(plie / h)
    }
    return totalhour
}
minEatingSpeed(arr,h){
    let maxVal = Math.max(...arr)
    for(let i=1;i<maxVal;i++){
        let hour = this.calculateHour(arr,i)
        if(hour<=h){
            return i
        }
    }
    return maxVal
}
}
// Driver code
let arr = [3, 6, 7, 11];
let h = 8;
let obj = new Solution();
console.log(obj.minEatingSpeed(arr, h));