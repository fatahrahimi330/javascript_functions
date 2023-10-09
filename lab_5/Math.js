const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the first number: ", function(num1) {
  rl.question("Enter the second number: ", function(num2) {
    rl.question("Enter 'm' for multiplication or 'd' for division: ", function(operation) {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      if (operation === 'm') {
        let product = num1 * num2;
        console.log("The product of " + num1 + " and " + num2 + " is " + product);
      } else if (operation === 'd') {
        let quotient = num1 / num2;
        console.log("The quotient of " + num1 + " and " + num2 + " is " + quotient);
      } else {
        console.log("Invalid operation. Please enter 'm' for multiplication or 'd' for division.");
      }

      rl.close();
    });
  });
});
