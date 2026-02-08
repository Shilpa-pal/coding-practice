
class Node{
    constructor(data,next_node = null,back_node = null){
        this.data = data;
        this.next = next_node;
        this.back = back_node
    }
}
function convertionOfArrto(arr){

    let head = new Node(arr[0])
    let prev = head

    for(let i = 1;i<arr.length;i++){
/* Now substitute the values -arr[i] → data of the new node   temp.data = arr[i];
null → new node has no next node yet                          temp.next = null;         
prev → new node’s back pointer                                temp.back = prev;

So internally, this happens:
Make a new box ,Put the number inside
next = null → it doesn’t know who comes next yet
back = prev → it knows who is behind it*/

        let temp = new Node(arr[i],null,prev) // new Node(A, B, C) It means:data = A ,next = B,back = C
        //Connect previous node to new node
        prev.next = temp
        prev = temp
    }
    return head
}
// Function to print the elements of the doubly linked list
function printlist(head){
    while(head){
        //// Print the data of the current node
        process.stdout.write(head.data + " ")// process.stdout.write it help to print in one line output
        head = head.next
    }
console.log()  //
}

//traversing

let arr = [12,45,56,67,34]
let head = convertionOfArrto(arr)
printlist(head)