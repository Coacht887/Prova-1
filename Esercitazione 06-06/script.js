//


// Esercizio array e for...of
const numeri = [1, 2, 3, 4, 5, 6, 7, 13]
let somma = 0;
for (let numero of numeri) {
    somma += numero;
}
console.log(`La somma dei numeri é: ${somma}`);
 
// Funzione di utilità per "pulire" ogni stringa dell’array
function pulisciColori(array) {
  return array.map(colore => colore.trim());
}

// Esercizio 1 — Aggiungi due colori e rimuovi l’ultimo
let colori = [" rosso ", " blu", "verde "];  // con spazi extra per testare trim
colori.push(" giallo ");      // aggiungi primo colore
colori.push(" viola ");       // aggiungi secondo colore
colori.pop();                 // rimuovi l’ultimo

colori = pulisciColori(colori);  // rimuovi spazi bianchi da ogni stringa
console.log("Esercizio 1:", colori);

// Esercizio 2 — Verifica se "verde" è presente e stampa indice
if (colori.includes("verde")) {
  let indice = colori.indexOf("verde");
  console.log("Esercizio 2: 'verde' è presente all’indice", indice);
} else {
  console.log("Esercizio 2: 'verde' non è presente");
}

// Esercizio 3 — Cambia il colore in seconda posizione
colori[1] = " arancione ";
colori = pulisciColori(colori);  // rimuovi spazi anche dopo modifica
console.log("Esercizio 3:", colori);

// Esercizio 4 — Rimuovi il primo elemento e stampa l’array aggiornato
colori.shift();
console.log("Esercizio 4:", colori);
