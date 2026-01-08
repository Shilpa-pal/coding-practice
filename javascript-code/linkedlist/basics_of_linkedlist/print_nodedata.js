//Create a Node using a value from an array and print the node’s data.
class Node {
    constructor(data,next = null){
        this.data = data;
        this.next  = next;
    }
}
let arr = [2,5,6,8]
let y = new Node(arr[2])
console.log(y.data)