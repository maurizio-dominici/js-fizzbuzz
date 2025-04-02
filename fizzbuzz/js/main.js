// SCRIVO UN CICLO FOR PER CONTARE I NUMERI DA 1 A 100

for (let i = 1; i <= 100; i++) {
  // DICHIARO LE "COSTANTI"
  const multiplex3 = i % 3 === 0;
  const multiplex5 = i % 5 === 0;

  // IMPOSTO GLI "IF", "ELSE", "ELSE IF"

  if (multiplex3 && multiplex5) {
    console.log("FizzBuzz");
  } else if (multiplex3) {
    console.log("Fizz");
  } else if (multiplex5) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
