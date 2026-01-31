class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}
// convert linked list
function convertArrToLinkedList(arr){
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

// function to sort 0,1 and 2
function sort(head){
    if(head === null||head.next === null) return head
    let cnt0 = 0
    let cnt1 = 0
    let cnt2 = 0
    let temp = head
    while(temp !== null){
        if(temp.data === 0){
            cnt0++;
        }else if(temp.data === 1){
            cnt1++;
        }else {
            cnt2++;
        }
        temp = temp.next
    }

    // data replacement
    temp = head
    while(temp !==null){
        if(cnt0){
            temp.data =0
            cnt0--
        }else if(cnt1){
            temp.data =1
            cnt1--
        }else{
            temp.data =2
            cnt2--
        }
        temp = temp.next
    }
    return head
}

function printList(head){
    let temp = head
    let result = []

    while(temp!== null){
        result.push(temp.data)
        temp= temp.next
    }
    return result
}
let arr = [1,2,0,2,1,0]
let head = convertArrToLinkedList(arr)
head = sort(head)
console.log(printList(head))