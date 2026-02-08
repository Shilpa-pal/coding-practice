// Remove tail
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
/* mover = head is mean now mover pointing to The head.
 2ns.step temp create new node than mover.next = temp mean mover go ahead and The link is created here, not movement. 
mover = temp -This does NOT create a link.
This moves the mover reference forward, so now mover points to the newly created node.
*/
class linkedList {
    convertArrtoLL(arr) {
        let head = new Node(arr[0])
        let mover = head
        for (let i = 1; i < arr.length; i++) {
            let temp = new Node(arr[i])
            mover.next = temp // connect the nodes
            //If we don’t write mover = temp, the new node will be created, but the next node will NOT connect properly with the previous node.
            mover = temp
        }
        return head
    }
 
//to delete the tail we have to stop before element that going to delete
    removetail(head) {
        if (head === null || head.next === null) return null//(2nd condition mean it has only one ele that pointing to the null than return null too)
        let temp = head// we don't want to alter the head we want to preserved the head that's why we doing this 
        while (temp.next.next !== null) {// untill this condition true
            temp = temp.next //  I'll keep on going 
        }
        temp.next = null
        return head

    }
}

let arr = [21, 24, 38, 68, 98]
let obj = new linkedList(arr)
let head = obj.convertArrtoLL(arr)

//remove head 
head = obj.removetail(head)

// traversing
let temp = head
while (temp !== null) {
    console.log(temp.data)
    temp = temp.next
}