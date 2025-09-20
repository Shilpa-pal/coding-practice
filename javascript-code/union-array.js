//brute force approach for union 

function esayWaySol(arr1, arr2) {
    let n1 = arr1.length
    let n2 = arr2.length

    let myset = new Set()
    for (let i = 0; i < n1; i++) {
        myset.add(arr1[i])
    }
    for (let i = 0; i < n2; i++) {
        myset.add(arr2[i])
    }
    const temp = Array.from(myset)
    temp.sort((x, y) => x - y) // asending order sort
    // if we wnat descending just flip y-x
    return temp;
}
console.log(esayWaySol([1, 10, 2], [1, 3, 5, 6]))


// Optimal solution of union of numbers
function findUnion(a, b) {
    let n1 = a.length
    let n2 = b.length
    let i = 0
    let j = 0
    let union = []

    while (i < n1 && j < n2) {// if i less than j push i becuse in set we need 1st smalller number
            //if union length empty we inserting 1st number then push it || cheacking in union.length have same  value or not ? if not then push in  
        if (a[i] <= b[j]) {
            if (union.length === 0 || union[union.length - 1] !== a[i]) { //union.length - 1 gives the index of the last element (here: 2).1
                union.push(a[i])
            }
            i++
        } else {
            if (union.length === 0 || union[union.length - 1] !== b[j]) {
                union.push(b[j])
            }
            j++
        }
    }
    while (i < n1) {
        if (union[union.length - 1] !== a[i]) {
            union.push(a[i])
        }
        i++
    }
    while (j < n2) {
        if (union[union.length - 1] !== b[j]) {
            union.push(b[j])
        }
        j++
    }
    return union
}
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const b = [2, 3, 4, 4, 5, 11, 12]

const union = findUnion(a, b)

console.log("Union of arr1 and arr2 is:")
console.log(union.join(" "))


// Linear search function
function search(arr, n, num) {
    for (let i = 0; i < n; i++) {
        if (arr[i] === num) { // the index of i === the given number we have to check if found it give index number where 4 is present
            return i; // return index if found
        }
    }
    return -1; // return -1 if not found
}

// Example usage
const arr = [1, 2, 3, 4, 5];
const num = 4;
const n = arr.length;

const val = search(arr, n, num);
console.log(val); // Output: 3

// intersection of the array
function findArrayIntersection(A,B){
    let ans = []
    let m = B.length

    let vis = Array(m).fill(0)  // equivalent of vis[m] = {0};
    //Array(3) → [ <3 empty items> ] Array(4)-4 empty item 
//.fill(0) → fills all positions of the array with 0.
//Example: Array(3).fill(0) → [0, 0, 0]
   // vis[j] keeps track of which elements in array B have already been used in the intersection.
   // If vis[j] === 0, it means B[j] has not been used yet.
   // Once you use it (ans.push(B[j])), you mark it as used: vis[j] = 1.

    for(let i = 0;i<A.length;i++){
        for(let j = 0;j<m;j++){
            if(A[i] ===B[j] && vis[j] === 0){
                ans.push(A[i]);
                vis[j]=1;
                break;
            }
            if (B[j] > A[i]) break;
        }
    }
    return ans;
}
 const A = [1, 2, 2, 3]; const B = [2, 2, 4]
  console.log(findArrayIntersection(A, B)); // Output: [2,2]


  //optimal solution for intersection

  function interSection(A1,B1){
    let i = 0
    let j = 0
    let ans = []
    while( i<A1.length && j<B1.length){
        if(A1[i]<B1[j]){   // if A1 less than B1 then move to next index don't check i.e i++
            i++
        }else if(B1[j]<A1[i]){// if B1 less than a1 then move to next index don't check i.e j++
            j++
        }else{
            ans.push(A1[i]); // here we can write B1[j] also any can be work 
            i++
        }
    }
    return ans
  }
  const A1 = [1,2,2,3,3,4,5,6,7]; const B1=[2,2,3,5,7]
  console.log(interSection(A1,B1))
  //output = [ 2, 2, 3, 3, 5, 7 ]