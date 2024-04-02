// RACCOLTA DATI
let total = 0;

for (let i = 0; i < 10; i++) {
    const number = parseInt(prompt(`dimmi un numero - ${i + 1} su 10`))
    total = total + number;
}

// OUTPUT
console.log(total);