
/* Delete Kth element 

below description is about convert aray to likedList
let's assume 
Array = list of numbers on paper
Linked list = boxes connected by arrows
new Node(arr[i]) = making a new box
temp = holding that box so we can attach it
Loop = repeat until all boxes are made

We write let temp = new Node(arr[i]) inside the loop to create a new node for each array element and connect it to the linked list.

*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}
class linkedList {
    // Convert array to linked list
    convertArrToLL(arr) {
        //if arr lenngth 0 it returns null
        if (arr.length === null) return null

        //head all at 1st position of array 
        let head = new Node(arr[0])

        let mover = head
        for (let i = 1; i < arr.length; i++) {

            /*Each loop: arr[i] gives a new value ,
             new Node(arr[i]) creates a new node
            What does temp actually do? 
            1.temp is a temporary reference ,It holds the address of the newly created node
      It exists only to help us connect nodes*/
            let temp = new Node(arr[i])

            //How nodes get connected (step-by-step)? follow below steps
            mover.next = temp // connect previous node to new node
            mover = temp//move forword to the new node
        }
        //Return the starting point of the list.
        return head
    }
    // Convert array to linked list
    removedKthElement(head, k) {
        if (head === null) return head;

        // remove 1st node 
        if (k === 1) {
            return head.next
            // head = head.next
        }
        //Keeps track of which node number we are at(1st, 2nd, 3rd…)
        let cnt = 0

        //Used to move through the list ,We never move head
        let temp = head

        //Always points to the node before temp, Needed so we can reconnect links
        let prev = null

        //Traverse the list
        //Walk through nodes one by one Stop at end of list
        while (temp !== null) {

            //Each node visited → increase count
            cnt++

            //If current node is k-th,We found the node to delete
            if (cnt === k) {
                prev.next = prev.next.next ////Delete by skipping it
                // why above one work ?prev.next IS temp
                // prev.next.next IS temp.next

                // prev.next = temp.next // we can write any either above one or this one 
                //using temp Skip temp and directly connect prev to the node after tem
                //                 temp IS the node to be deleted
                // prev is the node just before it
                break
            }
            //Move pointers forward. Shift both pointers one step forward, 
            prev = temp
            temp = temp.next //Keep walking
        }
        return head //Head might be unchanged ,Always return it to keep list connected
    }

}

let arr = [12, 45, 78, 90]
let obj = new linkedList()
let head = obj.convertArrToLL(arr)

// remvoe the 3rd element
head = obj.removedKthElement(head, 2)

//print list (traversing)
let temp = head
while (temp !== null) {
    console.log(temp.data)
    temp = temp.next
}

