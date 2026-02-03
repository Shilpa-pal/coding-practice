
class Node {
    constructor(data, next_node = null, back_node = null) {
        this.data = data;
        this.next = next_node;
        this.back = back_node
    }
}

function convertArrToDL(arr) {
    let head = new Node(arr[0])
    let prev = head
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i],null,prev)

        prev.next = temp;
        prev = temp
    }
    return head
}
function removeByNode(temp) {
    if (temp === null) return;
    let prev = temp.back;
    let front = temp.next

    // Case 1: deleting tail
    if (front === null) {
        prev.next = null;
        temp.back = null;
        return

    }
    // Case 2: deleting middle node
    prev.next = front;
    front.back = prev;

    temp.next = null;
    temp.back = null;
}
function print(head) {
    while (head) {
        process.stdout.write(head.data + " ")
        // console.log(head)
        head = head.next
    }
    console.log()
}

let arr = [23, 45, 67, 89, 45]
let head = convertArrToDL(arr)
removeByNode(head.next.next)
print(head)