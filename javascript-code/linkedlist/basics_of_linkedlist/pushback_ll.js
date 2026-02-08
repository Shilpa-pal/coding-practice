//Push Back (Insert at End)

//Node structure
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function pushBack(head,data){
    let newNode = new Node(data)

    // if list is empty
    if(head === null){
        return newNode
    }
    let current = head
    
  // move to last node
    while(current.next !== null){
        current = current.next
    } 
  // link last node to new node
  current.next = newNode
  return head
}

let head = null;

head = pushBack(head, 10);
head = pushBack(head, 20);
head = pushBack(head, 30);
console.log(head)