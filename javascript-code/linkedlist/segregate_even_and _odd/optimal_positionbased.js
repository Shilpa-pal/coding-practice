
class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next
    }
}
function convertArrTolinkedlist(arr){
    if (arr.length === 0) return null
    let head = new Node(arr[0])
    let prev = head
    for(let i =1;i<arr.length;i++){
        let temp = new Node(arr[i])
        prev.next = temp 
        prev = temp
    }
    return head
}

function segregateEvenOdd(head){
    if(head === null ||head.next === null){
        return head
    }
    
    //1st node (odd position)
    let odd = head 
    //2nd node (even position)
    let even = head.next

   //Start of even list (to attach later)
    //We store evenHead so we don’t lose the start of the even-position list.
    let evenhead = head.next

    while(even !==null && even.next !== null){
        //     WHY next.next? Because we want to jump to the same position type
        // odd your node points to next odd node i.e odd.next.next
        odd.next = odd.next.next//Skip one node → connect odd → next odd
        
        //even your node points to next even node i.e even.next.next
        even.next = even.next.next

        //Move pointers forward
        odd = odd.next
        even = even.next

    }
    //odd.next whereever you standing it point to evenhead
    odd.next = evenhead//Attach even list after odd list.
    return head
}
function printList(head){
    while(head){
        process.stdout.write(head.data + " ")
        head = head.next
    }
}

let arr =[12,45,76,3,6,7]
let head = convertArrTolinkedlist(arr)
head = segregateEvenOdd(head)
printList(head)