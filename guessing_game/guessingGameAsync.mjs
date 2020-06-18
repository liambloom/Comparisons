import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Lets play guess the number!");
console.log("The game will get harder with each round, so don't leave if the first round's too easy!");

function ask (prompt) {
  return new Promise(resolve => {
    rl.question(prompt + "\n", resolve);
  });
}

void async function () {
  game: for (let i = 1; i < 10; i++) { // This needs to be a recursive function
    const max = 10 ** i;
    const secretNumber = Math.floor(Math.random() * max + 1);

    console.log(`I'm thinking of a number between 1 and ${max}`);

    round: while (true) {
      let guess = parseInt(await ask("Please input your guess."));
      if (isNaN(guess)) {
        console.log(`${guess} is not a number.`);
        continue;
      }

      if (guess < secretNumber) console.log("Too small");
      else if (guess > secretNumber) console.log("Too large");
      else {
        console.log("You win!");
        while (true) {
          switch ((await ask("Do you want to play again? (y/n)")).trim()) {
            case "y":
              break round;
            case "n":
              break game;
            default:
              console.log('Invalid input. Please enter "y" or "n"');
          }
        }
      }
    }
  }

  console.log("Thanks for playing!");
}();