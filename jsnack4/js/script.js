// Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.


// Chiedi un numero di 4 cifre all'utente
do {
    userNum = prompt("Dimmi un numero a 4 cifre");
} while (userNum.length != 4);

// Creare array del num utente "smontato"
let arrOfuserNum = Array.from(String(userNum));
console.log(arrOfuserNum);

// calcola la somma di tutte le cifre che compongono il numero
let somma = 0;
for (let i = 0; i <= arrOfuserNum.length; i++) {
    somma = somma + i; 
}
console.log (somma);
