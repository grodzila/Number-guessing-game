const form = document.getElementById("exercise");
const guessInput = document.getElementById("guess");
const guessButton = document.getElementById("guessButton");
const restartButton = document.getElementById("restartButton");
const result = document.getElementById("result");
const attemptsDisplay = document.getElementById("attempts");
let secretNumber;
let attempts;

function restartGame() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  attempts = 0;
  attemptsDisplay.textContent = "Attempts: 0";
  result.textContent = "";
  guessInput.value = "";
  guessInput.disabled = false;
  guessButton.disabled = false;
}

function checkGuess() {
  if (guessButton.disabled) {
    return;
  }

  const guess = guessInput.valueAsNumber;
  if (!Number.isInteger(guess) || guess < 1 || guess > 20) {
    result.textContent = "Enter a whole number from 1 to 20.";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = "Attempts: " + attempts;

  if (guess > secretNumber) {
    result.textContent = "Too high! Try again.";
  } else if (guess < secretNumber) {
    result.textContent = "Too low! Try again.";
  } else {
    result.textContent = "Correct! You won!";
    guessButton.disabled = true;
    guessInput.disabled = true;
  }
}

function showNumberSequence() {
  const numbers = [];
  let number = 1;

  while (number <= 10) {
    numbers.push(number);
    number++;
  }

  document.getElementById("sequence").textContent = numbers.join(", ");
}

restartButton.addEventListener("click", restartGame);
restartGame();
showNumberSequence();

form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkGuess();
});
