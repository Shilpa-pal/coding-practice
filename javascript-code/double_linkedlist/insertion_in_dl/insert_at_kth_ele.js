

class Node {
    constructor(data, next = null, back = null) {
        this.data = data;
        this.next = next;
        this.back = back
    }
}
function convertArrToDL(arr) {
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

function traversing(head) {
    let curr = head
    while (curr !== null) {
        process.stdout.write(curr.data + " ")
        // console.log(curr.data) //if above and this line print together it print to times
        curr = curr.next
    }
}

function insertBeforeHead(head, val) {
    let newNode = new Node(val, head, null)
    head.back = newNode
    return newNode
}
//insert before tail
function insertBeforeTail(head, val) {

    if (head.next === null) {
        return insertBeforeHead(head, val)
    }
    let tail = head
    while (tail.next !== null) {
        tail = tail.next
    }
    prev = tail.bac
    let newNode = new Node(val, tail, prev)
    tail.back = newNode
    prev.next = newNode
    return head

}
function insertBeforeKthEle(head, k, val) {
    //if in the array list have one node than call insertBeforHead
    if (k === 1) {
        return insertBeforeHead(head, val)
    }
    //assume temp = head
    let temp = head
    let cnt = 0 // 
    // run loop until tail become null
    while (temp !== null) {
        cnt++     // meanwhile do cnt++
        if (cnt === k) break; // if Cnt = k thN STOP the loop
        temp = temp.next // if not found than move to the next node
    }
    //
    let prev = temp.back
    //creting a new node with value,value next will be temp,value back will be prvious 
    let newNode = new Node(val, temp, prev)
    prev.next = newNode  //connecting to newnode 
    temp.back = newNode
    return head
}

let arr = [2, 3, 4, 6]

//convert Array to Dobly Linked list
let head = convertArrToDL(arr)

// inserting Before the Kth Element
head = insertBeforeKthEle(head, 1, 67)

traversing(head)