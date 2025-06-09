// Esempio switch
let mese = 7

switch (mese) {
    case 1:
        console.log("Gennaio");
        break;
    case 2:
        console.log("Febbraio");
        break;
    case 3:
        console.log("Marzo");   
        break;
    case 4:
        console.log("Aprile");
        break;
    case 5:
        console.log("Maggio");
        break;
    case 6:
        console.log("Giugno");
        break;
    case 7:
        console.log("Luglio");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Settembre");
        break;
    case 10:
        console.log("Ottobre");
        break;
    case 11:
        console.log("Novembre");
        break;
    case 12:
        console.log("Dicembre");
        break;
    default:
        console.log("Numero non valido");
        break;
}
// Esempio operatori logici
let isStudent = true;
let haveExam = false;
let isHappy = true;

if (isStudent && haveExam && isHappy) {
    console.log("Lo studente ha un esame e si sente felice.");
}
// Esercizio operatori logici
const eta = 20;
const isSick = false;
if (eta >= 18 && !isSick) {
    console.log("Ok puoi uscire");
}

function saluta() {
    let nome = "Mario";
    console.log(`Ciao ${nome} Benvenuto!`);
}
saluta();


//Esercizio pari e dispari
function pariOdispari(numero) {
    if (numero % 2 === 0) {
        return "Il numero è pari";  
    } else {
        return "Il numero è dispari";
    }   
}
console.log(pariOdispari(10)); // "Il numero è pari"
console.log(pariOdispari(7));  // "Il numero è dispari"


