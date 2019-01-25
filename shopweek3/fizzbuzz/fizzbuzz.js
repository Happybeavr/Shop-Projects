// JavaScript source code
var randomNumber = Math.round(Math.random() * 15);

console.log(randomNumber);

if (randomNumber % 3 === 0 && randomNumber != 15) {
    alert("fizz");
}
else if (randomNumber % 5 === 0 && randomNumber != 15) {
    alert("buzz");
}
else if (randomNumber % 5 === 0 && randomNumber % 3 === 0) {
    alert("fizzbuzz");
}