//Search an element in a Linked List

//Node class for linked list
class Node {
    cosntructor(val) {
        // Store data
        this.data = val;
        //store next pointer
        this.net = null
    }
}

class Solution {
    // function for search value in linked list(ll)
    searchValue(head, key) {
        let current = head

        //traverse until end
        while (current !== null) {
            //check if current node mathches key
            if(current.data === key){
                return true
            }
            //move to next node 
            current = current.next
        }
        //return false if not found
        return false
    }
}
//driver code 
let head = new Node(10)
head.next = new Node(20)
head.next.next = new Node(30)

let obj = new Solution()
//search for value
if(obj.searchValue(head,20))
console.log("found")
else
    console.log("Not Found")