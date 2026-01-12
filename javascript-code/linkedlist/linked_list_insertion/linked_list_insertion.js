// insertion of linked list
class Node {
    constructor(data1, next1 = null) {
        this.data = data1;
        this.next = next1
    }
}
///solution class to handle linked list
class solution {//his line creates a container (box) called Solution.
    insertAthead(head, newData) {
        // create a new node whose next points to current head
        //We write this code to add a new node at the beginning of a linked list and make it the new head.
        let newNode = new Node(newData, head)
        // Return the new node as the head
        return newNode
    }
    // Function to print the linked list
    printList(head) {
        let temp = head;
        let result = ""
        while (temp) {//this means while (temp !== null)
            result += temp.data + " "
            temp = temp.nextj
        }
        console.log(result.trim())
    }
}

// driver code 
let sol = new solution()

// creating a simple linked list
let head = new Node(20)
head.next = new Node(30)

console.log("original list")
sol.printList(head)

// inserting a new node at head
head = sol.insertAthead(head,10)

console.log("After Insertion of Head:")
sol.printList(head)