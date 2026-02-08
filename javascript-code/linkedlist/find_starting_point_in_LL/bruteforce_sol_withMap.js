
//here used map technique

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Solution {
    findLoopStartingPoint(head) {
        let temp = head
        let newMap = new Map()

        while (temp !== null) {

            //cheack if in map number is alrady their
            if (newMap.has(temp)) {

                //if yes than return the value of that node that is temp
                return temp
            }
            //add new number in map
            newMap.set(temp, 1)
            // move to the next node
            temp = temp.next
        }
        // if linked list is linear than return null bexuse we will not find the loop 
        return null

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
    let findloopPoint = sol.findLoopStartingPoint(head)

    // Check if there is a loop 
    // in the linked list
    if (findloopPoint)
    console.log("Cycle starts at node with value:", findloopPoint.data);
else
    console.log("No cycle found.");
}

main()