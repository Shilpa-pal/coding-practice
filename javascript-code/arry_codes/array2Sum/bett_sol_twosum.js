
//  Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.//
// 2nd variant: brute force

function varieanttwo(arr1,t){
    let n = arr1.length
    for(let i = 0;i<n;i++){
        for(let j = i +1;j<n;j++){// start wth i + 1 becuse when it start with 0 because it start comparing the same element with itself (arr[0] + arr[0]).
            if(arr1[i]+arr1[j] === t){// Avoids repeating pairs in reverse (arr[1] + arr[2] and later arr[2] + arr[1]).
                return [i,j] // returning the indexes 
            }
        }
    }
    return [-1,-1]
}
let arr1 = [2, 6, 5, 8, 11]
let t = 14
let ans1 = "This is the answer for variant 2:" + varieanttwo(arr1, t);
console.log(ans1)

// better solution 
//variant 2 check sum of number present which given in target number If yes then show which index number 

function findIndxSum(a, t) {
    let map = new Map()
    for (let i = 0; i < a.length; i++) {
        let no = a[i]
        let numpresent = t - no
        if (map.has(numpresent)) {   // it check does it exist in map
            return [map.get(numpresent), i]  // get tell give me index of numpresent(i.e value we get after doin t-no)
        } else {
            (map.set(no, i)) // set setting the a[i](2) ,i(0)
        }
    }
    return [-1, -1]//// if no pair found

}
console.log(findIndxSum([2, 3, 1, 4], 4))

