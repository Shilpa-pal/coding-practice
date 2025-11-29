function reverseWords(s) {
    let n = s.length;
    let ans = "";

    // Reverse the whole string
    s = s.split("").reverse().join("");

    for (let i = 0; i < n; i++) {
        let word = "";
        while (i < n && s[i] !== ' ') {
            word += s[i];
            i++;
        }

        // Reverse the current word
        word = word.split("").reverse().join("");

        if (word.length > 0) {
            ans += " " + word;
        }
    }

    // Remove leading space
    return ans.substring(1);
}
console.log(reverseWords("I live in a Mumbai."))

//without built in function 
function reverseWords(s) {
    let arr = s.split("");
    let n = arr.length;
    let ans = "";

    // Step 1: Reverse the whole string (arr)
    let left = 0, right = n - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    // Step 2: Reverse each word back to normal
    let i = 0;
    while (i < n) {
        let word = "";

        // Collect characters of a word
        //charter add to words until space not come
        while (i < n && arr[i] !== " ") {
            word += arr[i];
            i++;
        }

        // Reverse this word inside arr[]
        // When reversing full string that time we use below condition 
        // start = 0
        // end = n - 1
        //When reversing a word inside a string we do below
        let start = i - word.length; // word start index
        let end = i - 1;             // word end index

        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }

        i++; // Move over space
    }

    return arr.join("");
}

console.log(reverseWords("I live in a Mumbai."));
