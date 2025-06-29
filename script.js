document.getElementById('start-button').addEventListener('click', function() {
  // Generate a random number between 1 and 10
  const secretNumber = Math.floor(Math.random() * 10) + 1;

  let attempts = 0;
  let guess = 0;

  for (let i = 0; i <= 5; i++) {
    guess = parseInt(prompt("Guess a number between 1 and 10:"), 10);
    attempts++;


    if (guess === secretNumber) {
      document.getElementById('message').textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempt${attempts > 1 ? 's' : ''}.`;
      return; // Exit the loop if the guess is correct
    } else if (guess > secretNumber) {
      alert("Too high! Try again.");
    } else if (guess < secretNumber) {
      alert("Too low! Try again.");
    }
  }


  document.getElementById('message').textContent = `Sorry, you've used all your attempts. The secret number was ${secretNumber}.`;
});