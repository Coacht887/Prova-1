// Visualizzare l'intero documento
console.log(document);

// Visualizzare il titolo del documento
console.log(document.title);

console.log(document.querySelectorAll("li").length);

const stampa = document.querySelectorAll("li");

const lista = document.getElementById(`lista-elementi`);
console.log(lista);

for (let attr of lista.attributes) {
  console.log(`${attr.name}: ${attr.value}`);
}
// Visualizzare il contenuto di un elemento
console.log(lista.innerHTML);
console.log(document.querySelector(`.menu`));

console.log(document.querySelector(`#contenuto`));

const conDataId = document.querySelectorAll("[data-id]");
console.log(conDataId);

const linkInterni = document.querySelectorAll('a[href^="#"]');
console.log(linkInterni);

//Link interni con href che inizia con #
const linkEsterni = document.querySelectorAll('a[href^="http"]');

const genitore = contenuto.parentElement;
console.log(genitore);

console.log(genitore.tagName);

const figliDiretti = contenuto.children;
console.log(figliDiretti);

for (let figlio of figliDiretti) {
  console.log("--", figlio.tagName);
}
const elementi = document.querySelectorAll("li");
for (let elemento of elementi) {
  console.log(elementi.dataset.id);
}

const paragrafo = document.querySelector(".intro");
//Scrittura
paragrafo.textContent = "sono il paragrafo modifficato";

// Lettura
console.log("textContent:", paragrafo.textContent);
// Caratteristiche di textContent:// - Include tutto il testo, anche quello nascosto da CSS
// // - NON interpreta HTML// - È il più sicuro per input utente

