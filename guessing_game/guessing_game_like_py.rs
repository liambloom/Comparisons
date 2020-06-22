use std::io;
use std::cmp::Ordering;
use rand::Rng;

fn main () {
    println!("Lets play guess the number!");
    println!("The game will get harder with each round, so don't leave if the first round's too easy!");

    for i in 1..10 {
        let max = 10u32.pow(i);
        let secret_number = rand::thread_rng().gen_range(1, max + 1);

        println!("I'm thinking of a number between 1 and {}", max);

        let mut guess: Option<u32> = None;

        while match guess {
            Some(guess) => {
                match guess.cmp(&secret_number) {
                    Ordering::Less => {
                        println!("Too small");
                        true
                    },
                    Ordering::Greater => {
                        println!("Too large");
                        true
                    },
                    Ordering::Equal => false,
                }
            },
            None => true,
        }
        {
            let mut guess_str = String::new();

            io::stdin()
                .read_line(&mut guess_str)
                .expect("Failed to read line");

            guess_str = String::from(guess_str.trim());

            guess = Some(match guess_str.parse() {
                Ok(num) => num,
                Err(_) => {
                    println!("{} is not a number.", guess_str);
                    continue;
                },
            });
        }

        println!("You win");
        if should_end_game() {
            break;
        }
    }
}

fn should_end_game() -> bool {
    let mut new_game = String::new();

    io::stdin()
        .read_line(&mut new_game)
        .expect("Failed to read line");

    match new_game.as_str() { // Converts new_game from String to &str
        "y" => false,
        "n" => true,
        _ => {
            println!("Invalid input. Please enter \"y\" or \"n\"");
            should_end_game()
        }
    }
}