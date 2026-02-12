// ind intersection of Two Linked Lists

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next
    }

}
// convert array to linked list
function convertArrTolinkedlist(array) {
    if (array.length === 0) return null
    let head = new Node(array[0])
    let prev = head
    for (let i = 1; i < array.length; i++) {
        let temp = new Node(array[i])
        prev.next = temp
        prev = temp
    }
    return head
}

// insertNode 
function insertNode(head, val) {
    let newNode = new Node(val)//Creates a new node object ,val is stored inside it 
    // next is automatically null .If val = 5, then:
    // newNode:
    // {
    //   num: 5,
    //   next: null
    // }//
    // if head is empty 
    if (!head) {
        head = newNode // return newNode as head
        return newNode
    }

    let temp = head
    while (temp.next) {
        temp = temp.next
    }
    //Attach new node
    temp.next = newNode
    return head
}
// find the intersection point

function persentIntersection(head1, head2) {
    let set = new Set()// Set to store visited nodes from the first list
    while (head1) {
        set.add(head1);// Add nodes of the first list to the set
        head1 = head1.next
    }
    while (head2) {
        if (set.has(head2)) {
            return head2  // If node is found in set, it's the intersection point
        }
        head2 = head2.next
    }
    return null  // Return null if no intersection is found
}

// traverse the linked list
function traverseList(head) {
    let temp = head
    while (temp !== null) {
        process.stdout.write(temp.data + " ")
        temp = temp.next
    }
}

// let array = [1,2,3,5,6]
// let array2 = [4,5,6]
// let head = convertArrTolinkedlist(array)
// head = persentIntersection(head1,head2)
// console.log(traverseList(head))

let array = [1,2,3,5,6]
let array2 = [4,5,6]

let head1 = convertArrTolinkedlist(array)
let head2 = convertArrTolinkedlist(array2)

let intersection = persentIntersection(head1, head2)

if (intersection) {
    console.log("Intersection at:", intersection.data)
} else {
    console.log("No intersection")
}
