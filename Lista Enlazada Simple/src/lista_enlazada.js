import Node from "./nodo.js";

export default // Clase LinkedList
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Insertar elemento al principio de la lista
    insertAtBeginning(data) {
      let temp
      temp = new Node(data)
      temp.next = this.head
      this.head = temp
    }
  
    // Insertar elemento al final de la lista
    insertAtEnd(data) {
      let node = new Node(data);
      let current;
      // Si la lista está vacía, agregar el nuevo nodo como head
      if (!this.head) {
        this.head = node;
      } else {
        current = this.head;
  
        while (current.next) {
          current = current.next;
        }
  
        current.next = node;
      }
  
      this.size++;
    }
    //NEW
    // Insertar elemento en una posición específica relativa a un dato insertado

    insertAfter(value,data){
      let current = this.head
      let previous = null
      while(current!=null){
        if(value===current.data){
            const temp = new Node(data);
            temp.next = current.next;
            current.next = temp;
        }
        else
        previous = current
        current = current.next
      }
    } 

    // Insertar elemento en una posición específica relativa a su posicion
    insertAt(data, index) {
      // Si el índice está fuera de rango
      if (index > 0 && index > this.size) {
        return;
      }
  
      // Insertar al principio
      if (index === 0) {
        this.insertAtBeginning(data);
        return;
      }
  
      const node = new Node(data);
      let current, previous;
  
      current = this.head;
      let count = 0;
  
      while (count < index) {
        previous = current;
        count++;
        current = current.next;
      }
  
      node.next = current;
      previous.next = node;
  
      this.size++;
    }
    //NEW
    // Eliminar elemento en una posición específica
    removeData(data){
      let current = this.head;
      let previous = null;

        while(current != null){
          if (current.data === data){
            if (previous == null){
              this.head = current.next
            } else{
              previous.next = current.next
            }
            this.size--
            return current.data
          }
          previous = current
          current = current.next
        }
        return null
    }

    removeFrom(index) {
      // Si el índice está fuera de rango
      if (index > 0 && index > this.size) {
        return;
      }
  
      let current = this.head;
      let previous;
      let count = 0;
  
      // Eliminar el primer elemento
      if (index === 0) {
        this.head = current.next;
      } else {
        while (count < index) {
          count++;
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.size--;
    }
  
    // Imprimir la lista
    printList() {
    let temp = this.head;
    let values = '';

    do{
            values += temp.data + '-> ';
            temp = temp.next;
        }while(temp !== null);
        console.log(values + 'null')
    }
    
  }


// INSERCION AL FINAL DE LA LISTA
// La insercion al final de la lista es menos eficiente debido a que normalmente,
// no se tiene un puntero al ultimo nodo y entonces, se ha de seguir la traza desde
// la cabeza de la lista hasta el ultimo nodo para que a continuacion se pueda realizar 
// la insercion.

// Una vez que la variable 'last' apunta al final de la lista, es decir, al ultimo
// nodo, las sentencias siguientes insertan un nodo al final.

// last.next = new nodo(data)
// last = last.next


// INSERTAR ENTRE DOS NODOS DE LA LISTA
// La insercion de un nuevo nodo no se realiza siempre al principio (en cabeza/head)
// de la lista o al final puede hacerse entre dos nodos cuales quiera de la lista

// ALGORITMO:
// 1. Crear un nodo con el nuevo elemento y el campo "enlace/next" a null. La referencia del
// nodo se asigna a "nuevo/new".
// 2. Hacer que el campo enlace del nuevo nodo apunte al nodo "N2" ya que el nodo creado se
// ubicará justo antes de N2.
// 3. La variable referencia "anterior" tiene la direccion de N1 y eso exige hacer que anterior.enlace
// apunte al nodo creado.

// ELIMINACION DE UN NODO   
// La operacion de eliminar un nodo de una lista enlazada supone enlazar el nodo anterior con el nodo
// siguiente al que se desea eliminary liberar la memoria.

// ALGORITMO:
// 1. Busqueda del nodo que contiene el dato. Se ha de obtener la direccion del nodo a eliminar y la
// direccion del anterior.
// 2. El enlace del nodo anterior que apunte al siguiente nodo del cual se elimina.
// 3. Si el nodo a eliminar es la cabeza de la lista (el primero), se modifica primero para que tenga
// la direccion del siguiente nodo.
// 4. La memoria del nodo se libera, dejando que todo esté referenciado.

//TO-DO fix eliminar "hacer target dato no el index"
//TO-DO fix insertar "insertar antes del dato no el index"