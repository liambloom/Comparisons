package guessing_game;

import java.util.Random;
import java.util.Scanner;

public class GuessingGameLikePy {
  public static final Scanner console = new Scanner(System.in);
  public static final Random r = new Random();

  public static void main(String[] args) {
    System.out.println("Lets play guess the number!");
    System.out.println("The game will get harder with each round, so don't leave if the first round's too easy!");

    for (int i = 1; i < 10; i++) {
      final int max = (int) Math.pow(10, i);
      final int secretNumber = r.nextInt(max) + 1;

      System.out.printf("I'm thinking of a number between 1 and %d%n", max);

      Integer guess = null;

      while (guess == null || guess != secretNumber) {
        if (guess != null) {
          if (guess < secretNumber) System.out.println("Too small");
          else System.out.println("Too large");
        }

        if (!console.hasNextInt()) {
          System.out.printf("%s is not a number.%n", console.nextLine().trim());
          guess = null;
          continue;
        }

        guess = console.nextInt();
        console.nextLine();
      }

      System.out.println("You win!");
      if (shouldEndGame()) break;
    }

    System.out.println("Thanks for playing");
  }
  
  public static boolean shouldEndGame() {
    System.out.println("Do you want to play again? (y/n)");
    switch (console.nextLine().trim()) {
      case "y":
        return false;
      case "n":
        return true;
      default:
        System.out.println("Invalid input. Please enter \"y\" or \"n\"");
        return shouldEndGame();
    }
  }
}