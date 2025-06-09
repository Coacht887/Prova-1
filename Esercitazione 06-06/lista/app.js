let listaSpesa = [];

function aggiungiElemento() {
    let nomeInput = document.getElementById("itemInput");
    let quantitaInput = document.getElementById("quantitaInput");

    let nome = nomeInput.value.trim();
    let quantita = parseInt(quantitaInput.value);

    if (nome && quantita > 0) {
        listaSpesa.push({ nome: nome, quantita: quantita });
        nomeInput.value = "";
        quantitaInput.value = 1;
        aggiornaLista();
    } else {
        alert("Inserisci un nome valido e una quantità maggiore di 0.");
    }
}

function aggiornaLista() {
    let ul = document.getElementById("lista");
    ul.innerHTML = "";

    listaSpesa.forEach((elemento, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${elemento.nome} - Quantità: 
            <input type="number" value="${elemento.quantita}" min="1" onchange="cambiaQuantita(${index}, this.value)" />
            <button onclick="rimuoviElemento(${index})">Rimuovi</button>
        `;
        ul.appendChild(li);
    });
}

function rimuoviElemento(index) {
    listaSpesa.splice(index, 1);
    aggiornaLista();
}

function cambiaQuantita(index, nuovaQuantita) {
    let quantita = parseInt(nuovaQuantita);
    if (quantita > 0) {
        listaSpesa[index].quantita = quantita;
    } else {
        alert("La quantità deve essere almeno 1.");
    }
    aggiornaLista();
}

