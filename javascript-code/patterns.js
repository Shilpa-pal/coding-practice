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