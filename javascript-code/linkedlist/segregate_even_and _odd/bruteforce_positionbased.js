
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
function segregateEvenOdd(head) {
    if (head === null) return head
    //for odd position (1-based index: 1,3,5...)

    let temp = head
    let arr = []
    while (temp !== null && temp.next !== null) {
        arr.push(temp.data)
        temp = temp.next.next
    }
    // if last node exists (odd length list)
    if (temp !== null) {
        arr.push(temp.data);
    }
    // STEP 2: take nodes at odd positions (2,4,6...)
    temp = head.next;

    while (temp !== null && temp.next !== null) {
        arr.push(temp.data);
        temp = temp.next.next;
    }
    if (temp !== null) arr.push(temp.data);
    //  // STEP 3: overwrite linked list with array values
    temp = head
    let i = 0
    while (temp !== null) {
        temp.data = arr[i++];
        temp = temp.next;
    }
    return head
}
// Driver code
function printList(head) {
    let temp = head;
    while (temp !== null) {
        process.stdout.write(temp.data + " ");
        temp = temp.next;
    }
}
// Creating linked list: 17 -> 15 -> 8 -> 12 -> 10 -> 5 -> 4
let head = new Node(17);
head.next = new Node(15);
head.next.next = new Node(8);
head.next.next.next = new Node(12);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(5);
head.next.next.next.next.next.next = new Node(4);


let newHead = segregateEvenOdd(head);

printList(head);