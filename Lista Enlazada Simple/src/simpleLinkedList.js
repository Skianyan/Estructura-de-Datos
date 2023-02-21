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

//