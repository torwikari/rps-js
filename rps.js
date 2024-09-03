document.addEventListener("DOMContentLoaded", function () {
  const btnRock = document.querySelector("#btnRock");
  const btnPaper = document.querySelector("#btnPaper");
  const btnScissors = document.querySelector("#btnScissors");

  // Launch the specific game after "click" event.
  btnRock.addEventListener("click", () => playGame("rock"));
  btnPaper.addEventListener("click", () => playGame("paper"));
  btnScissors.addEventListener("click", () => playGame("scissors"));
});

const container = document.querySelector("#container");

// Get random: rock, paper or scissors from the computer
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

// Function to create and append a message to the container
function displayMessage(text) {
  // Remove the previous message
  const previousMessage = document.querySelector(".content");
  if (previousMessage) {
    previousMessage.remove();
  }

  // Create and append the new message
  container.appendChild(
    Object.assign(document.createElement("div"), {
      className: "content",
      textContent: text,
    })
  );
}

// Game logic for a single round
function playRound(humanChoice, computerChoice) {
  let message;

  if (humanChoice === computerChoice) {
    message = `It's a tie! Both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    message = `You won! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    message = `Computer won! ${computerChoice} beats ${humanChoice}`;
  }

  message += `\nScore: You ${humanScore} - ${computerScore} Computer`;
  displayMessage(message);
}

// Keep track of the score
let humanScore = 0;
let computerScore = 0;

// PlayGame function
function playGame(humanSelection) {
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}
