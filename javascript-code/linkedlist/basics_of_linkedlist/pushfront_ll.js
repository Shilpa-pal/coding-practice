
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function pushfront(head,data){

    const newNode = new Node(data)

    
  // point new node to old head
    newNode.next = head
    
  // update head to new node
    head = newNode
    return head
}
// Case 1️: When list is EMPTY
let head = null;

head = pushfront(head,20);
head = pushfront(head,30);
head = pushfront(head,40);

//Case 2️: When nodes are ALREADY PRESENT

// head = pushfront(head,20);
// head = pushfront(head,30);


console.log(head);