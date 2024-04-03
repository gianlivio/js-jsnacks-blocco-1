let N = parseInt(prompt("Inserisci il numero N:"));

// Stampare il cubo dei primi N numeri
for (let i = 1; i <= N; i++) {
    let cubo = Math.pow(i, 3); // Math.pow() calcola i al cubo
    console.log("Il cubo di", i, "è:", cubo);
}