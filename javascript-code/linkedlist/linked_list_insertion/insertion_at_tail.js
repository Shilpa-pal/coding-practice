
// Insert at tail position

//creating a class
class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = null
    }
}

//converting array to linked list

function convertArrToLL(arr){

    if(arr.length === 0) return null

    let head = new Node(arr[0])

    //moving the reference
    let mover = head
    for(let i =1 ;i<arr.length;i++){
        let temp = new Node(arr[i])

        mover.next = temp
        mover = temp
    }
    return head
}

//insert at tail

function insertAtTail(head,val){

    // if head is null create a new node and return new value
    if(head === null){
       return new Node(val)
    }

    let temp = head
    //we have to take loop till temp.next pointing to null
    //so we keep condition run loop until temp.nxt not equal to null
    while(temp.next !== null){
        temp = temp.next // ove forward
    }

    //creating a new node 
    let newNode = new Node(val)

    //connecting new node to temp.next that were pointing to null.now it will pointing to new node 
    //that will be our tail of the node
    temp.next = newNode //Attach the new node after the last node”
    return head
}

// traversing the array
function traversing(head){

    let temp = head
    let result = ""
    while(temp !==null){
        result += temp.data + " ";
        console.log(temp.data)
        temp = temp.next
    }
}

let arr = [23,45,67,55,99]

// converte array to LL
let head = convertArrToLL(arr)

// inserting at tail position

head = insertAtTail(head,100)
traversing(head)
