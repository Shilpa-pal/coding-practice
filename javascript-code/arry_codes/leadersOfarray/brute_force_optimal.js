//Leaders in an Array

//Problem Statement: Given an array, print all the elements which are leaders.
//  A Leader is an element that is greater than all of the elements on its right side
//  in the array.

function leadersFind(array) {
    let n = array.length
    let ans = []
    for (let i = 0; i < n; i++) {
        let leaders = true

        //Checking whether arr[i] is greater than all 
        //the elements in its right side

        for (let j = i + 1; j < n; j++) {
            //i	Index of the current element we are checking if it’s a leader.
            //j	Index of the elements to the right of i, used to compare with array[i].
            // in 1st itertion 22 cheack with all number like below 
            //eg 12 > 22  3>22 ❌	0 > 22 ❌	6 > 22
            if (array[j] > array[i]) { // 22>10 it cheack right number they are big or not 
                //if not it is leaders num if there is bigger number than not be leaders
                //it checw ith all number one by one 


                // If any element found is greater than current leader
                // curr element is not the leader.
                leaders = false
                break;
            }
        }
        //if (leader) → checks if the current element is actually a leader.

        if (leaders) {
            ans.push(array[i])  // here i was pusing leaders insted of array[i]so that's why I getting 3times true in array
        }
    }
    return ans // instead of this we can use below also for that below loop need to comment 
    // for(let i =0;i<ans.length;i++){
    //     console.log(ans[i])
    // }
}
let array = [10, 22, 12, 3, 0, 6]
console.log("leader of array is ", leadersFind(array))

// Count the Number of Leaders
// Instead of printing leaders, just count how many leaders are there.
function countleaders() {
    let n = arr.length
    let ans = []
    let count = 0
    for (let i = 0; i < n; i++) {
        let leader = true
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[i]) {

                leader = false
                break
            }
        }
        if (leader) {
            count++
            ans.push(arr[i])
        }
    }
    // // by using curly braces i can return both values if
    //  I don't use them we only get return of last return only like count.

    // return {ans,count} 

    // instead of above i can write this also but 1st we need to comment above
    let result = countleaders(arr)
    console.log("Leaders:", result.ans)
    console.log("Total count:", result.count)
}
let arr = [10, 22, 12, 3, 0, 6,7]
console.log("leader of array is here ", countleaders(arr))
