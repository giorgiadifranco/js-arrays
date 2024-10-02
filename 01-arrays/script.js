//console.log("ciao");


const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array

const fourthTeacher = teachers.indexOf('Phil') ;
console.log(fourthTeacher);

//oppure, una volta trovato l'indice, posso stampare il nome 
const fourtheacher = teachers[3];
console.log(fourtheacher);



// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

teachers.splice(5, 1, 'patrick')
console.log(teachers);


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto



const lastTeacher = teachers.pop();
console.log(teachers);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = null;

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = null;

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;