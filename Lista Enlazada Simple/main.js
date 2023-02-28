import sortedList from "./src/lista_ordenada.js" ;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getCount() {
    var temp = this.head;
    var count = 0;
    while (temp != null) {
        count++;
        temp = temp.next;
    }
    return count;
}

let list = new sortedList();

for(let i=0;i<10;i++){
    list.insertAtBeginning(getRandomInt(50))
}

var startTime = performance.now()
list.selectSort()
var endTime = performance.now()
list.printList()
console.log(getCount)

console.log(`Call to do Something took: ${endTime - startTime} milliseconds`)
