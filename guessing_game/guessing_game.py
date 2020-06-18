import random

def shouldendgame():
  new_game = input("Do you want to play again? (y/n)\n")
  if new_game == "y":
    return False
  elif new_game == "n":
    return True
  else:
    print('Invalid input. Please enter "y" or "n"')
    return shouldendgame()

print("Lets play guess the number!")
print("The game will get harder with each round, so don't leave if the first round's too easy!")

for i in range(1, 10):
  max = 10 ** i
  secret_number = random.randint(1, max)

  print("I'm thinking of a number between 1 and " + str(max))

  guess = -1

  while guess != secret_number:
    if (guess >= secret_number):
      print("Too large")
    elif guess >= 1:
      print("Too small")
    
    guess = input("Please input your guess.\n")

    if guess.isdigit():
      guess = int(guess)
    else:
      guess = -1
      print(str(guess) + " is not a number.")
  
  print("You win!")
  if shouldendgame():
    break

print("Thanks for playing")