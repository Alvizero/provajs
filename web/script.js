document.getElementById("accedi").addEventListener("click", accedi);

function accedi() {
  const nomeInput = document.getElementById("nome");
  const cognomeInput = document.getElementById("cognome");
  const etaInput = document.getElementById("eta");

  const nome = nomeInput.value.trim();
  const cognome = cognomeInput.value.trim();
  const eta = etaInput.value.trim();

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

  if (eta === "") {
    alert("Inserisci l'età.");
    etaInput.focus();
    return;
  }

 /* if (nome === "" || cognome === "" || eta === "") {
    alert("Per favore, compila tutti i campi per accedere.");
    return;
  }*/
 

  document.getElementById("registrati").style.display = "none";
  document.getElementById("quiz").style.display = "block";
}


document.getElementById("conferma").addEventListener("click", valutaQuiz);

function valutaQuiz() {
  let punteggio = 0;

  const risposta1 = document.querySelector('input[name="q1"]:checked');
  const risposta2 = document.querySelector('input[name="q2"]:checked');

  if (risposta1 && risposta1.value === "Roma") punteggio++;
  if (risposta2 && risposta2.value === "8") punteggio++;

  document.getElementById("risultato").innerHTML = "hai fatto: " + punteggio + "punti su 2";
}