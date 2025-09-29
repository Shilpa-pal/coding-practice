
//Find the Majority Element that occurs more than N/2 times
//Given an array of N integers, write a program to return an element that occurs more than
//  N/2 times in the given array. You may consider that such an element always exists
//  in the array.
//Note:-----here we use moories Voting
// here is the approache is if number of freq found do ++
// if not then to freq--
// like if we found freq 2 and in next if we not found the freq count become 2 to 1 
// and again when we found the freq in array again freq become 2 this happen bexuse this array is not sorted.

function majorityElement(arr){
    let n = arr.length
    let freq = 0,ans = 0// freq = candidate's count, ans = current candidate
    for(let i =0;i<n;i++ ){
        if(freq === 0 ){
            ans = arr[i]// if no candidate, pick current element as candidate
        }if(ans === arr[i]){
            freq++//// same as candidate → increase count
        }else{
            freq--  // different → decrease count
        }
    }
    return ans  // returns the majority element
}
let arr = [1,2,2,1,1]
console.log(majorityElement(arr))