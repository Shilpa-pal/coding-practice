function frequency(arr,quiries){
    const freq = new map ()

    // build a frequncy map 
    for(let num of arr){
        freq.set(num,freq.get(num)||0)+ 1  //num → key (the thing you’re counting, e.g., 1, 3, 12, etc.)
        //(freq.get(num) || 0) + 1 → value (the new frequency count to store)
    }

    //answer of quiries
    let result = []
    for(let q of quiries){
        result.push(freq.get(q)||0);
    }
    return result 
}
console.log(frequency([1,2,3,1,3,2,12], [1,2,3,4,12]));


function highestAndLowestFrequency(arr) {
  const freq = new Map();

  // Step 1: Build frequency map
  for (let num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  // Step 2: Find max and min frequency
  let maxFreq = -Infinity, minFreq = Infinity;
  let maxElement = null, minElement = null;

  for (let [num, count] of freq) {
    if (count > maxFreq) {
      maxFreq = count;
      maxElement = num;
    }
    if (count < minFreq) {
      minFreq = count;
      minElement = num;
    }
  }

  return [maxElement, minElement];
}

// Example 1
console.log(highestAndLowestFrequency([10, 5, 10, 15, 10, 5])); 
// Output: [10, 15]

// Example 2
console.log(highestAndLowestFrequency([2, 2, 3, 4, 4, 2])); 
// Output: [2, 3]
