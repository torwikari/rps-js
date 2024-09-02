console.log("Hello World");

// get random: rock, paper or scissors from the computer
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  //   Generate random number from 0-2, round-down via math.floor
  const random_number = Math.floor(Math.random() * 3);
  //   Get a computer choice based on random number.
  const choice = choices[random_number];
  return choice;
}

function getHumanChoice() {
  const choice = prompt("Enter rock, paper or scissors: ");
  return choice;
}

let humanScore = 0;
let computerScore = 0;
