let humanScore = 0;
let computerScore = 0;

function getComputerChoice(params) {
  let computerChoice;
  let choice = Math.random();

  if (choice < 0.33) {
    computerChoice = "Rock";
  } else if (choice > 0.66) {
    computerChoice = "Scissors";
  } else {
    computerChoice = "Paper";
  }
  console.log(computerChoice);
  return computerChoice;
}

function getHumanChoice() {
  let hmnChoice;
  hmnChoice = prompt("Enter your choice: (Must be rock, paper or scissors)");
  return hmnChoice.toLowerCase(); // so that the input is uniformly lowercase
}

getComputerChoice();
getHumanChoice();

function playRound(hmnChoice, getComputerChoice) {
  
}
