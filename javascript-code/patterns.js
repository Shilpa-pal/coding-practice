// // Function to print square pattern

function print1(n) {
    for (let i = 0; i < n; i++) {    // outerloop 
        let row = "";
        for (let j = 0; j < n; j++) {   // inner loop 
            row += "*";
        }
        console.log(row)
    }

}

function main() {
    let t = 2    // number of test cases
    let testcase = [2, 4]  // inputs for each test case
    for (let i = 0; i < t; i++) {
        let n = testcase[i]
        print1(n)
    }
}
main()

// function to print priamid 

function pyramind(n) {
    for (let i = 0; i <= n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row += "*"
        }
        console.log(row)
    }

}
pyramind(5)

// Given an integer N, print the following pattern : 

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6

function printInt(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j + "";

        }
        console.log(row)
    }
}
printInt(5)

// # pttern 4:Given an integer N, print the following pattern : 
//1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6

function print_Pyramid_Int(n) {
    for (let i = 1; i <= n; i++) {
        let row = ""
        for (let j = 1; j <= i; j++) {
            row += i + "";
        }
        console.log(row)
    }
}
print_Pyramid_Int(5)

// pattern 5 # opposite pyraminds

// ****+
// ***
// **
// *
// here is the logic  n-i+ 1 = 4-1+1 = 4 *
// here is the logic  n-i+ 2 = 4-2+1 = 3*
// here is the logic  n-i+ 3 = 4-3+1 = 2*
// here is the logic  n-i+ 4 = 4-4+1 = 1* 
// gets print
function pattern5(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n - i + 1; j++) {
            row += "*"
        }
        console.log(row)
    }
}
function main() {
    let t = 2    // number of test cases
    let testcase = [4, 4]  // inputs for each test case
    for (let i = 0; i < t; i++) {
        let n = testcase[i]
        pattern5(n)
    }
}
main()

// pattern 6v

//Result:
// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2 
// 1
function pattern6(n) {
    for (let i = 1; i <= n; i++) {
        let row = " ";
        for (let j = 1; j <= n - i + 1; j++) {
            row += j + " ";
        }
        console.log(row)
    }
}
pattern6(6)

//Result: pattern7
//      *     
//     ***    
//    *****   
//   *******  
//  ********* 
// ***********

function pattern7(n) {
    for (let i = 0; i < n; i++) {
        let row = "";

        // spaces (before stars)
        for (let j = 0; j < n - i - 1; j++) {
            row += " ";
        }

        // stars
        for (let j = 0; j < 2 * i + 1; j++) {
            row += "*";
        }

        // spaces (optional, for symmetry) below code if i also comet still it will run properly
        for (let j = 0; j < n - i - 1; j++) {
            row += " ";
        }

        console.log(row);
    }
}

pattern7(5);

//pattern8 Diamod shape i start with i=1

function pattern8(n) {
    // top half
    for (let i = 1; i <= n; i++) {
        let row = "";
        // spaces
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }
        // stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += "*"
        }
        console.log(row)
    }
    // Bottom half
    for (let i = n - 1; i >= 1; i--) {
        let row = "";
        // spaces
        for (let j = 1; j <= n - i; j++) {
            row += " ";
            // stars
        } for (let k = 1; k <= 2 * i - 1; k++) {  // how many stars (*) to print in row i.
            row += "*"
        }
        console.log(row)
    }

}
pattern8(4)


// pattern bottom of diamond
function bottomHalf(n) {
    for (let i = n - 1; i >= 1; i--) {
        let row = "";

        // spaces
        for (let j = 0; j < n - i; j++) {
            row += " ";
        }

        // stars
        for (let j = 0; j < 2 * i - 1; j++) {  //  2 * i - 1 it is used to n0t repeat 2n-1 line mean .[2(4)-1] = 13 so widest row is 7
            row += "*";
        }

        console.log(row);
    }
}

bottomHalf(4);

