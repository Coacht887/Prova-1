// Esercizio 1
function saluta(lingua = "IT"){
    if (lingua === "IT") {
        console.log("Ciao!");
    }
    else if (lingua === "EN") {
        console.log("Hello!");
    }
    else {
        console.log("Lingua non supportata.");
    }
}
saluta(); // Stampa "Ciao!"
saluta("EN"); // Stampa "Hello!"    

// Esercizio 2
function sottrazione(a, b) {
    return a - b;
}
function somma(a, b) {
    return a + b;
}

function eseguiOperazione(a, b, operazione) {
    return operazione(a, b);
}
console.log(eseguiOperazione(10, 5, sottrazione)); // Stampa 5
console.log(eseguiOperazione(10, 5, somma)); // Stampa 15