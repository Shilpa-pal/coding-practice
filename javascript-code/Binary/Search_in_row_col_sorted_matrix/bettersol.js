function binarySearch(nums,target){
    let n = nums.length

    let low = 0
    let high = n-1
    while(low<=high){
        let mid = Math.floor((low + high)/2)
         if (nums[mid] === target) return true;
        else if (target > nums[mid]) low = mid + 1;
        else high = mid - 1; 
    }
    return false
}
function searchElement(matrix,target){
    let n = matrix.length
    for(let i =0;i<n;i++){
         const flag = binarySearch(matrix[i], target);
        if (flag) return true;
    }
    return false
}
const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];
const result = searchElement(matrix, 8);
console.log(result ? "true" : "false");
// Time Complexity: O(N*logM), where N = given row number, M = given column number.
// Reason: We are traversing all rows and it takes O(N) time complexity. And for all rows, we are 
// applying binary search. So, the total time complexity is O(N*logM).

// Space Complexity: O(1) as we are not using any extra space.