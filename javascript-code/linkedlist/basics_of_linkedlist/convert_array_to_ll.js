//conversion of array to linked list

class Node {
    constructor(data, next = null) {
        /*Every node has:
        data → the value
        next → link to next node
        Initially next = null (end of list).*/
        this.data = data;
        this.next = null
    }
}

//This class contains operations on linked list.
class linkedlist {
    convertArr2LL(arr) {
        if (arr.length === 0) return null
        //head always be 1st node
        let head = new Node(arr[0])

        // mover is used to move forward,mover is a temporary pointer that walks forward.
        //We don’t move head — it must stay safe.
        let mover = head //so it stand with 1st place 
        for (let i = 1; i < arr.length; i++) {
            //storeing avlue in temprary
            let temp = new Node(arr[i]); // create new node
            mover.next = temp;// connect previous node to new node
            mover = temp// move forward
        }
        return head //Return the starting point of the list.
    }
}
let arr = [2, 5, 6, 9]

let ll = new linkedlist(arr)//create a object (this line come when i used class linkedlist)
let head = ll.convertArr2LL(arr)// call method

console.log(head.data)
