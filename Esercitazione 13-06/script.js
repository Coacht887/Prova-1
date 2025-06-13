//studenti di esempio
const studenti = [
  { nome: "Mario Rossi", voto: 8, presente: true },
  { nome: "Luigi Bianchi", voto: 5, presente: false },
  { nome: "Anna Verdi", voto: 9, presente: true },
  { nome: "Beatrice Neri", voto: 6, presente: true },
  { nome: "Carlo Blu", voto: 4, presente: true },
  { nome: "Davide Rosa", voto: 7, presente: false },
  { nome: "Elena Gialli", voto: 10, presente: true },
  { nome: "Federico Viola", voto: 3, presente: false },
  { nome: "Giorgia Azzurra", voto: 8, presente: true },
  { nome: "Lorenzo Marrone", voto: 2, presente: false },
  { nome: "Martina Rosa", voto: 6, presente: true },
  { nome: "Simone Nero", voto: 5, presente: true },
];
const btn = document.getElementById("run");
const out = document.getElementById("output");

// funzione per mostrare output
function log(titolo, dato) {
  const h4 = document.createElement("h4");
  const pre = document.createElement("pre");
  h4.textContent = titolo;
  pre.textContent = JSON.stringify(dato, null, 2);
  out.append(h4, pre);
}

btn.addEventListener("click", () => {
  out.innerHTML = "";

  // 1. Operatore ternario
  const studente = studenti[0];
  studente.voto >= 6 ? log("Promosso", studente) : log("Bocciato", studente);

  // 2. Spread operator - aggiunge due studenti
  const tuttiStudenti = [
    ...studenti,
    { nome: "Giovanni Bianchi", voto: 8, presente: true },
    { nome: "Giovanna Rossi", voto: 7, presente: true },
  ];
  log("Tutti gli studenti", tuttiStudenti);

  // 3. Rest operator - raggruppa i nomi
  function raggruppaNomi(...nomi) {
    return nomi;
  }
  const nomiStudenti = raggruppaNomi(...studenti.map((studente) => studente.nome));
  log("Nomi studenti", nomiStudenti);

  // 4. Map - creare un array di nomi e voti
  const nomi = tuttiStudenti.map((studente) => studente.nome);
  const voti = tuttiStudenti.map((studente) => studente.voto);
  log("Voti e nomi studenti", `Nomi studenti: ${tuttiStudenti.map((studente) => studente.nome)} ¦ Voti studenti: ${tuttiStudenti.map((studente) => studente.voto)}`);

  //  Array di stringhe formattate "Nome: (voto)"
const studentiFormattati = tuttiStudenti.map(
  (studente) => `${studente.nome}: (${studente.voto})`
);
log("Studenti formattati", studentiFormattati);

// 5. Filter
const presenti = tuttiStudenti.filter((studente) => studente.presente);
log("Studenti presenti", presenti);


// 6.forEach
  const ul = document.createElement("ul");
tuttiStudenti.forEach((studente) => {
  const li = document.createElement("li");
  li.textContent = `${studente.nome} – ${studente.presente ? "✔️" : "❌"}`;
  ul.appendChild(li);
});
out.appendChild(ul);

// 7. Destructuring + map
function presentaStudente({ nome, voto, presente }) {
  return `Ciao, sono ${nome}, ho preso ${voto} e sono ${presente ? "presente" : "assente"}.`;
}
const presentazioni = tuttiStudenti.map(presentaStudente);
log("Presentazioni studenti", presentazioni);

// form per rimuovere studente

const form = document.createElement("form");
const input = document.createElement("input");
const button = document.createElement("button");
button.textContent = "Rimuovi studente";
form.appendChild(input);
form.appendChild(button);
out.appendChild(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Aggiorna l'array originale (solo una volta!)
  tuttiStudenti = tuttiStudenti.filter(
    (studente) => studente.nome.toLowerCase() !== input.value.toLowerCase()
  );

  // Mostra il nuovo array
  log("Studenti aggiornati", tuttiStudenti);

  // Pulisci il campo input
  input.value = "";
});
studenti.forEach((studente) => {
  const li = document.createElement('li');
  li.textContent = `${studente.nome} - Voto: ${studente.voto}`;
  li.classList.toggle('promosso', studente.voto >= 6);
  li.classList.toggle('bocciato', studente.voto < 6);
  out.appendChild(li);
});

});
