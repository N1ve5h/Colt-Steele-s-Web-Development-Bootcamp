let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
  maximum = parseInt(prompt("Enter the maximum number!"));
}

console.log(maximum);

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  attempts++;

  if (guess > targetNum) {
    guess = prompt("TOO HIGH, Enter your guess!");
  } else {
    guess = prompt("TOO LOW, Enter your guess!");
  }
}
if (guess === "q") {
  console.log("YOU QUIT!");
} else {
  console.log("You got it! It took you " + attempts + "  guesses");
}
