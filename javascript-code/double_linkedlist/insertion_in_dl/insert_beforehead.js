
class Node {
    constructor(data, next = null, back = null) {
        this.data = data;
        this.next = next;
        this.back = back  }
}

function convertArrtoDL(arr) {

    if (arr.length === 0) return null
    let head = new Node(arr[0])

    let prev = head
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i],null,prev)
        prev.next = temp
        prev = temp
    }

    return head
}

function insertBeforeHead(head,val){
    // creating newhead = that val is new head, newhead next will be is head, and newHead 
    // previous should pointing to null accroding to new head
    let newHead = new Node(val,head,null)
    //prvious head should point to the newHead
    head.back = newHead

    //once this done i written to the 
    return newHead
}

function print(head) {
    let curr = head
    while (curr) {
        // process.stdout.write(head.data + " ");
        console.log(curr.data)
        curr = curr.next
    }
    
}
let arr = [23, 4, 5, 67]
let head = convertArrtoDL(arr)
head = insertBeforeHead(head,20)
print(head)