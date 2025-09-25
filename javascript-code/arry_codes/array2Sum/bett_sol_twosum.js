
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