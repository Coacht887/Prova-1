// Punto 1
function quadrato(numero) {
    return numero * numero;
}   
console.log(quadrato(9)); // Stampa 81
console.log(quadrato(5)); // Stampa 25

// Punto 2
let nomi = ["Anna", "Luca", "Marco"]
for (let i = 0; i < nomi.length; i++) {
    console.log(nomi[i].toUpperCase());
}
// Punto 3
let studente = {
    nome: "Franchino",
    corso: "JavaScript",
    votoFinale: 8
};
let testo = "Lo studente " + studente.nome + " dopo aver frequentato il corso di " + studente.corso + " ha ottenuto un voto finale di " + studente.votoFinale + ".";
console.log(testo);
// Testo con template literal
console.log(`Lo studente ${studente.nome} dopo aver frequentato il corso di ${studente.corso} ha ottenuto un voto finale di ${studente.votoFinale}`);