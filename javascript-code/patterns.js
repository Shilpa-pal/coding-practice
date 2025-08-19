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
