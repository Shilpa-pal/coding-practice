
// Deletion of linked list

class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class Solution {
    //create a function to delete a tail node
    deleteTail(head) {
        // if list is empty and has one node
        if (head === null || head.next === null) {
            return null
        }
        //trasverse two second last
        let curr = head;
        while(curr.next.next !== null){
            curr = curr.next;
        }

        //delation tail node
        curr.next = null;

        //return updated head
        return head
    }
}

//drive code 
let head = new Node(100)
head.next = new Node(200)
head.next.next = new Node(300)

let obj = new Solution();
head = obj.deleteTail(head)

//Print list after deletion
let temp = head
let result = ""
while(temp){
    result += temp.data + " ";
    temp = temp.next
}
console.log(result)

//Complexity Analysis
// Time Complexity: O(N), we traverse the entire linked list once to delete the tail of the list.
// Space Complexity: O(1) , constant amount of extra space is used.