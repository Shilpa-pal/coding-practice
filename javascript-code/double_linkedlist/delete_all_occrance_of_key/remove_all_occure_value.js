
//DElete all occurance of given key in Double linked list


class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

//converting arr to doubly linked list'
function convertArrTODl(arr) {
    if (arr.length === 0) return null
    let head = new Node(arr[0])
    let prev = head
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i], null, prev)
        prev.next = temp
        prev = temp
    }
    return head
}


// traversing the list
function printList(head) {
    while (head) {
        process.stdout.write(head.data + " ")
        head = head.next
    }
    console.log()
}

// delete more than one occurance

function deleteOccurance(head, k) {
    let temp = head

    while (temp !== null) {
        //Check if current node should be deleted.
        if (temp.data === k) {
            //Save next node before breaking links.
            let nextnode = temp
            //Save previous node.
            let prevnode = temp.prev

           //Special case: deleting the head node.
            if (temp === head) {
                
                //Move head forward.
                head = nextnode
                if (head !== null) head.back = null //New head must not point backward.
            } else {
                //Connect previous node to next node.
                if (nextnode !== null) nextnode.prev = prevnode
                
                //Connect next node back to previous node.
                if (prevnode !== null) prevnode.next = nextnode

            }
            temp = nextnode// move after deletion

        } else {
            temp = temp.next
        }

    }
    return head //Return updated head pointer.

}

let arr = [10, 4, 10, 10, 8]
let head = convertArrTODl(arr)
head = deleteOccurance(head, 10)
printList(head)