// findst number the largest in the  array

function largestNum(ar) {
    let n = ar.length  // optional steps  if i not mentioning the lenght so i should mention during running the loop i<arr.lenght like this 
    let largest = ar[0]
    for (let i = 1; i < n; i++) {
        if (ar[i] > largest) {
            largest = ar[i]
        }
    }
    return largest
}
let ar = [3, 4, 52, 13, 56]
console.log(largestNum(ar))

//// findst number the second largest and second smallest number in the array

function secondlargest(arr) {
    let largest = arr[0] // assuming first element is largest
    let sLargest = -Infinity // second largest initialized to very small value

    for (let i = 1; i < arr.length; i++) { // here we intialize with 1 index becuase already we assume 0 index is the largest 
        if (arr[i] > largest) {
            sLargest = largest;// old largest becomes second largest  // in this case slargest got value of largest
            largest = arr[i]  // In this case largest get value of arr[i]when the contion is true arr[i]> largest then only this happens
            // largest update the value  
        } else if
            (arr[i] !== largest && arr[i] > sLargest) {
            sLargest = arr[i]// update second largest directly
        }
    }
    return sLargest
}
function secondSmallest(arr) {
    let smallest = arr[0]   // assume first element is smallest
    let sSmallest = Infinity // second smallest initialized to very large value

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            sSmallest = smallest;// old smallest becomes second smallest
            smallest = arr[i] // update smallest
        } else if (arr[i] !== smallest && arr[i] < sSmallest) {
            sSmallest = arr[i]
        }
    }
    return sSmallest
}

function findlargeSmallNum(arr) {
    let slargest = secondlargest(arr)
    let sSmallest = secondSmallest(arr)
    return [slargest, sSmallest]//// return both values as array
}

//write a single function that finds both the smallest and largest numbers from an array.
function findMinMax(array) {
    let largest = 0
    let smallest = 0
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i]
        } else if (array[i] > smallest) {
            smallest = array[i]
        }
    }
    return [largest, smallest]
}
let array = [34, 56, 7, 8, 4, 6]
console.log(findMinMax(array))


// check is this array is sorted or not 

function checkArraySorting(a) {
    for (let i = 1; i < a.length; i++) {
        if (a[i] >= a[i - 1]) {
            
        }else {
            return false
        }

    }
    return true
}

console.log(checkArraySorting([1, 2, 3, 4]))
console.log(checkArraySorting([1, 2, 4, 3, 5, 6, 2]))


// remove the duplicates from the array

function removeDuplicates(rray){
// to perfrom this we take two pointers 1st is i & 2nd is j
    let i = 0 // it will satys 0 until new number comes the point new number comes it become 0 to 1i am talking abou tindex
    for(let j = 0;j<rray.length;j++){
        if(rray[i]!==rray[j]){ // it means a new unique value is found. Then we increase i by 1 and store rray[j] at that new position.
            //(put the new unique number right beside the last unique number.)
            Start:
// i = 0 → points to first unique element (3)
// Unique list so far: [3]
// When j = 2 (value = 5):
// Compare rray[i] = 3 with rray[j] = 5
// Different → new unique value found
// Place 5 at i+1 = 1 (👉 right beside 3)
// Move i → now i = 1
// Now unique list looks like [3, 5]
            rray[i+ 1] = rray[j];
            i++;
        }
    }
    return i + 1
}
console.log(removeDuplicates([3, 3, 5, 6, 6, 7]))

//aaray move element to the left rotate by on palce
//n length = 6
function moveElmnetLeft(arr){
    n = arr.length
    let temp = arr[0]  // because the 0th index we want to move right
    for(let i = 1;i<n;i++){
        arr[i-1] = arr[i] // it help to shift the number arr[i-1]=0index and arr[i]means arr[1st]inx it will keep rais ebt each iteration 
    }
    arr[n-1] = temp;
    return arr

}
console.log(moveElmnetLeft([1,3,4,5,6,7]))

//brute force approach solution aaray move element to the left rotate by on palce
function rotateLeftBrute(arr) {
    let n = arr.length;
    let temp = [];

    // Step 1: copy from index 1 to n-1
    for (let i = 1; i < n; i++) {
        temp.push(arr[i]);
    }
    // Step 2: push first element at the end
    temp.push(arr[0]);
    return temp;
}

console.log(rotateLeftBrute([1, 2, 3, 4, 5])); // [2,3,4,5,1]

// left rotate by d palace  dmeans double d place d  = 3
// mean we have to roate last 3 element to start it means last 3 elements come at first then after other number comes 
//...............................................Brute force approch..........................

function leftRotate(arr,d){
    let n = arr.length
    d = d % n // handle if d greater than n
    let temp = []
    for(let i = 0;i<d;i++){
        temp[i]=arr[i]
    
    }
    for(let i = d;i<n;i++){
        arr[i-d] =arr[i]
    }
    for(let i = 0;i<d;i++){
        arr[n-d+i] = temp[i] // here is formula n(lenth of arr)-d(the number we have to roate )+ i(it start with 0,than one )
        //(0 goes n-d index,1 goes(n-d)+172 goes(n-d)+2)ind
    }
    return arr
}
console.log(leftRotate([1, 2, 3, 4, 5, 6, 7], 3));
// Output: [4, 5, 6, 7, 1, 2, 3]




// Move zero to end 

function moveZero(array){
    let n = array.length
   //-1 when you’re dealing with indices/positions to mean “not found.”
    let j = -1 // assuming we not found any 0number then the below condition would run
    // it says "So far, I have not yet found any zero"
    // we taken -1 not any -2,-3 number becuse we took j + 1 if we take j =-2  than j+1 strat with -1 index which is invalid 
    // so beacuse of it we written -1 
    for(let i = 0;i<n;i++){
        if(array[i] == 0){ // if number is == 0
            j = i;// the moment i found 0 number in array than j become - 1 to j = i where i found zero number & lop get breck and from this idx it start pusing number like shift
            break// stop looking further | If 0 is at index 4, then j = 4. 
            // If 0 is at index 1, then j = 1.
        }
    }
    //no Non zero numbers
    if (j == -1) return array

    for(let i =j+1;i<n;i++){
        if(array[i] !== 0){ // if number is non 0
            [array[i],array[j]] = [array[j],array[i]]; //swaping
            j++
        }
    }
    return array
}
console.log(moveZero([1,0,2,3,5,6,0,0,7]))

//move number to zero brute force approach


function simpleSolution(arr){
    let n = arr.length
    let temp = []
    for(let i = 0;i<n;i++){
        if(arr[i]!==0){
            temp.push(arr[i])
        }
    }
    
    // Step 2: copy zeros
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(moveZeroBruteForce([1,0,2,3,0,4,0]));
