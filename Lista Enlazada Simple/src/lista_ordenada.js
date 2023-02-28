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

sortedList() {
    var temp = this.head;
    var count = 0;
    while (temp != null) {
        count++;
        temp = temp.next;
    }
    count;
}

// selectSort(){
//     let indiceMenor, i, j, n
//     n = a.lenght
//     for (i=0 ; i < n-1; i++){
//         indiceMenor = i
//         for(j=i+1;j<n; j++){
//             if (a[j] < a[indiceMenor])
//             indiceMenor = j
//         }
//         if (i != indiceMenor)
//             aux = a[i]
//             a[i] = a[j]
//             a[j] = aux
//         }
// }

}
