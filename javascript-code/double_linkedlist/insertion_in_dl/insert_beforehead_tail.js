
class Node {
    constructor(data, next = null, back = null) {
        this.data = data;
        this.next = next;
        this.back = back  }
}

function convertArrtoDL(arr) {

    if (arr.length === 0) return null
    let head = new Node(arr[0])

    let prev = head
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i],null,prev)
        prev.next = temp
        prev = temp
    }

    return head
}
// insert value before the head
function insertBeforeHead(head,val){
    // creating newhead = that val is new head, newhead next will be is head, and newHead 
    // previous should pointing to null accroding to new head
    let newHead = new Node(val,head,null)
    //prvious head should point to the newHead
    head.back = newHead

    //once this done i written to the 
    return newHead
}
// insert value before the tail
function insertBeforetail(head,val){
    if(head.next === null){
        return insertBeforeHead(head,val)
    }
    let tail = head
    while(tail.next !== null){
        tail = tail.next
    }

    // tail.back is prev 
    let prev = tail.back

    //creating a new node with value = val ,where will bw the next point to the tail
    //tail.back point to the prev
    let newNode = new Node(val,tail,prev)

    //prev next should point to newNode our prev is 5 and when we insertig a new Node before the tail(67) than prev.next point to newNode
    prev.next = newNode
    //tail.back should point to newNode our tail.back  is 5 and when we insertig a new Node than tail.back point to newNode
    tail.back = newNode
    return head
}

function print(head) {
    let curr = head
    while (curr) {
        // process.stdout.write(head.data + " ");
        console.log(curr.data)
        curr = curr.next
    }
    
}
let arr = [23, 4, 5, 67]
let head = convertArrtoDL(arr)

// insert value before the head
head = insertBeforeHead(head,20)

// insert value before the tail
head = insertBeforetail(head,55)


print(head)