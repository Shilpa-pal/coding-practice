
// find the length of 
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Solution {
    findStartingPointOfLoop(head) {
        if (head === null) return null;

        // Initialize slow and fast pointers
        let slow = head;
        let fast = head;

        //step 1. In detect  cycle
        //Phase 1: //slow → 1 step ,fast → 2 steps

        // Purpose: detect cycle        
        while (fast !== null && fast.next !== null) {
            slow = slow.next //move one step 

            fast = fast.next.next // move two step 
            // if they equal to each otherand If they meet, cycle exists

            /* step 2: Find start of loop
              slow → 1 step ,fast → 1 step 
               Purpose: find starting point of cycle
               If fast keeps moving 2 steps in phase 2, they may never meet at the start node.
                 */
            if (slow === fast) {
                //Reset slow to head 
                slow = head;

                // Move both one step until they meet again
                while (slow !== fast) {
                    slow = slow.next //move one step 
                    fast = fast.next //move one step 
                }
                //if they collide return slow and slow will be the starting point
                return slow
            }

        }
        // if their is no loop, No cycle found
        return null
    }

}

function main() {
    let head = new Node(1)
    let second = new Node(2)
    let third = new Node(3)
    let fourth = new Node(4)
    let fifth = new Node(5)

    head.next = second;
    second.next = third;
    third.next = fourth;
    fourth.next = fifth;
    // Create a loop
    fifth.next = third;

    let sol = new Solution();

    let detectcyclehead = sol.findStartingPointOfLoop(head)

    // Check if there is a loop 
    // in the linked list
    if (detectcyclehead)
        console.log("Cycle starts at node with value:", detectcyclehead.data);
    else
        console.log("No cycle found.");
}
main()
