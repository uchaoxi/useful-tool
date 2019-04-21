function Node(val,next=null){
    // constrctor(val,next=null){
        this.val = val;
        this.next = next;
    // }
} 
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

// while(head!=null){
//     console.log(head.val);
//     head = head.next;
// }

//算法不使用额外存储空间，实现链表逆序
/*
初始：
prev = null;
head = head;
next = head.next;
迭代修改
head.next = prev;
prev = head;
head = next;
next = head.next
*/
function reverseLinkedlist(head){
    let prev = null;
    let next = head.next;
    while(next != null){
        head.next = prev;
        prev = head;
        head = next;
        next = head.next;
    }
    head.next = prev;   
    return head;       
}
let head1 = reverseLinkedlist(head);

while(head1!=null){
    console.log(head1.val);
    head1 = head1.next;
}