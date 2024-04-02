let somma = 0;

for (let i=0; i < 10; i++) {
let numeroInserito = prompt("Inserisci un numero:");
somma += parseInt(numeroInserito);
}

console.log("somma" + somma);