import Nodo from "./nodo.js";

export default class ListaEnlazada{
    constructor(cabeza = null){
        this.cabeza = cabeza;                
    }

    /**
     * Este método insertar los nodos al inicio de la lista     * 
     * @param {*} data El parámetro data puede tomar cualquier valor
     */
    insertarInicio(data){
        let nuevo;
        nuevo = new Nodo(data);
        nuevo.enlace = this.cabeza;
        this.cabeza = nuevo;
    }

    /**
     * Este método inserta entre dos nodos en una lista enlazada simple
     * @param {*} valorInsertado Es el valor que se insertará en la lista
     * @param {*} buscar Indica detrás de qué nodo se debe insertar
     */
    insertarEntre(valorInsertado, buscar){

    }

    /**
     * 
     * @param {*} dato Es el dato a eliminar de la lista enlazada
     */
    eliminar(entrada){
        let temp = this.cabeza;
        let encontrado = false
        let actual = temp;
        let anterior = null;
        while( (actual !== null) && !encontrado ){
            encontrado = (actual.data === entrada);
            if( !encontrado ){
                anterior = actual;
                actual = actual.enlace;
            }
            if( actual !== null ){
                if( actual === this.cabeza ){
                    this.cabeza = actual.enlace;                    
                } else{
                    anterior.enlace = actual.enlace;
                }
            }
        }
        console.log(`Nodo eliminado....`);
    }
    
    impresion(){
        let temp = this.cabeza;
        let valores = '';
        
        do{
            valores += temp.data + '-> ';
            temp = temp.enlace;
        }while(temp !== null);
        console.log(valores + 'null')
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