
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;

    }
}
class Solution {
    countLength(slow, fast) {
        let cnt = 1
        fast = fast.next
        while (slow !== fast) {
            cnt++;
            fast = fast.next
        }
        return cnt
    }
    findThelengthOfLL(head) {
        let slow = head;
        let fast = head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next

            if (slow === fast) {
                return this.countLength(slow, fast)
            }
        }
        return 0
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
    fifth.next = second;

    let sol = new Solution();
    let loopLength = sol.findThelengthOfLL(head)
    // Printing the result
    if (loopLength > 0) {
        console.log("Length of the loop:", loopLength);
    } else {
        console.log("No loop found in the linked list.");
    }

}
main()