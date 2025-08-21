function pattern19(n) {
    // to part of pattern 
    let spaceIs = 0;
    for (let i = 0; i < n; i++) {
        let row = "";
        // stars
        for (let j = 1; j <= n - i; j++) {
            row += "*"
        }

        // spaces 
        for (let j = 0; j < spaceIs; j++) {
            row += " "
        }
        // stars
        for (let j = 1; j <= n - i; j++) {
            row += "*"
        }
        spaceIs += 2
        console.log(row)
    }
    //bottom part of pattern
    spaceIs = 2 * n - 2;
    for (let i = 1; i <= n; i++) {
        let row = "";
        // stars
        for (let j = 1; j <= i; j++) {
            row += "*"
        }

        // spaces 
        for (let j = 0; j < spaceIs; j++) {
            row += " "
        }
        // stars
        for (let j = 1; j <= i; j++) {
            row += "*"
        }
        spaceIs -= 2
        console.log(row)
    }

}
pattern19(5)
