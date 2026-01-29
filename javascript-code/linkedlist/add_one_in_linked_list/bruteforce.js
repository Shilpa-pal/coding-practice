
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

function convertArrToLinkedList(arr) {
    if (arr.length === 0) return null
    let head = new Node(arr[0])
    let prev = head
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i])
        prev.next = temp
        prev = temp
    } return head
}
function reverselinkedList(head) {
    let prev = null
    let curr = head
    while (curr !== null) {
        let next = curr.next;
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}
function addOneInlinkedList(head) {
    head = reverselinkedList(head)
    let temp = head
    let carry = 1
    // Loop until the linked list ends or the carry becomes 0
    while (temp && carry) {
        let sum = temp.data + carry// Think of sum as a chocolate 🍫: sum = 17 
        // sum % 10 → give 7 to current node
        // sum / 10 → pass 1 forward 
        // You can’t keep both in one place.
        temp.data = sum % 10 // it give the last digit that store in temps
        carry = Math.floor(sum / 10) //Extract carry.


        // If there's no next node and we still have a carry, append a new node
        if (!temp.next && carry) {

            //Create a new node to store leftover carry (1).
            temp.next = new Node(carry);

            //Carry handled, so reset it.
            carry = 0;
        }
        temp = temp.next
    }
    // Reverse the list back to restore original order
    head = reverselinkedList(head)
    return head

}
function printLL(head) {
    //print list return string
    /*let temp = head
    let result = ""
    while (temp !== null) {
        result += temp.data + " "
        temp = temp.next
    }
    return result.trim()*/
    
    let temp = head
    let result = []
    while (temp !== null) {
        result.push(temp.data)
        temp = temp.next
    }
    return result
}
let arr = [9, 9, 9]
let head = convertArrToLinkedList(arr)
head = addOneInlinkedList(head)
printLL(head)