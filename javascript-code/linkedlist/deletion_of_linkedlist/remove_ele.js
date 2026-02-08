// Remove Element by value

class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}
// converting array to linkedlist
function convertArr2LL(arr) {
    if (arr.length === 0) return null
    let head = new Node(arr[0])

    let mover = head
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i])
        mover.next = temp
        mover = temp
    }
    return head
}
// remove Element by value
function removeByElement(head, ele) {
    if (head === null) return head

    //1st element of array is equal to element than return head.next element
    if (head.data === ele) {
        return head.next
    }

    //Always points to the node before temp, Needed so we can reconnect links
    let prev = head

    //Used to move through the list ,We never move head
    let temp = head.next

    //Traverse the list
    //Walk through nodes one by one Stop at end of list
    while (temp !== null) {

        //If current node is ele ,We found the node to delete
        if (temp.data === ele) { // temp.data -checks every node, not just the first, temp.data prints all nodes because temp moves
            //console.log(head.data); It would always print the same first value because head never moves.

            prev.next = prev.next.next
            break
        }
        prev = temp //Move prev forward to where temp currently is prev always stays one step behind temp
        temp = temp.next //Move temp to the next node”
    }
    return head
}
//traversing
function print(head) {
    let temp = head
    let result = ""
    while (temp !== null) {
        result += temp.data + " "

        /*head.data always prints the first node because head never moves, whereas temp.data inside 
        a loop prints all nodes because temp traverses the list

 `console.log(head.data)`                        only first element 
 `console.log(temp.data)` without moving temp    only first element 
`console.log(temp.data)` + `temp = temp.next`    all   elemnt     
*/
        console.log(temp.data)// but temp.data moves so it wil print all ele of LL
        temp = temp.next
    }
    // console.log(result.trim())
}


let arr = [23, 4, 6, 99, 100]
//converted array to LL
let head = convertArr2LL(arr)

// remove by element
head = removeByElement(head, 4)
print(head)//don't write console.log(head) it only print 1st number from list
