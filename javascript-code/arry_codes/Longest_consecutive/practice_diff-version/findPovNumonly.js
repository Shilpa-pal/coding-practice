//Count Consecutive Positive Numbers

function countConsecutivePositives(arr) {
    let n = arr.length
    //Checks if the array is empty.If yes, return 0 because there are no elements to check.
    if (n === 0)
        return 0
    //Creates an empty Set named st.
    //A Set automatically stores unique elements and allows fast searching using .has().
    let st = new Set()
    let longest = 0//Stores the length of the longest consecutive positive sequence found so far.Initially set to 0.
    for (let i = 0; i < n; i++) {//This loop adds each array element into the Set st.
        st.add(arr[i])
    }
    //A for...of loop is used to go through each number in the Set one by one.
    for (let num of st) {

        // Start only if number is positive AND previous number doesn't exist
        if (num > 0 && !st.has(num - 1)) {  //num > 0 → the number is positive
            //!st.has(num - 1) → the previous number does not exist in the set
            let cnt = 1
            let currentNum = num
            // Count next consecutive positive numbers
            //currentNum = 4
            //cnt = 1
            while (st.has(currentNum + 1)) {  // eg st.has(4 + 1) → st.has(5) → ✅ true
                currentNum = currentNum + 1  // currentNum = 5
                cnt += 1                      // cnt = 2

            }
            longest = Math.max(longest, cnt)
        }
    }
    return longest//After checking all numbers, return the longest consecutive positive count.
}
let arr = [1, 2, -3, 4, 5, 6, -1, 2];
console.log(countConsecutivePositives(arr))


// using map Plain Object ({})  same approach 
// by doing this we need to convert string to number line no.54 if we use Map we don't need to convert it 
function countConsecutivePositives(arr) {
    let map = {};
    for (let num of arr) {
        if (num > 0) map[num] = true; // store only positives
    }

    let longest = 0;
    //map is a plain object {} → not directly iterable with for…of.
    //We use for…in because map is an object, and we want to go through its keys (the positive numbers).
    //We then convert keys to numbers with Number(num) so we can do math with them.
    for (let num in map) { //plain object  Used for…in
        //In returns strings, you had to do Number(num) to do arithmetic.
        num = Number(num);
        if (!map[num - 1]) { // start of sequence
            let cnt = 1;
            let currentNum = num;
            // run loop untill currentnum +1 number is present 
            while (map[currentNum + 1]) {
                currentNum++;
                cnt++;
            }

            longest = Math.max(longest, cnt);
        }
    }

    return longest;
}

let array = [1, 2, -3, 4, 5, 6, -1, 2];
console.log(countConsecutivePositives(array)); // 3


//using above by Map

function ConsecutivevOnlybyMap(ar) {
    let map = new map()

    for (let num of ar) {
        if (num > 0) map.set(num, true)
    }
    let longest = 0
    //  // no need for Number(num) — it's already a number
    // Map version Used for…of
    for (let [num] of map) { //used [num] it give only the key (ignore value)
        // no need for Number(num) — it's already a number

        if (!map.has(num - 1)) {// start of a sequence
            let cnt = 1
            let currentNum = num
            // keep counting consecutive numbers
            while (map.has(currentNum + 1)) {//
                currentNum++;
                cnt++;
            }
            longest = Math.max(longest, cnt);

        }
         return longest;

    }
}
let ar = [1, 2, -3, 4, 5, 6, -1, 2];
console.log(cConsecutivevOnlybyMaps(ar)); // 3


//finding postive number only using sorting

    function countConsecutivePositives(array2) {
        array2 = array2.filter(x => x > 0); // only positive numbers
        if (array2.length === 0) return 0;

        array2.sort((a, b) => a - b); // sort ascending
        let longest = 1, cnt = 1;

        for (let i = 1; i < array2.length; i++) {
            if (array2[i] === array2[i - 1]) continue; // skip duplicate
            if (array2[i] === array2[i - 1] + 1) {
                cnt++;
            } else {
                cnt = 1;
            }
            longest = Math.max(longest, cnt);
        }

        return longest;
    }

    let array2 = [1, 2, -3, 4, 5, 6, -1, 2];
    console.log(countConsecutivePositives(array2)); // 3
