
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

function reverseLinkedList(head) {
    if (head === null || head.next === null) return head
    let prev = null
    let curr = head;
    while (curr !== null) {
        let nextNode = curr.next; //store next
        curr.next = prev;//reverse link
        prev = curr; //move prev
        curr = nextNode //move curr
    }
    return prev //new head
}
function isPalindrome(head) {
    //step 1 get the middle of LL
    // if it is empty LL and have one element is always to be palindrome
    if (head === null || head.next === null) return true

    let slow = head
    let fast = head
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    //step 2 reverse the second half
    // Reverse the second half of the linked list starting from the middle
    let newHead = reverseLinkedList(slow.next)

    //step3 compare 1st and second half
    let first = head;
    let second = newHead
    // Compare data values of nodes from both halves
    while (second !== null) {
        if(first.data !== second.data) {
            reverseLinkedList(newHead) // Reverse the second half back to its original state
            return false;
        }
        first = first.next;  // Move the first pointer
        second = second.next; // Move the second pointer
    }
    // Reverse the second half back to its original state
    reverseLinkedList(newHead);
    return true
}

// Function to print the linked list
function printLinkedList(head) {
    let temp = head;
    while (temp !== null) {
        process.stdout.write(temp.data + " ");  // Print the current node's data
        temp = temp.next;                      // Move to the next node
    }
    console.log();
}
// Driver function
const head = new Node(1);
head.next = new Node(5);
head.next.next = new Node(2);
head.next.next.next = new Node(5);
head.next.next.next.next = new Node(1);

// Print the original linked list
console.log("Original Linked List: ");
printLinkedList(head);

// Check if the linked list is a palindrome
if (isPalindrome(head)) {
    console.log("The linked list is a palindrome.");
} else {
    console.log("The linked list is not a palindrome.");
}