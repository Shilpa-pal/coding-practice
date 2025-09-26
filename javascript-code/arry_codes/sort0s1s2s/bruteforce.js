
// Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. 
// ( Expected: Single pass-O(N) and constant space)

function aling(arr) {
    let count0 = 0
    let count1 = 0
    let count2 = 0

    // Step 1: Count 0s, 1s, 2s
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) count0++
        else if (arr[i] === 1) count1++
        else count2++;
    }
    // Step 2: Rewrite array
    let i = 0//because we want to rebuild the array from the beginning (index 0).
    while (count0 > 0) {
        arr[i++] = 0
        count0--;//count0 tells us how many 0s are left to place in the array.
        // Every time we put a 0 into the array (arr[i++] = 0),
        //➝ one 0 from our “stock” has been used.
        //So we decrease the stock by 1 using count0--.
    }
    while (count1 > 0) { //count0 > 0 → true (count0 = 2)
        arr[i++] = 1; // arr[i++] = 0 → i = 0 → arr[0] = 0
        //i becomes 1 (because of i++)
        count1--;    //count0-- → count0 = 1
    }
    while (count2 > 0) {//
        arr[i++] = 2
        count2--;//It makes sure the loop runs exactly as many times as there are 2s.
    }
    return arr
}
let arr = [0, 2, 1, 2, 0, 1]
console.log("Brute force sorted:" + aling(arr));

// using for loop 

function countingzerosOne(arr1){
    let n = arr1.length
    let count0 = 0,count1= 0 ,count2 = 0

    for(let i = 0;i<n;i++){
        if(arr1[i]===0)count0++
        else if(arr1[i] ===1)count1++
        else count2++
    }
    let i=0
    for(let j =0;j<count0;j++){
        arr1[i++]=0   
    } 
    for(let j =0;j<count1;j++){
        arr1[i++]= 1
    }
    for(let j = 0;j<count2;j++){
        arr1[i++] = 2
    }
    return arr1
}
let arr1 = [0, 2, 1, 2, 0, 1];
console.log("Sorted:", countingzerosOne(arr1));

// better approach 
function betterzerosOneCt(arr2){
    let n = arr2.length
    let count0 = 0,count1 = 0,count2 = 0

    for(let i =0;i<n;i++){
        if(arr2[i]===0)count0++
        else if(arr2[i]===1)count1++
        else count2++
    }
    for(let i = 0;i<count0;i++){
        arr2[i] = 0;
    }
    for(let i=count0;i<count0 + count1;i++){
        arr2[i] =1
    }
    for(let i = count0 + count1;i<n;i++){
        arr2[i]= 2
    }
}
let arr2 = [0,2,1,0,1,0,0,1]
betterzerosOneCt(arr2)
console.log("sorted array")
console.log(arr2.join(" "))//.join(" ") use only for formatting the output this [0, 0, 1, 1, 2, 2]to this // 0 0 1 1 2 2