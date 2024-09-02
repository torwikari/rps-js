console.log("Hello World");

// get random: rock, paper or scissors from the computer
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random_number = Math.floor(Math.random() * 3);
  return choices[random_number];
}

// Get human choice, case-insensitive and check if it's correct.
function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];
  let choice = prompt("Enter rock, paper or scissors: ").toLowerCase();
  while (!choices.includes(choice)) {
    choice = prompt(
      "Invalid choice. Please enter rock, paper or scissors: "
    ).toLowerCase();
  }
  return choice;
}

// Game logic for a single round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`Computer won! ${computerChoice} beats ${humanChoice}`);
  }
}

// Keep track of the score
let humanScore = 0;
let computerScore = 0;

// PlayGame function that loops until one player wins 5 rounds
function playGame() {
  while (humanScore < 5 && computerScore < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
  }
  results();
}

// Final results
function results() {
  if (humanScore > computerScore) {
    console.log(
      `Congratulations! You won the game with a score of ${humanScore} to ${computerScore}.`
    );
  } else {
    console.log(
      `Sorry! The computer won the game with a score of ${computerScore} to ${humanScore}.`
    );
  }
}

// Start the game
playGame();
