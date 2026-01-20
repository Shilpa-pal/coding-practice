
class Node{
    constructor(data,next=null,back=null){
        this.data = data;
        this.next = next;
        this.back = next
    }
}

//converting arr to doubly linked list'
function convertArrTODl(arr){
    if(arr.length === 0) return null
    let head = new Node(arr[0])
    let prev = head
    for(let i =1;i<arr.length;i++){
        let temp = new Node(arr[i],null,prev)
        prev.next = temp
        prev = temp
    }
    return head
}


// traversing the list
function printList(head){
    while(head){
        process.stdout.write(head.data + " ")
        head = head.next
    }
    console.log()
}

function reverseDoublyLinkedList(head){
///If list is empty or has one element, return as is
    if(head === 0 ||head.next === 0) return head

    // used to store number one by one like empty array
    let stack = []

    let temp = head
    while(temp !== null){
        stack.push(temp.data)
        temp = temp.next
    }

    temp = head
    while(temp!==null){
        temp.data = stack.pop()
        temp = temp.next
    }
    return head
}


let arr = [23,4,5,67,8]
let head = convertArrTODl(arr)
head = reverseDoublyLinkedList(head)
printList(head)