
//A 
// B B
// C C C
// D D D D
// E E E E E
// here i did for integer 
function pattern16(n) {
    for (let i = 1; i <= n; i++) {
        let row = " ";
        for (let j = 1; j <= i; j++) {
            row += i + " ";
        }
        console.log(row)
    }
}
pattern16(5)

// here is alphabetically form 

function patternAlph16(n) {
    for (let i = 0; i <= n; i++) {
        let row = " ";
        for (let j = 0; j <= i; j++) {
            row += String.fromCharCode(65 + i) + " "  // this line play important role to convert number to string
            //Adding i shifts it to the next alphabet. 65 + 0 → "A", 65 + 1 → "B" ,65 + 2 → "C"
        }
        console.log(row)
    }
}
patternAlph16(5)

//alternative 
function patternAlter16(n) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i <= n; i++) {
        let row = " ";
        for (let j = 0; j <= i; j++) {
            row += alphabet[i] + " "   // it pick by index
        }
        console.log(row.trim())  // trim() used To remove the extra space at the end of each row
    }
}
patternAlter16(5)

//pattern17
//   A     
//     ABA    
//    ABCBA   
//   ABCDCBA  
//  ABCDEDCBA 
// ABCDEFEDCBA

function patternPalindrome17(n) {
    for (let i = 0; i < n; i++) {
        let row = " ";
        // space
        for (let j = 0; j < n - i - 1; j++) // n - i - 1 → //spaces decrease correctly row by row.
            row += " "
        //  asending alphabets alphabets
        for (let k = 0; k <= i; k++) {     // it prevent to miss 1 digit Row 0: prints nothing (no A at all ).
            // Row 1: prints only "A" (instead of ABA) Row 2: prints AB (instead of ABC). Row 3: prints ABC (instead of ABCD).
            // Row 4: prints ABCD (instead of ABCDE).
            row += String.fromCharCode(65 + k)
        }
        for (let d = i - 1; d >= 0; d--) {      // here used >= 0 becuse it prevent to missing last row
            row += String.fromCharCode(65 + d)      //
        }
        console.log(row)
    }
}

patternPalindrome17(5)

// pattern18
//Problem Statement: Given an integer N, print the following pattern : 

// F
// E F
// D E F
// C D E F
// B C D E F
// A B C D E F

function pattern18(n) {
    for (let i = n; i >= 0; i--) {
        let row = "";
        for (let j = i; j <= n; j++) { //Row 1 (i = 5): start j=5 → F
            // Row 2 (i = 4): start j=4 → E F
            // Row 3 (i = 3): start j=3 → D E F
            row += String.fromCharCode(65 + j) + " "
        }
        console.log(row.trim())
    }
}
pattern18(5)

// alternative pf above 
function patternAlter18(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        // starting from 'E' - i (like ASCII math in C++)
        for (let ch = 69 - i; ch <= 69; ch++) {   // 69 is ASCII of 'E'
            row += String.fromCharCode(ch) + " ";
        }
        console.log(row);
    }
}

patternAlter18(5);

//pattern19
//************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *
// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
//************

function pattern19(n) {
    // Top Half of Pattern
    let spaceIs = 0; // spaces start at 0 (no gap in the very first row)
     // Start from i = 0 because the first row is "full stars"
    for (let i = 0; i < n; i++) {
        let row = "";
        // // Left stars → decreases as i increases
        for (let j = 1; j <= n - i; j++) {
            row += "*"
        }

        // Middle spaces → decreases as i increases
        for (let j = 0; j < spaceIs; j++) {
            row += " "
        }
        //  Right stars → same as left stars
        for (let j = 1; j <= n - i; j++) {
            row += "*"
        }
         // Increase space count for next row (since stars shrink)
        spaceIs += 2
        console.log(row)
    }
    //bottom part of pattern
    /// Reset spaces to max for bottom part

    spaceIs = 2 * n - 2;
    //Start from i = 1, not 0, because the middle row (i = 0 in bottom)
    // was already printed by the top half.
    for (let i = 1; i <= n; i++) {   // we i = 1 write becuse
        let row = "";
        // Left stars → increases as i increases
        for (let j = 1; j <= i; j++) {
            row += "*"
        }

        // Middle spaces → decreases as i increases
        for (let j = 0; j < spaceIs; j++) {
            row += " "
        }
        // // Right stars → same as left stars
        for (let j = 1; j <= i; j++) {
            row += "*"
        }
        //  // Decrease spaces for next row
        spaceIs -= 2
        console.log(row)
    }

}
pattern19(5)



// alternative ----------------------------------------------------------------------------------------------
function newHollowHourglass(n) {
  let pattern = "";

  // 1. Top Border
  for (let i = 0; i < 2 * n; i++) {
    pattern += "*";
  }
  pattern += "\n";

  // 2. Upper Half (shrinking)
  // Loop i from 1 to n-1
  for (let i = 1; i < n; i++) {
    // Left stars: n - i
    for (let j = 0; j < n - i; j++) {
      pattern += "*";
    }
    // Middle spaces: 2 * i - 1
    for (let j = 0; j < 2 * i - 1; j++) {
      pattern += " ";
    }
    // Right stars: n - i
    for (let j = 0; j < n - i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }

  // 3. Lower Half (growing)
  // Loop i downwards from n-1 to 1 to create the mirror
  for (let i = n - 1; i >= 1; i--) {
    // Left stars: n - i
    for (let j = 0; j < n - i; j++) {
      pattern += "*";
    }
    // Middle spaces: 2 * i - 1
    for (let j = 0; j < 2 * i - 1; j++) {
      pattern += " ";
    }
    // Right stars: n - i
    for (let j = 0; j < n - i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }

  // 4. Bottom Border
  for (let i = 0; i < 2 * n; i++) {
    pattern += "*";
  }
  pattern += "\n";

  console.log(pattern);
}

// Call the function with n=5 to match your image
newHollowHourglass(5);