// here I  start(intialize) with i = 0 
function diamondFull(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        // space (n - i - 1) it used when i = 0 only 
        for (let j = 0; j < n - i - 1; j++) {
            row += " ";
        }
        // stars (2 * i + 1) it used when i = 0 means when i intialize with 0
        for (let j = 0; j < 2 * i + 1; j++) {
            row += "*";
        }
        console.log(row)
    }
    // bottom of the daimond part take a note that there should be no repeat of line 
    for (let i = n - 1; i >= 1; i--) {
        let row = "";
        // space here bottom i used n- 1 so it wil prevent from reapting the line
        for (let j = 0; j < n - i; j++) {
            row += " ";
        }
        //stars -this also (2 * i - 1) prevent to print extra line of stars
        // if we have intialize reverse diamond with i= n- 2 than we don't have need to 
        // write above  this n - i and  below (2 * i - 1) we can keep same as top part of diamond 
        //like  this n - i - 1 th and (2 * i + 1)
        for (let j = 0; j < 2 * i - 1; j++) {
            row += "*";

        }
        console.log(row)
    }
}
diamondFull(4)

// //I am writing this code when i intializeing the bottom of diamond with 
// Top half → i < n (not <= n)
// Bottom half → start from i = n-2 (to avoid repeating the widest row)
function diamondFull(n) {
    // Top half
    for (let i = 0; i < n; i++) {
        let row = "";
        // spaces
        for (let j = 0; j < n - i - 1; j++) {
            row += " ";
        }
        // stars
        for (let j = 0; j < 2 * i + 1; j++) {
            row += "*";
        }
        console.log(row);
    }

    // Bottom half
    for (let i = n - 2; i >= 0; i--) {
        let row = "";
        // spaces
        for (let j = 0; j < n - i - 1; j++) {
            row += " ";
        }
        // stars
        for (let j = 0; j < 2 * i + 1; j++) {
            row += "*";
        }
        console.log(row);
    }
}

diamondFull(4);


// write half diamond
function pattern9(n) {
    // Top half
    for (let i = 0; i < n; i++) {
        let row = " ";
        // stars
        for (let j = 0; j < 2 * i + 1; j++) {
            row += "*";
        }
        console.log(row);
    }

    // Bottom half
    for (let i = n - 1; i >= 1; i--) {
        let row = " ";
        // stars
        for (let j = 0; j < 2 * i - 1; j++) {
            row += "*";
        }
        console.log(row);
    }
}
pattern9(n)

function pattern10(n) {
    // Top half
    for (let i = 0; i < n; i++) {
        let row = " ";
        // stars
        for (let j = 0; j < 2 * i + 1; j++) {
            row += "*";
        }
        console.log(row);
    }
    for (let i = n - 1; i >= 1; i--) {
        let row = " ";

    }
    // stars
    for (let j = 0; j < 2 * i - 1; j++) {  //  2 * i - 1 it is used to not repeat 2n-1 line mean .[2(4)-1] = 13 so widest row is 7
        row += "*";
    }

    console.log(row);
}
pattern9(10)

//pattern 11
// 1
// 01
// 101
// 0101
// 10101
// 010101

function pattern10(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            if (i % 2 === 1) {
                row += (j % 2 === 1) ? "1" : "0";
            } else {
                row += (j % 2 === 1) ? "0" : "1";
            }
        }
        console.log(row)
    }
}
pattern10(6)


//alternative way of do it 
function patternn10(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += (i + j) % 2   // here is magic formula  
            // If (i + j) is even → % 2 = 0
            //If (i + j) is odd → % 2 = 1
        }
        console.log(row)
    }

}
patternn10(6)

// alternate of above 
function printPatternAlter(n) {
    for (let i = 0; i < n; i++) {
        let start = (i % 2 === 0) ? 1 : 0;  // row starts with 1 if even row, else 0 and from here we get value of start 
        let row = "";

        for (let j = 0; j <= i; j++) {
            row += start;
            start = 1 - start;  // flip 1 <-> 0
        }

        console.log(row);
    }
}

printPatternAlter(5);

// it print without using row = ""(spaace ) and row+=start
function printPattern(n) {
    for (let i = 0; i < n; i++) {
        let start = (i % 2 === 0) ? 1 : 0;

        for (let j = 0; j <= i; j++) {
            process.stdout.write(start.toString());  // print without newline
            start = 1 - start;
        }

        console.log(); // move to next line
    }
}

printPattern(5);