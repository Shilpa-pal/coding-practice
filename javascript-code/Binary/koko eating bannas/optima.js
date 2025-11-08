
// here same logic applied of find samllest divisor & longest divisor in thurshold.
function kokoEatingbanana(arr, h) {
    let n = arr.length
    if (n > h) return -1
    let maxElement = Math.max(...arr)
    let low = 1
    let high = maxElement
    let result = -1

    function calculatehour(hour) {
        let totalhour = 0
        for(let i =0;i<n;i++ ){
            totalhour += Math.ceil(arr[i]/hour)
        }
        return totalhour
    }
    while(low<=high){
        let mid = Math.floor((low +high)/2)
        let hour = calculatehour(mid)
        if(hour<=h){
            result = mid // possible answer
             high = mid -1 // try smaller speed (fewer bananas/hour)
        }else{
            low = mid +1 // too slow → increase speed
        }
    }
    return result 
}
let arr = [3, 6, 7, 11];
let h = 8;
console.log("Answer of Koko eating banana is ",kokoEatingbanana(arr,h))