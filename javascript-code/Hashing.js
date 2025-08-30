function countFreq(nums) {
    // Create an empty Map to store frequency of each number
    let freqMap = new Map();

    // Loop through each number in the array
    for (let num of nums) {
        // If number is already in the map, increment its count
        if (freqMap.has(num)) {
            freqMap.set(num, freqMap.get(num) + 1);
        } 
        // Otherwise, add it to the map with count = 1
        else {
            freqMap.set(num, 1);
        }
    }

    // Prepare the result as an array of [element, frequency]
    let result = [];
    for (let [key, value] of freqMap) {
        // Push each pair [unique number, its frequency] into result
        result.push([key, value]);
    }

    // Return the final list of pairs
    return result;
}

// Example usage:
console.log(countFreq([1, 2, 2, 1, 3]));
// Output: [[1, 2], [2, 2], [3, 1]]
