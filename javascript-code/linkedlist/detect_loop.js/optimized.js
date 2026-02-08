// optimized solution of detect loop

class Node{
    constructor(data,next= null){
        this.data = data;
        this.next = next
    }
}
class Solution{
    detectLoop(head){
        // Initialize the slow pointer to the head.
        let slow = head;

        // Initialize the fast pointer to the head.
        let fast = head;
        while(fast !==null && fast.next !==null){
            slow = slow.next

            fast = fast.next.next
            if(slow === fast) return true
        }
        return false
    }
}
// creting a linkedlist
function listOfNode(){
    let head = new Node(1);
    let second = new Node(2)
    let third = new Node(3);
    let fourth = new Node(4)
    let fifth = new Node(5)

    head.next = second;
    second.next = third;
    third.next = fourth;
    fourth.next = fifth
    // create a loop
    fifth.next = third

    let sol = new Solution()
    if(sol.detectLoop(head)){
        console.log("Loop detected in Linked list.")
    }else{
        console.log("loop not detected in the linked list.")
    }
}
listOfNode()