
//inseration of head

class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next
    }
}

//converted array to linkedlsit
function convertArrToLL(arr){

    if(arr.length === 0) return null

    let head = new Node(arr[0])
    let mover = head
    for(let i =1;i<arr.length;i++){
        let temp = new Node(arr[i])

        mover.next = temp
        mover = temp
    }
    return head  
}

//insertion of head

function insertHead(head,val){

    let temp = new Node(val,head)
    return temp
}

function print(head){
    let temp = head
    let result = ""
    while(temp !==null){
        result += temp.data + " ";
        console.log(temp.data)
        temp = temp.next
    }
}

let arr = [34,56,2,5,9]

//convertion of array to linked list
let head = convertArrToLL(arr)

// insertion of head
head = insertHead(head,100)
print(head)