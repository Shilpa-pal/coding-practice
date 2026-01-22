
class Node {
    constructor(data, next= null) {
        this.data = data;
        this.next = next;
    }
}

function convertArrToLinkedList(arr) {
    let head = new Node(arr[0])
    let prev = head
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i])
        prev.next = temp;
        prev = temp
    }
    return head
}

function middleOfTheLinkedlist(head) {
    // Initialize the slow pointer to the head.
    let slow = head
    // Initialize the fast pointer to the head.
    let fast = head

    while (fast!== null && fast.next !== null) {


        // Move slow one step.
        slow = slow.next

        // Move fast two steps.
        fast = fast.next.next
    }
    // Return the slow pointer,
    // which is now at the middle node.

    return slow

}
// traversing the linked list

function printList(head) {
    while (head) {
        process.stdout.write(head.data + " ")
        head = head.next
    }
}

let arr = [2, 5, 6, 7, 8]
let head = convertArrToLinkedList(arr)
let findmiddle= middleOfTheLinkedlist(head)
console.log("Themid of oflinkedList",findmiddle.data)
printList(head)