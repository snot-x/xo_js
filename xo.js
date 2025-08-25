
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.33) return "rock";
    else if (choice > 0.66) return "scissors";
    else return "paper";
  }

  function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:");
    return choice.toLowerCase();
  }

  function playRound(hmnChoice, computerChoice) {
    if (hmnChoice === computerChoice) return "tie";
    else if (
      (hmnChoice === "rock" && computerChoice === "scissors") ||
      (hmnChoice === "paper" && computerChoice === "rock") ||
      (hmnChoice === "scissors" && computerChoice === "paper")
    ) {
      return "human";
    } else {
      return "cpu";
    }
  }

  for (let i = 1; i <= 5; i++) {
    console.log("Round " + i);
    const hmnSelection = getHumanChoice();
    const cmpSelection = getComputerChoice();
    let result = playRound(hmnSelection, cmpSelection);

    if (result === "human") humanScore++;
    else if (result === "cpu") computerScore++;

    console.log("Current Score → Human:", humanScore, "Computer:", computerScore);
    console.log("-----------------------");
  }

  // Final winner
  console.log("Final Score → Human:", humanScore, "Computer:", computerScore);
  if (humanScore > computerScore) console.log("🏆 You win the game!");
  else if (computerScore > humanScore) console.log("💻 Computer wins the game!");
  else console.log("🤝 It's a tie game!");
}

playGame();
