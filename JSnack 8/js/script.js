const number = prompt("Dimmi un numero a 4 cifre")

if (number > 999) {
  calculator = parseInt(number[0]) + parseInt(number[1]) + parseInt(number[2])  + parseInt(number[3])
  console.log(calculator);
} else {
    console.log("non valido");
}