// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// Chiedere lle parole con due prompt
const first = prompt("Inserisci la prima parola");
console.log(first);
const second = prompt("Inserisci la seconda parola");
console.log(second);

// calcolo lunghezza
const firstLenght = first.length;
const secondLenght = second.length;


let result;
if (firstLenght > secondLenght) {
    result = `${first} ${second}` ;
} else if (secondLenght > firstLenght) {
    result = `${second} ${first}` ;
} else {
result = `Le parole sono di lunghezza uguale`;
}
// OUTPUT
console.log(result);