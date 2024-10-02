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
const firstTeacher = teachers.slice(1); 
console.log(firstTeacher);

//oppure 
/*const first_teacher = teachers.splice(1); 
console.log(first_teacher);

*/




// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa')
console.log(teachers);


// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah')
console.log(teachers);


// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes('Fabio');
console.log(isFabioPresent);


// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf('Lewis');
console.log(lewisIndex); //restituisce -1 perchè l'array è stato precedentemente modificato alla riga 29


// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.toString();
console.log(teachersString);


// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty


const isTeachersEmpty = teachers.length === 0;
console.log(isTeachersEmpty);
