import sortedList from "./src/lista_ordenada.js" ;
// Funciones
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }
// -----------
const list = new sortedList();

var listStartTime = performance.now()

//Creacion de la lista
  list.dInsertAtBeginning(1)
  list.dInsertAtBeginning(2)
  list.dInsertAtBeginning(3)
  list.dInsertAtBeginning(4)
  list.dInsertAtBeginning(5)
  list.dInsertAtBeginning(6)
  list.dInsertAtBeginning(7)
  list.dInsertAtBeginning(8)
  list.dInsertAtBeginning(9)
  list.dInsertAtBeginning(10)
  list.dInsertAtBeginning(5)

/* for(let i=0;i<100;i++){
    list.dInsertAtBeginning(getRandomInt(20))
}  */
// ------------
var listEndTime = performance.now()




var sortStartTime = performance.now()
list.sortWithSelect()
var sortEndTime = performance.now()
list.printListR()
list.printList()


console.log(`Creating the linked list took: ${msToTime(listEndTime - listStartTime)} milliseconds`)
console.log(`Sorting the linked list took: ${msToTime(sortEndTime - sortStartTime)} milliseconds`)
