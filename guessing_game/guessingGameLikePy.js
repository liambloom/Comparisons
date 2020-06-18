import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Lets play guess the number!");
console.log("The game will get harder with each round, so don't leave if the first round's too easy!");

function ask(prompt) {
  return new Promise(resolve => {
    rl.question(prompt + "\n", resolve);
  });
}

void async function () {
  for (let i = 1; i < 10; i++) {
    const max = 10 ** i;
    const secretNumber = Math.floor(Math.random() * max + 1);

    console.log(`I'm thinking of a number between 1 and ${max}`);

    let guess;

    while (guess !== secretNumber) {
      if (guess < secretNumber) console.log("Too large");
      else if (guess) console.log("Too small");

      guess = parseInt(await ask("Please input your guess"));
      if (isNaN(guess)) {
        console.log(`${guess} is not a number.`);
        guess = undefined;
      }
    }

    console.log("You win!");
    if (await shouldEndGame()) break;
  }

  console.log("Thanks for playing!");
}();

async function shouldEndGame() {
  switch ((await ask("Do you want to play again? (y/n)")).trim()) {
    case "y":
      return false;
    case "n":
      return true;
    default:
      console.log('Invalid input. Please enter "y" or "n"');
      return shouldEndGame();
  }
}