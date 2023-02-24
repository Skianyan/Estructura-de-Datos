import LinkedList from "./lista_enlazada.js";

// Sort Burbuja
export default
class sortingMethods extends LinkedList{  

    constructor(){
        super(null)
    }

bubbleSort(){
    let copy = this.head.data
    let cat
    while(copy !== null){
        while((cat = copy.next)){
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