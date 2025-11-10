
function largestDivisor(arr, limit) {
  let maxElement = Math.max(...arr);
  let result = -1;  // to store the last valid divisor

  for (let divisor = 1; divisor <= maxElement; divisor++) {
    let sum = 0;
    for (let num of arr) {
      sum += Math.ceil(num / divisor);
    }

    if (sum <= limit) {
        // valid, but we keep checking for larger
        // we written below line because we will keep cheacking until find the largest divisor so mean while when ,find largest divisor befor one so keep update until loop stop 
      result = divisor// reason:Whenever we find divisor that keeps the total sum within the limit,it means this divisor works.
      //But we don’t return immediately (unlike smallest divisor logic),
// because we are looking for the largest one —
// so there might be an even bigger divisor later in the loop that still works.
      
    }
  }

  return result;
}
arr = [8, 4, 2, 3];
limit = 10;
console.log(" Longest Divisor Given a Threshold",largestDivisor(arr,limit))