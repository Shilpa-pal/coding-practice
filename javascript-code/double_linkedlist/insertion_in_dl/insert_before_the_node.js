// insert before the given node

class Node {
    constructor(data, next = null, back = null) {
        this.data = data;
        this.next = next;
        this.back = back;
    }
}

function convertArrtoDL(arr) {
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
// insert before the node

function insertBeforeTheNode(head,node, val) {
    if (node.back === null) {
        //st  is value ,next is pointing to node and node back is prev.
        let newNode = new Node(val, node, null)
        node.back = newNode
        return newNode   // new head 
    }

    // I need the prev node 
    let prev = node.back
    let newNode = new Node(val, node, prev)

    prev.next = newNode
    node.back = newNode

    return head // return head

}
//traversing the list of array 
function traversingList(head) {
    while (head) {
        process.stdout.write(head.data + " ")
        head = head.next
    }
}
let arr = [2, 4, 7, 9]
let head = convertArrtoDL(arr)
head = insertBeforeTheNode(head,head.next, 100)
traversingList(head)