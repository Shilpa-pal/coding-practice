
function KokoeatBanana(array, h) {
    let n = array.length
    let maxElement = Math.max(...array)
    if (n > h) return -1
    let low = 1
    let high = maxElement
    let result = -1

    function eatBananaSum(hour) {
        let sum = 0
        for (let num of array) {
            sum += Math.ceil(num/hour)
        }
        return sum
    }
    while (low <= high){
        let mid = Math.floor(low + high)/2
        sum = eatBananaSum(mid)
        if(sum<=h){
            result = mid
            high = mid -1
        }else{
            low = mid + 1
        }
    }
    return result 
}
let array = [3,6, 7,11,13]
let h =10

console.log("Answer of Koko eating banana is ",KokoeatBanana(array,h))