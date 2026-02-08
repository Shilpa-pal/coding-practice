
class Node{
    constructor(data,next=null,prev = null){
        this.data = data;
        this.next = next;
        this.prev = prev
    }
}

// convert arr to doubly linke lit
function convertArrToDL(arr){
    if(arr.length === 0) return null

    let head = new Node(arr[0])
    let prev = head
    for(let i = 1;i<arr.length;i++){
        let temp = new Node(arr[i],null,prev)
        prev.next = temp;
        prev = temp
        
    }
    return head
}


function reverseDoublyLinkedList(head){

    if(head === null || head.next === null){
        return head
    }
    let prev = null
    let curr = head
    // we have to run the loop until curr reaches to null
    while(curr !==null){
        //swaping method is done 
        // temp = a
        //a = b
        //b = temp 
        prev = curr.prev;
        curr.prev = curr.next
        curr.next = prev
        // we can not use curr = curr.next becuse we are reversing the linked list there is no way to go curr.next
        curr = curr.prev
    }
    return prev.prev

}

// traverse the linked list
function printList(head){
    let curr = head
    while(curr !== null){
      process.stdout.write(curr.data + " ")
        curr = curr.next
    }
    console.log()
}

let arr = [2,4,5,7,8]
let head = convertArrToDL(arr)
head = reverseDoublyLinkedList(head)
console.log("reverse DLL")
printList(head)