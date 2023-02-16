import Node from "./node.js";

export default class SimpleLinkedList{
    const(head=null){
        this.head = head
    }

    insert(data){
        let nuevo
        nuevo = new Node(data)
        nuevo.next = this.head
        this.head = nuevo
    }

    print(){
        do{
        
        }while ()
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

// 1. Crear un nodo con el nuevo elemento y el campo "enlace/next" a null. La referencia del
// nodo se asigna a "nuevo/new"
// 2. Hacer que el campo enlace del nuevo nodo apunte al nodo "N2" ya que el nodo creado se
// ubicará justo antes de N2
// 3. La variable referencia "anterior" tiene la direccion de N1 y eso exige hacer que anterior.enlace
// apunte al nodo creado