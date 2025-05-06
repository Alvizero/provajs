const nomeInput = document.getElementById("nome");
const cognomeInput = document.getElementById("cognome");
const etaInput = document.getElementById("eta");

document.getElementById("accedi").addEventListener("click", accedi);

function accedi() {
  let nome = nomeInput.value.trim();
  let cognome = cognomeInput.value.trim();
  let eta = etaInput.value.trim();

  if (nome === "") {
    alert("Inserisci il nome.");
    nomeInput.focus();
    return;
  }

  if (cognome === "") {
    alert("Inserisci il cognome.");
    cognomeInput.focus();
    return;
  }

  if (eta === "" || eta < 18) {
    alert("Inserisci l'età oppure devi avere almeno 18 anni!");
    etaInput.focus();
    return;
  }

  quiz();
}

function quiz() {
  document.getElementById("registrati").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  document.getElementById("benvenuto").innerHTML = "Benvenuto " + nomeInput.value + " " + cognomeInput.value;
}


document.getElementById("conferma").addEventListener("click", valutaQuiz);

function valutaQuiz() {
  let punteggio = 0;

  const risposta1 = document.querySelector('input[name="q1"]:checked');
  const risposta2 = document.querySelector('input[name="q2"]:checked');

  if (risposta1 && risposta1.value === "roma") punteggio++;
  if (risposta2 && risposta2.value === "8") punteggio++;

  let messaggio = "hai fatto: " + punteggio + " punti su 2";
  document.getElementById("risultato").innerHTML = messaggio;
}