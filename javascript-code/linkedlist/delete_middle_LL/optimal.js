
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

class Solution {
    deleteMiddle(head) {
        if (head === null || head.next === null) return null

        let slow = head
        let fast = head
        while (fast !== null && fast.next !== null) {
            slow = slow.next;

            fast = fast.next.next
        }
        // Bypass the middle node
        slow.next = slow.next.next;
        return head
    }
}

// Function to print linked list
function printLL(head) {
    let temp = head;
    while (temp !== null) {
        process.stdout.write(temp.data + " ");
        temp = temp.next;
    }
    console.log();
}

// Driver code
// Creating linked list 1->2->3->4->5
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Printing original list
process.stdout.write("Original Linked List: ");
printLL(head);

// Deleting middle node
let obj = new Solution();
head = obj.deleteMiddle(head);

// Printing updated list
process.stdout.write("Updated Linked List: ");
printLL(head);