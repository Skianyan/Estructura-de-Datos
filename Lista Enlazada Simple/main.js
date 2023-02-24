import sortedList from "./src/lista_ordenada.js" ;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let list = new sortedList();

for(let i=0;i<100000;i++){
    list.insertAtBeginning(getRandomInt(50000))
}

var startTime = performance.now()
list.bubbleSort()
var endTime = performance.now()
list.printList()

console.log(`Call to do Something took: ${endTime - startTime} milliseconds`)
