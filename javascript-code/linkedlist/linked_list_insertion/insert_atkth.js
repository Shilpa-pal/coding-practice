// inset at Kth position 

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

function convertAtarrToLL(arr) {

    if (arr.length === 0) return null

    let head = new Node(arr[0])
    let mover = head

    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i])
        mover.next = temp
        mover = temp
    }
    return head
}

// insert at kth position 

function insertAtKthPosition(head, el, k) {

    //when head is null and if k === 1 than create a new node 
    if (head === null) {
        if (k === 1) {
            return new Node(el)
        }
        else {
            return head
        }
    }

    // if insertion at head
    if (k === 1) {
        return new Node(el, head)
    }
    let cnt = 0
    let temp = head
    while (temp !== null) {
        cnt++

        /* if my counter one behind to k than I'll do my job else i go forword by temp = temp.next
        //why I kept this condition because if my cnt == k if i stop here and insert than it will be K +1
        If you stop at node 3 and do:
temp.next = newNode;
You get:1 → 2 → 3 → X → 4 → 5
That’s insertion at K+1, not K.*/
        if (cnt === k - 1) {

            // create a new node 
            let x = new Node(el, temp.next)// here we joining the  new node .next to temp.next 
            //we can not join temp to el.next because we miss the refrance of temp next 
            //el.next = temp.next // instead of writing this here we write in argument temp.next direactly
            temp.next = x
            break
        }
        temp = temp.next// move forword
    }
    return head

}

// insert at value position
function convertAtarrToLL(arr) {

    if (arr.length === 0) return null

    let head = new Node(arr[0])
    let mover = head

    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i])
        mover.next = temp
        mover = temp
    }
    return head
}

// insert at kth position 

function insertAtBeforeValue(head, el, val) {

    //when head is null their will be no value given it return null
    // because we are saying insert elment before the value before it's not poosble 
    if (head === null) {
        return null
    }

    // if insertion at head
    //if it's a head so head data is equal to equal to Val f you've been asked to insert before the 
    // Val which is the head you just do it why are
    if (head.data === val) {
        return new Node(el, head)
    }
   
    let temp = head
    while (temp.next !== null) {
        if (temp.next.data === val) {

            // create a new node 
            let x = new Node(el, temp.next)
            temp.next = x
            break
        }
        temp = temp.next// move forword
    }
    return head

}

// traversing
function printAllNode(head) {
    let temp = head
    let result = "";
    while (temp !== null) {
        result += temp.data + "";
        console.log(temp.data)
        temp = temp.next
    }
}

let arr = [45, 22, 33, 55, 67, 99]
let head = convertAtarrToLL(arr)

// head = insertAtKthPosition(head, 100, 2)

head = insertAtBeforeValue(head, 100, 33)
// traversing
printAllNode(head)

