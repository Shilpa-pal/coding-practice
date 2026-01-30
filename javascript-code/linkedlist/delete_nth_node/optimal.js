
// delete Nth node from the end of linked list]

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
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
function deleteNthNode(head, N) {
    let slow = head
    let fast = head
    for (let i = 0; i < N; i++) {
        fast = fast.next
    }
    // If fast becomes null, delete head
    if (fast === null) {
        return head.next;
    }
    // Move both pointers until fast reaches last node
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;

    }
    // Delete kth node from end
    slow.next = slow.next.next;
    return head;  


}
// print he linked list
function traverseThelist(head) {
    while (head) {
        process.stdout.write(head.data + " ")
        head = head.next
    }
}

let arr = [1, 3, 4, 5, 6]
let head = convertarrtolinkedlit(arr)
head = deleteNthNode(head, 2)
console.log("print orginal arr", arr)
console.log("After Deleting the Nth node from back of the linkedList is ")// if you want to store into new variable
//than try to print printlist(head) it will show undefined in console 
// To make them work you have to return something in printliat function exaple"return result
// another option is above given 
traverseThelist(head)

