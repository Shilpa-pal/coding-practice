
// add two linked list and calculte  sum
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
// conver arr to linked list
function createList(arr) {
    if (arr.length === 0) return null

    let head = new Node(arr[0])
    let prev = head

    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i]) //create a node
        prev.next = temp// connect previous node to new node
        prev = temp// move forword
    }
    return head
}

// add to number 

function addSumofTwoNum(head1, head2) {

    let t1 = head1
    let t2 = head2
    let dummyNode = new Node(-1)
    let curr = dummyNode
    let carry = 0
    while (t1 !== null || t2 !== null) {
        let sum = carry

        if (t1 !== null) {
            sum += t1.data  // sum with t1 and carry 
            t1 = t1.next // move ahead
        }

        if (t2 !== null) {
            sum += t2.data
            t2 = t2.next
        }

        // Create node with digit
        // it save unit number and rest number trasfer to the carry
        curr.next = new Node(sum % 10)

        //update carry
        carry = Math.floor(sum / 10)

        // move ahead
        curr = curr.next


    }
    if (carry > 0) {
        curr.next = new Node(carry)
    }

    // Return head of result list
    return dummyNode.next;

}

// traversing the list

function printList(head) {
    let temp = head
    let res = []
    while (temp) {
        res.push(temp.data)
        temp = temp.next
    }
    console.log(res.join(" -> "))
}

let arr1 = [2, 4, 3], arr2 = [5, 6, 4]
let l1 = createList(arr1)
let l2 = createList(arr2)

let head = addSumofTwoNum(l1,l2)
printList(head) // result list
//below code written to print each seprate linked list
// printList(l1) // original list 1
// printList(l2)// original list 2
