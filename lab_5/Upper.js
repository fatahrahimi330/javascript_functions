let str = "hello, world!";
let firstLetter = str.charAt(0).toUpperCase();
let restOfTheString = str.slice(1);
let result = firstLetter + restOfTheString;

console.log("Original string: " + str);
console.log("Modified string: " + result);
