// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

// Crea un array vuoto
const listOddnum = [];

// Chiedi per 6 volte all'utente di inserire un numero
for (let i = 0; i < 6; i++) {
    const num = parseInt(prompt("Dimmi un numero"));
    console.log(num);
    // se è dispari inseriscilo nell'array
    if (num % 2 === 1) {
        listOddnum.push(num);
   }
}
console.log(listOddnum); 



