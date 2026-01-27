
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// converting arr to linked list
function convertArrTolinkedlist(arr) {
    if (arr.lenght === 0) return head
    let head = new Node(arr[0])
    let prev = head
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i])
        prev.next = temp
        prev = temp
    }
    return head
}

// function to sgregate odd and even number on value based

function segregateEvenOdd(head) {
    if (head === null || head.next === null) return head


    // Create pointers for the heads and tails of even and odd lists
    let evenHead = null, evenTail = null;
    let oddHead = null, oddTail = null;

    let current = head

    // Traverse the linked list
    while (current !== null) {
        // If the current node has even value
        if (current.data % 2 === 0) {
            //This is the first even node ,Both evenHead and evenTail point to it.
            if (!evenHead) {
                evenHead = evenTail = current;
            } else {
                //Attach node after evenTail
                evenTail.next = current;
                
                //Move evenTail forward
                evenTail = current;
            }
        } else {
            // If the current node has odd value
            if (!oddHead) {
                oddHead = oddTail = current;
            } else {
                oddTail.next = current;
                oddTail = current;
            }
        }

        // Move to next node
        current = current.next;
    }

    // If no even nodes found, return odd list
    if (!evenHead) return oddHead;

    // If no odd nodes found, return even list
    if (!oddHead) return evenHead;

    // Combine even and odd lists
    evenTail.next = oddHead;

    // Set end of list to null
    oddTail.next = null;

    return evenHead;
}

// printing the list 
function printList(head) {
    let temp = head
    while (temp !== null) {
        process.stdout.write(temp.data + " ")
        temp = temp.next
    }
}

let arr = [12, 45, 76, 3, 6, 7]
let head = convertArrTolinkedlist(arr)
// head = segregateEvenOdd(head)
printList(head)