function findmajorityEle(num) {
    let n = num.length
    num.sort((a, b) => a - b)

    let freq = 1, ans = num[0]
    for (let i = 1; i < n; i++) {
        if (num[i] === num[i - 1]) {
            freq++
        } else {
            freq = 1
            ans = num[i]
        }
        if (freq > n / 2) {
            return ans
        }

    }
    return -1
}

let ar = [0, 1, 1, 1, 1, 2,1, 2,1, 2, 0]
console.log(findmajorityEle(ar))