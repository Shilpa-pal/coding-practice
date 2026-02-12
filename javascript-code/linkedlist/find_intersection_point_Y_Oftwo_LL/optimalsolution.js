
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
// Utility function to get the difference in lengths of two linked lists

function getDifference(head1, head2) {
    let len1 = 0, len2 = 0
    while (head1 || head2) {
        if (head1) {
            len1++
            head1 = head1.next
        }
        if(head2){
            len2++
            head2 = head2.next
    }
}
return len1-len2
}

// Utility function to check presence of intersection
function intersectionPresent(head1, head2) {
    let diff = getDifference(head1, head2);
    /* Note:it depends on the node length which pointer I have to move. After calculating the difference, 
we always take out differ like this formate(len1-len2)if response is positve we do d-- ,if response 
is negative d++ if t1 is longer, move t1 = t1.next with d--. If t2 is longer, move t2 = t2.next with d++.
we can also be write below syntax */
    
    if (diff < 0) {
        while (diff++ !== 0) head2 = head2.next;
    } else {
        while (diff-- !== 0) head1 = head1.next;
    }
    // Traverse both lists and compare node by node
    while (head1) {
        if (head1 === head2) return head1;  // Intersection point found
        head2 = head2.next;
        head1 = head1.next;
    }
    return null;  // No intersection found
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

let array = [1, 2, 3, 5, 6]
let array2 = [4, 5, 6]

let head1 = convertArrTolinkedlist(array)
let head2 = convertArrTolinkedlist(array2)

let intersection = persentIntersection(head1, head2)

if (intersection) {
    console.log("Intersection at:", intersection.data)
} else {
    console.log("No intersection")
}
