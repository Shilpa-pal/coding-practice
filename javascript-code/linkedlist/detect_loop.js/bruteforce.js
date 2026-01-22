// detect loop in linked list

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

// convert arr to linked list
class Solution {
    // function to detext loop in linked list
    detectLoop(head) {

        let temp = head

        let nodemap = new Map()
        while (temp !== null) {
            // it will check the number presnt in map 
            if (nodemap.has(temp)) {
                return true
            } 
            // if not than add into map
            nodemap.set(temp, 1)
                temp = temp.next
        }
        return false
    }
}
// Driver code
function main() {
    // Create a sample linked list
    // with a loop for testing
    let head = new Node(1);
    let second = new Node(2);
    let third = new Node(3);
    let fourth = new Node(4);
    let fifth = new Node(5);

    head.next = second;
    second.next = third;
    third.next = fourth;
    fourth.next = fifth;
    // Create a loop
    fifth.next = third;

    let sol = new Solution();

    // Check if there is a loop 
    // in the linked list
    if (sol.detectLoop(head)) {
        console.log("Loop detected in the linked list.");
    } else {
        console.log("No loop detected in the linked list.");
    }
}
main()