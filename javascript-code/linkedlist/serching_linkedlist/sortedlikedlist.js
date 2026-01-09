
// sorted linked list

class Node {
    constructor(body){
        this.data = data;
        this.next = null
    }
}

let head = new Node(5)
head.next = new Node(10);
head.next.next = new Node(20)

function sortedList(head,item){
    let p = head
    while( p !== null){
        if(p.data === item){
            return p
        }
        p = p.next
    }
    return null
}
//testing
let ans = sortedList(head,10)

if( ans !== null){
    console.log("data found",ans.data)
}else{
     console.log("item not found")
}