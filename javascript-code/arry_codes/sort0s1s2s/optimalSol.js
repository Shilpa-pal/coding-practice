
// Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. 
// ( Expected: Single pass-O(N) and constant space)
function aling(arr){
    let n = arr.length
    //low always marks the boundary where the next 0 should go.
    let low = 0//position where next 0 should go.
    let mid =  0//mid → current element to check.
    //It checks elements one by one and decides:
    // Should this element go left (0),
    // Stay in the middle (1),Or go right (2)?
    // At the start, exploration begins from the first element, so mid = 0.
    let high = n-1//high → position where next 2 should go.
//high always marks the boundary where the next 2 should go.
// At the start, no 2s are placed yet, so the boundary is at the last index (n-1).
    while(mid<= high){
        //mid = 0, high = n-1 (say 6 for example).0 >= 6 false → loop won’t run at all.that;s the reason
        if(arr[mid] ===0){
            [arr[low],arr[mid]] = [arr[mid],arr[low]]
            //Note//only when a 0 is placed at the beginning.

            low++//WhyAfter placing a 0 at low, the next free spot for 0 moves forward.
            
            //when the current element is handled (either 0 or 1).
            mid++//why We already processed the current element, so move to the next one.

        }else if(arr[mid] ===1){
            mid++  //1 is already in the correct middle section.
            // No swapping needed, just skip and move forward.
        }else {  // arr[mid] === 2
            [arr[mid],arr[high]]=[arr[high],arr[mid]]

            //high-- → only when a 2 is placed at the end.
            high--//why ?After placing a 2 at high, the next free spot for 2 moves backward.
            //Because the element swapped into mid (from the high side) has not been checked yet.
//why not mid++ here?//We do not move mid when swapping with high because the new element that comes to mid from high has not been checked yet — it could be 0, 1, or 2.
// If we move mid++ immediately, we might skip checking that new element, causing the sort to be incorrect. because It could be 0, 1, or 2. So we stay at mid and re-check it in the next loop.
        }       
    }git 
    return arr
    }

let arr = [2,1,0,0,1,2,0]
console.log(aling(arr))


//  using for loop for differnt number

function sort345(arr){
    let n = arr.length
    let low = 0,mid = 0,high = n-1
//In this DNF algorithm, mid doesn’t always increase by 1 each iteration. Sometimes, we swap with high and mid stays the same to recheck the new element.
// So, we can’t put mid = 0 in the for loop initialization because the loop needs
//to use the current value of mid, which changes dynamically inside the loop.
//If we wrote for(let mid=0;mid<=high;mid++),it will break the logic because mid would always increase, 
//even when we need to recheck after swapping with high.
    for(;mid<=high;){
        if(arr[mid] ===3){
            [arr[low],arr[mid]] = [arr[mid],arr[low]]
            low++
            mid++
        }else if(mid[arr]===4){
            mid++
        }else {//// arr[mid] === 5
            [arr[mid],arr[high]] = [arr[high],arr[mid]]
            high--
            //// do NOT increment mid here
        }
    }
    return arr
}
 let array = [5, 3, 4, 3, 5, 4, 3];
 console.log(sort345(array))
 // Output: [3, 3, 3, 4, 4, 5, 5] 




