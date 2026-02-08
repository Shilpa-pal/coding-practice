
class Node {
    constructor(data, next_node = null, back_node = null) {
        this.data = data;
        this.next = next_node;
        this.back = back_node
    }
}
function convertArrToDL(arr) {
    let head = new Node(arr[0]);

    let prev = head
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i], null, prev)

        prev.next = temp
        prev = temp

    }
    return head
}

// remove from kth elemtent

function deleteHead(head) {
    if (head === null || head.next === null) {
        return null
    }
    let prev = head
    head = head.next; //keep moving we not used loop beacuse we know head position 
    head.back = null  //pointing to null those have linked with head.back 
    prev.next = null //pointing to null those have linked with prev.next
    return head
}

function deleteTail(head) {
    if (head === null || head.next === null) {
        return null
    }
    let tail = head
    while (tail.next !== null) {
        tail = tail.next
    }
    let newTail = tail.back;
    newTail.next = null;
    tail.back = null;
    return head

}

function removeKthEle(head, k) {
    //this is under the assumption that K will be between 1 and the length of the linked list
    if (head === null) {
        return null
    }
    let cnt = 0

    // you can give variable name temp instead of kNode
    let kNode = head
    while (kNode !== null) {
        cnt++;
        //if cnt equal to k we found than we breack the while loop
        if (cnt === k) break;

        //if not found we keep moving to next node
        kNode = kNode.next
    }
    let prev = kNode.back
    let front = kNode.next

    // if 'prev' equal to null and 'front' equal to null it means it has single element ,
    // to delete them we have return null
    if (prev === null && front === null) {
        return null
    }

    // if prev is not their means in this case it's head we need to delete the head
    else if (prev === null) {
        return deleteHead(head)
    }

    //if tail is null  means I've been asked to deltete tail
    else if (front === null) {
        return deleteTail(head)
    }

    prev.next = front;// prev your next should be front just remove it
    front.back = prev // front your back should be prev becasue this middle kth node is gone

    kNode.next = null // Knode your next should be null
    kNode.back = null //Knode your back should be null

    // if abov this condition not met we have to return head. but before this I have to change a pointer
    return head
}
function printAll(head) {
    let current = head
    while (current !== null) {

        //Print before moving → prints current element 2.Move before printing → skips current element
        //First iteration → prints 1st element 2.Second iteration → prints 2nd element 3.Third iteration → prints 3rd element
        console.log(current.data) //rule: Read → then move ,Never move → then read                             
        current = current.next
    }
}

let arr = [23, 4, 5, 45, 87]
let head = convertArrToDL(arr)
head = removeKthEle(head, 2)

printAll(head)