package magic8;

import java.util.Scanner;
import java.util.Random;

public class Magic8 {
  public static final Scanner console = new Scanner(System.in);
  public static final Random r = new Random();
  public static final String[] answers = {
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  };

  public static void main(String[] args) {
    System.out.println("I'm a magic 8 ball!");
    while (true) {
      System.out.println("Ask a question:");
      while (console.nextLine().trim().isEmpty());
      System.out.println(answers[r.nextInt(answers.length)]);
    }
  }
}