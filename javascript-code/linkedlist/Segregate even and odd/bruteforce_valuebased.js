
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
function segregateEvenOdd(head) {
    if (head === null) return null;

    let even = [];
    let odd = [];

    let temp = head;

    // Step 1: Separate values
    while (temp !== null) {
        if (temp.data % 2 === 0) {
            even.push(temp.data);
        } else {
            odd.push(temp.data);
        }
        temp = temp.next;
    }

    // Step 2: Rebuild linked list
    temp = head;
    let i = 0;

    for (let val of even) {
        temp.data = val;
        temp = temp.next;
    }

    for (let val of odd) {
        temp.data = val;
        temp = temp.next;
    }

    return head;
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