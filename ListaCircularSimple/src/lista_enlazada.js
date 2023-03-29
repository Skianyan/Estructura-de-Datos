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

    if(this.head===null){             //
      this.head = newnode             //
      newnode.next = this.head        //
    }else if (this.head!==null){
      newnode.next = this.head
      var temp = this.head

    while (temp.next !== this.head){
      temp=temp.next
    }

    temp.next=newnode
  }
}

printList() {
  let temp = this.head;
  let values = 'O-> ';
  
  do{
          values += temp.data + '-> ';
          temp = temp.next;
      }while(temp !== this.head);

  console.log(values + 'O')
}

}

