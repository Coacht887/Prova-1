let n = 0;

while (n < 10) {
    console.log(n);
    n++;
}



//function somma(a, b) {
   // return a + b;
//

//t risultato = somma (5, 10);
//nsole.log("Il risultato della somma è: " + risultato);

function raddoppia(numero) {
    return numero * 2;
}
let numero = 7;
let risultatoRaddoppiato = raddoppia(numero);
console.log("Il numero raddoppiato è: " + risultatoRaddoppiato);

// Esempio di array
let colori = ["rosso", "verde", "blu", "giallo"];
console.log(colori[0]); // Stampa "rosso"
console.log(colori[1]); // Stampa "verde"   
console.log(colori[2]); // Stampa "blu"
console.log(colori[3]); // Stampa "giallo"  
console.log(colori.length); // Stampa 4

for (let i = 0; i < colori.length; i++) {
    console.log(colori[i]); 
}
let animali = ["panda", "struzzo", "elefante", "giraffa"];
console.log(animali[0]); // Stampa "panda"
console.log(animali[1]); // Stampa "struzzo"
console.log(animali[2]); // Stampa "elefante"
console.log(animali[3]); // Stampa "giraffa"
console.log(animali.length); // Stampa 4


function saluta(nome = "Utente") {
    console.log("Ciao " + nome + "!");
}

saluta(); // Stampa "Ciao Utente!"
saluta("Luca"); // Stampa "Ciao Luca!"
saluta(undefined); // Stampa "Ciao Utente!"

// Esempio di arrow function
const somma = (a, b) => a + b;
console.log(somma(5, 10)); // Stampa 15

const somma2 = (a, b) => a + b;
console.log(somma2(5, 10)); // Stampa 15

// esempio template literal
const descrizione = (nome, eta) => {
    return `Mi chiamo ${nome} e ho ${eta} anni.`;
}
console.log(descrizione("Alice", 30)); // Stampa "Mi chiamo Alice e ho 30 anni."

// Esempio di Interazione con l’utente
let nome = prompt("Inserisci il tuo nome:");
alert(`Ciao ${nome}! Benvenuto!`);