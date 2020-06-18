package guessing_game;

import java.util.Scanner;
import java.util.Random;

public class GuessingGame {
  public static final Scanner console = new Scanner(System.in);
  public static final Random r = new Random();
  public static void main(String[] args) {
    System.out.println("Lets play guess the number!");
    System.out.println("The game will get harder with each round, so don't leave if the first round's too easy!");

    game: for (int i = 1; i < 10; i++) {
      final int max = (int) Math.pow(10, i);
      final int secretNumber = r.nextInt(max) + 1;

      System.out.printf("I'm thinking of a number between 1 and %d%n", max);
      round: while (true) {
        System.out.println("Please input your guess.");

        if (!console.hasNextInt()) {
          System.out.printf("%d is not a number.%n", console.nextLine().trim());
          continue;
        }

        int guess = console.nextInt();
        console.nextLine();
        
        if (guess < secretNumber) System.out.println("Too small");
        else if (guess > secretNumber) System.out.println("Too large");
        else {
          System.out.println("You win!");

          while (true) {
            System.out.println("Do you want to play again? (y/n)");
            switch (console.nextLine().trim()) {
              case "y":
                break round;
              case "n":
                break game;
              default:
                System.out.println("Invalid input. Please enter \"y\" or \"n\"");
            }
          }
        }
      }
    }

    System.out.println("Thanks for playing!");
  }
}