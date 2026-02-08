
// Find all pairs with given sum in DLL.


class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

//converting arr to doubly linked list'
function convertArrTODl(arr) {
    if (arr.length === 0) return null
    let head = new Node(arr[0])
    let prev = head
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i], null, prev)
        prev.next = temp
        prev = temp
    }
    return head
}


// traversing the list
function printList(head) {
    while (head) {
        process.stdout.write(head.data + " ")
        head = head.next
    }
    console.log()
}

//Find all pairs with given sum in DLL.

function findSumOfPair(head, sum) {
    let temp1 = head
    let temp2 = head.next
    let ds = []
    while (temp1 !== null && temp1.data + temp2.data <= sum) {
        while (temp2 !== null) {
            if (temp1.data + temp2.data === sum)
                ds.push(temp1.data, temp2.data)
        }
        temp2 = temp2.next
    }
    temp1 = temp1.next
    return head
}

let arr = [1, 2, 3, 4, 9]
let head = convertArrTODl(arr)
head = findSumOfPair(head, 5)
printList(head)
