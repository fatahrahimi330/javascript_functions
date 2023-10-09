function getFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * getFactorial(n - 1);
    }
  }

  let num = 5;
  let factorial = getFactorial(num);
  console.log("The factorial of " + num + " is " + factorial);
  