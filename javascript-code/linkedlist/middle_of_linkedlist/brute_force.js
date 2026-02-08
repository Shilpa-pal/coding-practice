//

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

//convert arr to linked list
console.log("after this linked list conversion start")
function convertArrToLinkedList(arr) {
    if (arr.length === 0) return null

    let head = new Node(arr[0])
    let prev = head
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i])
        prev.next = temp
        prev = temp
    }
    return head
}

function middleOfLinkedList(head) {
    if (head === null || head.next === null) return null
    let temp = head
    let cnt = 0
    while (temp !== null) {
        cnt++
        temp = temp.next
    }
    let mid = Math.floor(cnt / 2) + 1
    temp = head
    while (temp !== null) {

        // We do this because we are moving through the list again from the head.
        // If the middle position is 3, then mid = 3 - 1 = 2.
        // We keep subtracting 1 on each node.
        // When mid becomes 0, we have reached the middle node.
        mid = mid - 1
        if (mid === 0) break
        temp = temp.next
    }
    return temp

}

console.log("traversing step")
// traversing the lsit

function traversingList(head) {
    let temp = head
    let res = []
    while (temp !== null) {
        res.push(temp.data)
        temp = temp.next
    }
    // return res .// you can either return res or do console.log(res)

    // for this line no need to retrun res doing console.log will work
    console.log("It print all the list", res)

    // if we are writing this than traversing function will work but you have to do console.log also
}
// return res 


let arr = [3, 4, 5, 6, 7]
let head = convertArrToLinkedList(arr)

// it print mid of the linkedlsit
let findmiddle = middleOfLinkedList(head)
console.log(findmiddle.data)
// console.log("traversing function",traversingList(head))
traversingList(head)
