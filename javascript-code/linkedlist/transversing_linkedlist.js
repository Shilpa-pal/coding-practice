
/*Traversing a linked list means starting from the first node, processing each node’s data,
 and moving to the next node until the pointer becomes null.
 note:
     //PROCESS means do any operation on the data of the current node.
        /*console.log(P.data);     // print the data
        sum = sum + P.data;     // add data to sum
        count++;                // count nodes
        if (P.data === 10) {}   // search for a value
        // 
        
note : Why undefined is dangerous in linked lists
“If next is not initialized, the node doesn’t clearly know whether it points to another node
 or not. This makes traversal unsafe because we lose the reference chain and can’t reliably
 detect the end of the list.*/

class Node {
    constructor() {
        this.data = data;
        this.next = null
    }
}

let head = new Node(10)
head.next = new Node(20)
head.next.next = new Node(30)

function transversing(start) {
    let p = start
    while (p !== null) {

        console.log(p.data)//PROCESS DATA[P]
        // why not we writing consol.log(data)? becuse, There is no variable named data
        // data exists inside the node, not globally
        // Think of P as a house address ,// Think of data as a room inside the house

        //P = P.next moves the pointer to the next node in the linked list.
        p = p.next//(memory location) of the next node object
    }
}
traverseLinkedList(head);