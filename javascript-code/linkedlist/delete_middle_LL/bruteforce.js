
// delete midlle of linked list

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class Solution {
    deleteMidOfLL(head) {
        if (head === null || head.next === null) return null

        let temp = head
        let cnt = 0
        while (temp !== null) {
            cnt++
            temp = temp.next

        }
        let mid = Math.floor(cnt / 2)
        temp = head
        while (temp !== null) {
            mid--;
            if (mid === 0) {
                temp = temp.next
                temp.next = temp.next.next
                break
            }
        }

        return head
    }
}

// function to print Linked list
function traverseList(head) {
    while (head) {
        process.stdout.write(head.data + " ");
        head = head.next
    }
    console.log()
}
// Driver code
function main() {
    // Create a sample linked list
    // with a loop for testing
    let head = new Node(1);
    let second = new Node(2);
    let third = new Node(3);
    let fourth = new Node(4);
    let fifth = new Node(5);

    head.next = second;
    second.next = third;
    third.next = fourth;
    fourth.next = fifth;
    fifth.next = null;

    let sol = new Solution();
    head = sol.deleteMidOfLL(head)
    traverseList(head)

}
main()

