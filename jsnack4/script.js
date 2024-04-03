const invitati = ["Gesu", "Lamadonna", "Ilbue", "l'asinello"];

let nomeUtente = prompt("Inserisci nome");

if (invitati.includes(nomeUtente)) {
    alert ("Sei ammesso alla festa");
}  else {
    alert("Fuori!")
}