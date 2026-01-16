// remove tail of the linked list

class Node {
    constructor(data, next_node = null, back_node = null) {
        this.data1 = data
        this.next = next_node;
        this.back = back_node
    }
}

function convertionOfArrtoDL(arr) {
    let head = new Node(arr[0])
    let prev = head

    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i], null, prev)

        prev.next = temp
        prev = temp
    }
    return head
}
// removing tail
function removeTail(head) {
    if (head === null || head.next === null) {
        return null
    }
    let tail = head
    while(tail.next !== null){
        tail = tail.next //keep moving forword until above condition gets true 
    }

    /* Find the new tail
Node newTail = tail.back; → tail.back means previous node of last node
newTail → [6]
tail    → [8]

step2. Cut forward link
newTail.next = null;
👉 Means: “[6] should NOT point to [8] anymore”
Before:[6] -> [8]
After:[6] -> null
🔹 6️⃣ Cut backward link   :-tail.back = null;
👉 Means: “[8] should NOT point back to [6]”
Now [8] is fully disconnected ❌*/
    let newTail = tail.back;
    newTail.next = null;
    tail.back = null;
    return head
}
function print(head) {
    while (head) {
        process.stdout.write(head.data1 + " ")
        console.log(head)
        head = head.next
    }
    console.log()
}
let arr = [23, 3, 46, 6, 8]
let head = convertionOfArrtoDL(arr)
head = removeTail(head)
print(head)