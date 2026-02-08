//
class Node {
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}
class Solution {
    palindrome(head) {
         let stack =[]
        let temp = head
       // Step 1: Push all values into stack
        while(temp!==null){
            stack.push(temp.data)
            temp = temp.next
        }
         // Step 2: Compare with stack
        temp = head
        while(temp!==null){
            if(temp.data !== stack.pop()) {
                return false
            }
            temp = temp.next;
        }
         return true
    }
}

// Driver code
// Creating linked list 1->2->3->4->5
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);


let obj = new Solution();
//The function returns a boolean, so I should store the result in a separate variable instead
//  of overwriting the head pointer.”
let result = obj.palindrome(head);

console.log(result)