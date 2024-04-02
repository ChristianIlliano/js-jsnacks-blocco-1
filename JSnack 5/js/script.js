const list = []
console.log(list);
const number = parseInt(prompt("dimmi un numero"))

let outputMessage;

if (number % 2 !== 0) {
    list.push(number)
    outputMessage = `è dispari`;
} else if (number % 2 === 0 ) {
    outputMessage = `è pari`
}

console.log(outputMessage);
console.log(list);