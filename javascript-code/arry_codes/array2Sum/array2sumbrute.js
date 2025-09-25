
// Problem Statement: Given an array of integers arr[] and an integer target.
// 1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.
// 2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.//

// // 1st variant:brute force 

function findTarget(arr, target) {
    let n = arr.length
    for (let i = 0; i < n; i++) {

         for (j = i + 1; j < n; j++) {//Avoids comparing the same element with itself (arr[0] + arr[0]).
        // Avoids repeating pairs in reverse (arr[1] + arr[2] and later arr[2] + arr[1]).
        // Ensur neach unique pair is checked exactly once.
            if (arr[i] + arr[j] == target) {
                return "yes"
            }
        }
    }
    return "No"
}
let arr = [2, 6, 5, 8, 11]
let target = 14
let ans = "This is the answer for variant 1:" + findTarget(arr, target);
console.log(ans)

// better solution 

function betterSolution(arr,t){
    let n = arr.length
    let hashmap = new Map() // uing a map to store index number
    for(let i = 0;i<n;i++){
        let num = arr[i] // means 2 = arr[0],3= arr[1],1 = arr[2]
        let numpresent = t - num 
        if(hashmap.has(numpresent)){ // cheacking is number present the answer is No becuse it just started the loop 

            return "Yes"
        }else{                                                    //num  inx
            (hashmap.set(num,i))  // if not then store the number {{2 → 0, 6 → 1, 5 → 2}}
        }

    }
    return "No"
}
console.log(betterSolution([2,3,1,4],4))

// optimal solution 

function optimalSol(arr1, k1) {
    let n = arr1.length
    let left = 0
    let right = n - 1 //becuse going right to left means towards 0 inx
    while (left < right) {
        let sum = arr1[left] + arr1[right]
        if (sum === k1) {
            return "yes";
        } else if (sum < k1) { // if sum less than target left idx go to next index i.e is ++
            left++
        } else {
            right--;// if sum > k then go to right-- becuase we going towards left that's why --
        }
    }
    return "No";
}

let arr1 = [2, 6, 5, 8, 11]
let k1 = 14
let ans1 = "This is the answer for variant 1:" + optimalSol(arr1, k1);
console.log(ans1)  
