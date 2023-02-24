import sortedList from "./src/lista_ordenada.js" ;

let list = new sortedList();


list.insertAtBeginning(10);
list.insertAtBeginning(70);
list.insertAtBeginning(5);
list.removeData(5);
list.insertAtBeginning(5);
list.printList();

list.insertAfter(70,25)
list.printList()

list.bubbleSort()
list.printList()

/* 
list.insertAtBeginning(10);
list.insertAtBeginning(70);
list.insertAtBeginning(5);
list.insertAtEnd(1);
list.printList();

list.insertAtEnd(1000);
list.printList();


// list.removeFrom(1);
// list.printList();

list.insertAt(200,1);
list.printList();

list.insertAtBeginning(500);
list.insertAtBeginning(600);
list.insertAtBeginning(700);
list.printList(); */