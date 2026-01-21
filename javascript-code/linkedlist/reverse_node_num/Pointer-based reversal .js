
class Node{
    constructor(data,next= null){
        this.data = data;
        this.next = next;
 
    }
}
// convert arr to doubly linke lit
function convertArrToDL(arr){
    if(arr.length === 0) return null

    let head = new Node(arr[0])
    let prev = head
    for(let i = 1;i<arr.length;i++){
        let temp = new Node(arr[i])
        prev.next = temp;
        prev = temp
        
    }
    return head
}
function reverseLinkedList(head){

    if(head === null || head.next === null){
        return head
    }
    let prev = null
    let curr = head
    let next = null
    // we have to run the loop until curr reaches to null
    while(curr !==null){
        //swaping method is done 
        // temp = a
        //a = b
        //b = temp 
        // 1st secure the next next node position 
        next = curr.next
        //current next is current previous
        curr.next = prev 
        // previous  become curr
        prev = curr

        //curr become next
        curr = next
    }
   
    //becuse we know prev vo pinter hai jo last wale node ko point kar raha hoga.
    head = prev 
    return head
     //we can write direct "return prev" instead of above line
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
head = reverseLinkedList(head)
console.log("reverse DLL")
printList(head)