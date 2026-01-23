// find the length of 
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Solution {
      // Function to detect start of loop using Set
    findStartingPoint(head) {
 // Create a set to store visited nodes
        let find = new Set()

         // Traverse through the list
        while (head !== null) {
            // // If node already in set, it's start of the loop
            if (find.has(head)) {
                return head
            }
            // Add current node to visited set
            find.add(head);

            // move to the next node
            head = head.next
        }
        //if no cycle 
        return null
    }
}

function main(){
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
    let detectcyclehead = sol.findStartingPoint(head)

    // Check if there is a loop 
    // in the linked list
if (detectcyclehead)
    console.log("Cycle starts at node with value:", detectcyclehead.data);
else
    console.log("No cycle found.");
}
main()
