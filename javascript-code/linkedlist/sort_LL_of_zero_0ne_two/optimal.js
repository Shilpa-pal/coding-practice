class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function sort(head) {
    if (head === null || head.next === null) return head;

    // Dummy heads for 0, 1, and 2 lists
    let zeroHead = new Node(-1);
    let oneHead  = new Node(-1);
    let twoHead  = new Node(-1);

    // Current pointers
    let zero = zeroHead;
    let one  = oneHead;
    let two  = twoHead;

    let temp = head;

    // Step 1: Distribute nodes into 0,1,2 lists
    while (temp !== null) {
        if (temp.data === 0) {
            //zero next pointed to temp that's waht we did dummmynode point to zero and zero point to temp 
            // 
            zero.next = temp;
            // it saya zero can you go next
            zero = zero.next;
        } else if (temp.data === 1) {
            one.next = temp;
            one = one.next;
        } else {
            two.next = temp;
            two = two.next;
        }
        temp = temp.next;
    }

    // Step 2: Connect the lists
    zero.next = oneHead.next ? oneHead.next : twoHead.next;
    one.next = twoHead.next;
    two.next = null; // Important to avoid cycle

    // New head
    let newHead = zeroHead.next;

    return newHead;
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