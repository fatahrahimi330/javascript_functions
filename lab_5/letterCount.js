function letterCount(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === letter) {
        count++;
      }
    }
    return count;
  }

  let word = "implement";
  let letter = "e";
  let count = letterCount(word, letter);
  console.log("The number of times the letter '" + letter + "' appears in '" + word + "' is: " + count);
  