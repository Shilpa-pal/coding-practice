
// length of linked list

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}
class Solution {
    lengthofLinkedlIist(head) {

        // Map to store visited nodes and their timer values
        let visitedNode = new Map()

        // Pointer to traverse the linked list
        let temp = head

        //timer to track visited node
        let timer = 0

        while (temp !==null) {

            // If revisiting a node, return the difference of timer values
            if (visitedNode.has(temp)) {
                // Calculate the length of the loop
                let loopLength = timer - visitedNode.get(temp);

                // Return the length of the loop
                return loopLength;

            }
            // if it  is new node Store the current node and its timer value
            visitedNode.set(temp, timer);

            // Move to the next node
            temp = temp.next;

            // Increment the timer
            timer++;
        }
        // If traversal is completed and we reach the end of the list
        // means there is no loop
        return 0;
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
    let loopLength = sol.lengthofLinkedlIist(head)
    // Printing the result
    if (loopLength > 0) {
        console.log("Length of the loop:", loopLength);
    } else {
        console.log("No loop found in the linked list.");
    }

}
main()