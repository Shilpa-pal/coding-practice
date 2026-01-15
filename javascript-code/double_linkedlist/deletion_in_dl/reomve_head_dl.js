
class Node {
    constructor(data, next_node = null, back_node = null) {
        this.data = data;
        this.next = next_node;
        this.back = back_node;
    }
}

// Function to convert an array to a doubly linked list
function convertionOfArrtoDL(arr) {

    let head = new Node(arr[0])
    let prev = head
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i], null, prev)

        prev.next = temp
        prev = temp
    }
    return head
}

// remove head in double linked lsit
function removehead(head) {
    //1st if array is empty ,2nd if the list has only one node ,after removing it, 
    // the list becomes empty
    if (head === null || head.next === null) {
        return null
    }
    /*Save the old head in a box called prev
     We keep it so we can disconnect it later */
    let prev = head  // old head

    /*Move the head pointer to the second node
    This second node becomes the new head */
    head = head.next  // move head forward

    /*The first node should NOT point to any previous node.”
    null <- [10] <-> [20] <-> [30]
          ↑
        head
   After moving head forward: head = head.next
[10] <-> [20] <-> [30]
         ↑
       head
But problem 😬 20.back is still pointing to 10
Fixing the problem :head.back = null;
Now: null <- [20] <-> [30] */

    head.back = null;  // new head has no back
   
    /*Before removing head
    prev/head
       ↓
    [10] <-> [20] <-> [30] here ,prev.next points to [20]
    
    After this line  prev.next = null;
    [10]     [20] <-> [30]
     [10] is now completely disconnected */
    prev.next = null  // disconnect old head
    return head
}

//printing the list of array 
function printAll(head) {
    let current = head
    while (current !== null) {

        //Print before moving → prints current element 2.Move before printing → skips current element
        //First iteration → prints 1st element 2.Second iteration → prints 2nd element 3.Third iteration → prints 3rd element
        console.log(current.data) //rule: Read → then move ,Never move → then read                             
        current = current.next
    }
}

let arr = [23, 45, 11, 22]
let head = convertionOfArrtoDL(arr)
head = removehead(head)

printAll(head)