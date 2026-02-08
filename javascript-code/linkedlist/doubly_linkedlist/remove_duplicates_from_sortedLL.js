//Remove duplicates from sorted DLL

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

function removeDuplicates(head) {
    // head is the first node of the list ,If there is no head, there is nothing to remove
    // So it returns null
    if (head === null) return null

    let current = head
    // Traverse the list until the second last node means till the tail of the node
   // Loop runs as long as:current is not null ,current.next exists
   //Why?
   // Because we compare current with current.next
   // If current.next is null, there is nothing to compare
   //If the temporary pointer reaches the last node or becomes null, we stop the process because 
   // there is no next node, and therefore no possibility of duplicates beyond that.
   
   //Why duplicates cannot exist at the tail
   // Because: The list is sorted ,Duplicates always appear next to each other
   // The last node has no next neighbor to compare with
    while (current !== null && current.next !== null) {
        let nextnode = current.next
        // Skip all nodes with t.nwehe same value as current
        while (nextnode && nextnode.data === current.data) {

            //keep moving until find unique number 
            nextnode = nextnode.next
        }

        // Connect current node to the next distinct node
        current.next = nextnode
        if (nextnode) {
            nextnode.prev = current
            // Move to the next node
            current = current.next;
        }
    }
    return head
}

let arr = [1, 1, 1,2,3,3,5]
let head = convertArrTODl(arr)
head =  removeDuplicates(head)
printList(head) 