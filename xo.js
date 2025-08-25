let humanScore = 0;
let computerScore = 0;

function getComputerChoice(params) {
  let computerChoice;
  let choice = Math.random();

  if (choice < 0.33) {
    computerChoice = "rock";
  } else if (choice > 0.66) {
    computerChoice = "scissors";
  } else {
    computerChoice = "paper";
  }
  console.log(computerChoice);
  return computerChoice;
}

function getHumanChoice() {
  let hmnChoice;
  hmnChoice = prompt("Enter your choice: (Must be rock, paper or scissors)");
  return hmnChoice.toLowerCase(); // so that the input is uniformly lowercase
}


function playRound(hmnChoice, computerChoice) {
  hmnChoice.toLowerCase();
  if (hmnChoice === computerChoice) {
    console.log("Tie");
  } else if (hmnChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("paper beats rock hmn loss");
    } else {
      console.log("human wins")
    }
  } else if (hmnChoice === "scissors") {  
    if (computerChoice === "rock") {
      console.log("You lose. Rock beats scissors.")
    } else {
      console.log("You win, scissors cut paper");
    }
  } else if (hmnChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log("You lose, scissors cut paper");
    } else {
      console.log("You win! paper covers rock")
    }
  }
}

const hmnSelection = getHumanChoice();
const cmpSelection = getComputerChoice();
