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

        // spaces (optional, for symmetry)
        // for (let j = 0; j < n - i - 1; j++) {
        //     row += " ";
        // }

        console.log(row);
    }
}

pattern7(5);