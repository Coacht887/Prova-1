// Esercizio 3
const sottrazione = (a, b) => a - b;
const somma = (a, b) => a + b;
const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log(eseguiOperazione(10, 5, sottrazione)); // Stampa 5
console.log(eseguiOperazione(10, 5, somma)); // Stampa 15

const saluta = (lingua = "IT") => {
    if (lingua === "IT") {
        console.log("Ciao!");
    } else if (lingua === "EN") {
        console.log("Hello!");
    } else {
        console.log("Lingua non supportata.");
    }
}
// Esempio
saluta("IT");
saluta("EN"); 
saluta("FR"); // Stampa "Lingua non supportata."
