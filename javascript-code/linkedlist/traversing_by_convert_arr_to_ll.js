// traversing by converting aray to linked list

//created a blue print of node 
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class linkedlist {
    convertArrToLL(arr) {
        if (arr.length === 0) return null;
        let head = new Node(arr[0])
        let mover = head
        for (let i = 1; i < arr.length; i++) {
            let temp = new Node(arr[i])
            mover.next = temp //link
            mover = temp //move
        }
        return head
    }
    //remove head 
    removeHead(head) {
        if (head === null) return null// list is empty
        return head.next // using next head indicate add nex one 
    }

    //add at front
    addFront(head, data) {
        let newNode = new Node(data)
        newNode.next = head
        return newNode
    }

    //add at end
    addAtEnd(head, data) {
        let newNode = new Node(data)
        if (head === null) return newNode
        let temp = head
        while (temp.next !== null) { // This means:
            // “Is there any other box after me?”
            // If YES → move forward
            // If NO → stop (this is the last no

            temp = temp.next //Move to the next box
        }
        temp.next = newNode;  // it will connect like this ,10 → 20 → 30 → newNode → null

        return head
    }
    /* why we return head?
head is the address of the first box
All boxes are connected using arrows
You walked to the last box using temp
You added a new box at the end
BUT the first box is still the same*/

    removeByValue(head, value) {
        if (head === null) return null

        //if the first node is the one to remove
        if (head.data === null) {
            return head.next
        }

// temp.next - the next node (box)
// temp.next.data - the number inside the box
// value - the number we want to remove
//condition says temp.next !== null
// “Is there a node ahead of me?” YES → we can safely check it ,NO → we are at the last node, stop
        let temp = head
        //While loop job:  Find the node just BEFORE the one to delete
        while (temp.next !== null && temp.next.data !== value) { //2nd condition mean temp.next.data is not equal to value? if YES go to next if NO stop the loop ,delaiton happan after the loop
            temp = temp.next
        }
        if (temp.next !== null) {
            temp.next = temp.next.next //deletion (after loop)
        }
        return head
    }

}

let arr = [34, 56, 67, 88, 99]
let ll = new linkedlist()

let head = ll.convertArrToLL(arr)

//remove head
head = ll.removeHead(head)

// add at front
head = addFront(head, 29)

//add at end
head = addAtEnd(head, 99)

//remove node by value
head = removeByValue(head,3)

//Traversing
let temp = head
while (temp !== null) {
    console.log(temp.data)
    temp = temp.next
}


