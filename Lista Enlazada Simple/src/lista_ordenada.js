import LinkedList from "./lista_enlazada.js";

export default // Sort Burbuja
class sortedList extends LinkedList{  

    constructor(){
        super(null)
    }

bubbleSort(){
    let copy = this.head
    let cat 
    while(copy !== null){
        cat = copy.next
        while(cat !== null){
            if(copy.data>cat.data){
                let temp = copy.data
                copy.data = cat.data
                cat.data = temp
            }
            cat = cat.next
        }
        copy = copy.next
    }
}

}