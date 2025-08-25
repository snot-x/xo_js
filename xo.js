let humanScore = 0;
let computerScore = 0;

function playGame()
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
    if (hmnChoice === computerChoice) {
      console.log("Tie");
    } else if (hmnChoice === "rock") {
      if (computerChoice === "paper") {
        console.log("paper beats rock hmn loss");
        return "cpu";
      } else {
        console.log("human wins");
        return "human";
      }
    } else if (hmnChoice === "scissors") {  
      if (computerChoice === "rock") {
        console.log("You lose. Rock beats scissors.")
        return "cpu"
      } else {
        console.log("You win, scissors cut paper");
        return "human"
      }
    } else if (hmnChoice === "paper") {
      if (computerChoice === "scissors") {
        console.log("You lose, scissors cut paper");
        return "cpu"
      } else {
        console.log("You win! paper covers rock")
        return "human"
      }
    }
  }
  for (let i = 1; i <= 5; i++) {
    console.log("Round " + i);
  }  
  const hmnSelection = getHumanChoice();
  const cmpSelection = getComputerChoice();
  let result = playRound(hmnChoice, computerChoice);

  if (result === "human") {
    humanScore++;
  } else if (result === "cpu") {
    computerScore++;
  }
