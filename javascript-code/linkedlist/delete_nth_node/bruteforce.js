
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function convertarrtolinkedlit(arr) {
    if (arr.length === 0) return null
    let head = new Node(arr[0])
    let prev = head
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i])
        prev.next = temp
        prev = temp
    }
    return head

}

//delete Nth node 
function deleteNthNode(head, N) {
    // If list is empty
    if (head === null) return null;
    let temp = head
    // doing counting to get N th node
    let cnt = 0
    while (temp !== null) {
        cnt++
        temp = temp.next
    }
    // if N is invalid
    if (N > cnt) return head;

    // if N equal to cnt 
    if (cnt === N) {
        let newhead = head.next
        return newhead
    }
    // if other cnt occure than follow this code
    let resultant = cnt - N
    temp = head
    while (temp !== null) {
        resultant--
        if (resultant === 0) {
            break
        }
        temp = temp.next
        
    }
    temp.next = temp.next.next
    return head  
}

function printList(head) {
    while (head) {
        process.stdout.write(head.data + " ")
        head = head.next
    }
}

let arr = [1, 3, 4, 5, 6]
let head = convertarrtolinkedlit(arr)
head = deleteNthNode(head, 2)
console.log("print orginal arr",arr)
console.log("After Deleting the nth node from back of the linkedList is ")// if you want to store into new variable
//than try to print printlist(head) it will show undefined in console 
// To make them work you have to return something in printliat function exaple"return result
// another option is above given 
printList(head)
