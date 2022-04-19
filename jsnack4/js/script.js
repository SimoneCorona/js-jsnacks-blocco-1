// Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.


// Chiedi un numero di 4 cifre all'utente
do {
    userNum = prompt("Dimmi un numero a 4 cifre");
} while (userNum.length != 4);

// calcola la somma di tutte le cifre che compongono il numero
let somma = 0;
for (let i = 0; i < userNum.length; i++) {
    console.log('Sommo '+userNum[i]);
    somma += parseInt(userNum[i]);
}
console.log(somma);
