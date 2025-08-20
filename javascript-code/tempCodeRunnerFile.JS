function diamondFull(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        // space 
        for (let j = 0; j < n - i - 1; j++) {
            row += " ";
        }
        // stars 
        for (let j = 0; j < 2 * i + 1; j++) {
            row += "*";
        }
        console.log(row)
    }
    for (let i = n - 1; i >= 1; i--) {
        let row = "";
        // space
        for (let j = 0; j < n - i; j++) {
            row += " ";
        }
        //stars
        for (let j = 0; j < 2 * i - 1; j++) {
            row += "*";

        }
        console.log(row)
    }
}
diamondFull(4)