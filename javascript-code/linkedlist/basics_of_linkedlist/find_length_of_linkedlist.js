
// find length of linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}
class Solution {
    //function to find length of linked list
    lenghtoflinkedlist(head) {

        //intialize counter with 0
        let count = 0
        // Initialize a temparary pointer to head
        let temp = head

        //traverse the linked list
        while (temp !== null) {
            //increment count for each node 
            count++;

            //move to next node 
            temp = temp.next   
        }
         //return the total count
            return count
    }
}
  //driver code 
    let head = new Node(100)
    head.next = new Node(200)
    head.next.next = new Node(300)

    //dolution object
    let obj = new Solution()

// Find and print the length of linke list
console.log("Length of linked list",obj.lenghtoflinkedlist(head))