// Unsorted linked list

/* below alogrithm says if give item greater than 
If ITEM > DATA[P]
STOP SEARCH
Because list is sorted, item cannot appear later

If ITEM < DATA[P]
    P := LINK[P]
Else if ITEM = DATA[P]
    LOC := P
    Exit
Else
    LOC := NULL
    Exit

*/

// 1.node class
class node {
    constructor(data){
        this.data = data;
        this.next = null
    }
}

//2.create linked list
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30)


function searchUnsorted(head,item){
    let p = head  //step 1 p := start

    //Repeat while P ≠ NULL
    while(p !== null){//step 2
        if( p.data ===item){ //step 3
            return p // stored in local loc:=p
        }
        p = p.next // moving to next node 
    }
    return null // step 4 loc:= null
}
let result = searchUnsorted(head,25);
if(result !== null){
    console.log("item found",result.data)
}else{
    console.log("item not found")
}