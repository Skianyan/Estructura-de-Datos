import Node from "./nodo.js";

export default // Clase LinkedList
class SCLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  scInsert(data){
    let newnode = new Node(data)
    let temp = this.head
    if(this.head === null&&this.tail===null){
      this.head=newnode
      newnode.next=this.head
    }
    else if (this.head!=null){
      this.tail=newnode
      newnode.next=this.head
      this.head.next=this.tail
    }
  }
  printList() {
    let temp = this.head;
    let values = '';
    
    if(temp){
    do{
            values += temp.data + '-> ';
            temp = temp.next;
        }while(temp !== this.head);
    }
    console.log(values + '')
}
}

