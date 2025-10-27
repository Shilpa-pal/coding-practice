function forFirstoccurancr(array, n, x1) {
    let low = 0, high = n - 1
    let first = -1
    while (low <= high) {
        let mid = Math.floo((low + high) / 2)
        if (array[mid] === x1) {
            first = mid, high = mid - 1
        } else if (array[mid] < x1) {// x is samller than arr[i] so go on right
            low = mid + 1

        } else {//arr[i]>x mean x is bigger than arr[i] so go on left 
            high = mid - 1
        }
    }
    return first
}


function forlastOccurrence(array, n, x1) {
    let low = 0, high = n - 1
    let last = -1

    while (low <= high) {
        let mid = Math.max((low + high) / 2)
        if (array[mid] === x1) {
            last = mid,// for now this can be my answer
                low = mid + 1// I am looking for the last so i should go on right that is low = mid +1

        } else if (array[mid] < x1) {// x is samller than arr[i] so go on right
            low = mid + 1
        } else {//arr[i]>x mean x is bigger than arr[i] so go on left 
            high = mid - 1
        }
        return last
    }
}

//Note;below if we not found 1st occuance than there will be not last occurance for sure
function bothFirstLast(array,n,x1){
    let fs = forFirstoccurancr(array,n,x1)
    if(fs === -1) return -1,-1//
    let ls = forlastOccurrence(array,n,x1)
    return [fs,ls]
}

let array  = [2,8,8,8,8,8,11,13]
let x1= 8
let n = array.length
console.log("In this  we made binary of first an d last seprately,",bothFirstLast(array,n,x))