let numDispari = [];

for (let i = 0; i < 6; i++) {
    let num = parseInt(prompt("Digitare un numero"));
    if (num % 2 !== 0) {
        numDispari.push(num);
    }
}

console.log("numeri dispari inseriti " + numDispari);