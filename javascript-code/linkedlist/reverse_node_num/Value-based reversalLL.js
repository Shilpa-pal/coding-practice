// value based reverseal linked list
class ListNode{
    constructor(data,next=null){
        this.data = data;
        this.next = next
    }
}

function reverseLinkedListNumOnly(head){
    if(head === null ||head.next === null) return head

    let value = []
    let temp = head
    while(temp !==null){
        value.push(temp.data);
        temp = temp.next
    }

    //rewriting value in reverse order
    let i = value.length - 1
     temp = head
     while(temp !== null){
        //temp.data → data inside node
        //temp.data→ = values[4]
  //temp.data→ = 5
  //temp.data do update by value[i]
        temp.data = value[i]
        i--;//moves through the array in reverse order
        temp = temp.next //moves through the linked list nodes
     }
     return head
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

head = reverseLinkedListNumOnly(head)

function printList(head){
    let curr = head
    let node = []
    while(curr){
        node.push(curr.data)
        curr = curr.next
    }
    console.log(node.join(" → "))
}
printList(head)
