
// find the lower bond
//Given a sorted array of N integers and an integer x, write a program to find the lower bound of x.

// Example 1:
// Input Format: N = 4, arr[] = {1,2,2,3}, x = 2
// Result: 1
// Explanation: Index 1 is the smallest index such that arr[1] >= x.

// Example 2:
// Input Format: N = 5, arr[] = {3,5,8,15,19}, x = 9
// Result: 3
// Explanation: Index 3 is the smallest index such that arr[3] >= x.
// 


// brute force approach

function lowerBound(arr,n,x){
    for(let i =0;i<n;i++){
        if(arr[i]>=x){
            return i
        }
    }
    return n
}

let arr = [3, 5, 8, 15, 19];
let n = 5, x = 9;
let ind = lowerBound(arr, n, x);
console.log("The lower bound is the index:", ind);
// Time Complexity: O(N), where N = size of the given array.
// Reason: In the worst case, we have to travel the whole array. 
// This is basically the time complexity of the linear search algorithm.
// Space Complexity: O(1) as we are using no extra space.

// optimal solution 

function lowerBoundSol(array,n1,x1){
    let low = 0,high = n-1
    let ans = n

    while(low<=high){
        let mid = Math.floor((low +high)/2)
        //maybe answer
        if(array[mid]>=x1){
            ans = mid
            // look for smaller index on the left
            high = mid - 1
        }else{
            low = mid + 1 // look on the right
        }
    }
    return ans 
}
let array = [3, 5, 8, 15, 19];
let n1 = 5, x1 = 9;
let indx = lowerBound(array, n1, x1);
console.log("The lower bound is the index:", indx);

// upper bound

function upperBound(array1,y){
    let n = array1.length
    let low = 0,high = n-1
    let answer = n
    while(low <=high){
    let mid = Math.floor((low + high) /2)
        if(array1[mid]>y){
            answer= mid
            high = mid-1
        }else{
            low = mid +1
        }
        return answer
    }
}
let array1 = [3, 5, 8, 15, 19];
let n2= 5, y = 9;
let index = upperBound(array1, n2, y)
console.log("The higher bound is the index:", index);
