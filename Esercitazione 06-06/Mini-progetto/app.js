function calcola(operazione) {
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    let risultato;

    // Controllo: verifica se i numeri sono validi
    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("risultato").textContent = "Inserisci due numeri validi.";
        return;
    }

    switch (operazione) {
        case "somma":
            risultato = n1 + n2;
            document.getElementById("risultato").textContent = `La somma è: ${risultato}`;
            break;
        case "sottrai":
            risultato = n1 - n2;
            document.getElementById("risultato").textContent = `La differenza è: ${risultato}`;
            break;
        case "moltiplica":
            risultato = n1 * n2;
            document.getElementById("risultato").textContent = `Il prodotto è: ${risultato}`;
            break;
        case "dividi":
            if ( n2 === 0) {
                document.getElementById("risultato").textContent = "Impossibile dividere per zero.";
                return;
            }
            risultato = n1 / n2;
            document.getElementById("risultato").textContent = `Il quoziente è: ${risultato}`;
            break;
        
    }
}
