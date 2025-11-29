class Solution {
    // Function to reverse the order of words in a string
    reverseword(s) {
        // Array to store words
        let words = []// store all words
        // Variable to store current word
        let word = "";  // store characters to build one word
        // Traverse each character
        for (let ch of s) {

            if (ch !== " ") {
                word += ch;
            }
            // If space and we have a word
            else if (word.length > 0) {
                words.push(word);
                // Reset word
                word = "";
            }
        }
        // Add last word if exists
        if (word.length > 0) {
            words.push(word)
        }
        // // Reverse array
        words.reverse();
        return words.join(" ");

    }
}
let object = new Solution()
let s = "amazing coding skills"
console.log(object.reverseword(s))

// solution without built in function 

function reverseWord(a) {
    let wordscoll = []
    let word = ""

    for (let ch of a) {
        if (ch !== " ") {
            word += ch
        }
        else if (word.length > 0) {
            wordscoll.push(word)
            //reset the word
            word = "";
        }
    }
    //             After loop ends, add last word
    // Because last word has no space after it.
    if(word.length>0){
        wordscoll.push(word)
    }
    let left =0
    let right = wordscoll.length-1
    while(left<right){
        [wordscoll[left],wordscoll[right]] = [wordscoll[right],wordscoll[left]]
        left++;
        right--;
    }
    // Building final string manually
    let result = ""
    //2. Looping through every word
    for(let i =0;i<wordscoll.length-1;i++){
        //. Adding the current word to result
        result += wordscoll[i]
        //Adding a space ONLY IF it's not the last word
        //This condition means:
//Add a space after every word
//EXCEPT the last word
//(because last word should NOT have trailing space at the end)
//Example:"jungle the to welcome", There is no extra space after “welcome”.
        if(i< wordscoll.length-1){//Adds a space after each word, Except the last one
            result += " "
        }
    }
    return result 

}