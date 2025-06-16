const btn = document.getElementById("run");
const out = document.getElementById("output");

function log(title, content) {
  out.textContent += `-- ${title} --\n`;
  out.textContent +=
    (typeof content === "string" ? content : JSON.stringify(content, null, 2)) +
    "\n\n";
}

function createUserCard(user) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Email:</strong> ${user.email}</p>
  `;

  out.appendChild(card);
}

btn.addEventListener("click", async () => {
  out.textContent = ""; // Pulisce l'output

  const API_BASE_URL = "https://jsonplaceholder.typicode.com";

  async function apiCall(endpoint) {
    try {
      log("API Call", `Chiamando: ${API_BASE_URL}${endpoint}`);

      const response = await fetch(`${API_BASE_URL}${endpoint}`);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      log("API Success", `Dati ricevuti da ${endpoint}`);
      return data;
    } catch (error) {
      log("API Error", `Errore per ${endpoint}: ${error.message}`);
      return null;
    }
  }

  // Test della utility
  log("TEST UTILITY FUNCTION", "Usiamo la funzione riutilizzabile");

  const user = await apiCall("/users/1");
  if (user) {
    log("Dati User ricevuti", `Nome: ${user.name}, Email: ${user.email}`);
    createUserCard(user); // Mostra la card utente
  }

  const post = await apiCall("/posts/1");
  if (post) {
    log("Dati Post ricevuti", `Titolo: ${post.title}`);
  }

  const invalidData = await apiCall("/invalid-endpoint");
  log(
    "Risultato endpoint invalido",
    invalidData ? "Dati ricevuti" : "null come previsto"
  );
});
