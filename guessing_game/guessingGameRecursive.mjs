import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Lets play guess the number");
console.log("The game will get harder with each round, so don't leave if the first round's too easy!");

let i = 1;

function game() {
  if (i == 9) {
    endGame();
    return;
  }
  const max = 10 ** i++;
  const secretNumber = Math.floor(Math.random() * max + 1);

  console.log(`I'm thinking of a number between 1 and ${max}`);

  round(secretNumber);
}

function round(secretNumber) {
  console.log("Please input your guess");

  rl.question("Please input your guess.\n", guess => {
    guess = parseInt(guess);
    if (isNaN(guess)) {
      console.log(`${guess} is not a number.`);
      round(secretNumber);
      return;
    }

    if (guess < secretNumber) console.log("Too small");
    else if (guess > secretNumber) console.log("Too large");
    else {
      console.log("You win!");
      endRound(secretNumber);
      return;
    }
    round(secretNumber);
  });
}

function endRound(secretNumber) {
  rl.question("Do you want to play again? (y/n)\n", newGame => {
    switch (newGame.trim()) {
      case "y":
        game();
        break;
      case "n":
        endGame();
        break;
      default:
        console.log('Invalid input. Please enter "y" or "n"');
        round(secretNumber);
    }
  });
}

function endGame() {
  console.log("Thanks for playing");
  // process.exit();
}