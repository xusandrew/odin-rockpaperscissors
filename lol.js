function getComputerChoice() {
  var choice = Math.floor(Math.random() * 3) + 1;

  if (choice === 1) return "rock";
  if (choice === 2) return "paper";
  if (choice === 3) return "scissors";
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    console.log("Its a tie!, you both picked " + playerSelection);
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log("You win!, " + playerSelection + " beats " + computerSelection);
    playerScore++;
    return "Player";
  } else {
    console.log("You lose! " + computerSelection + " beats " + playerSelection);
    computerScore++;
    return "Computer";
  }
}

let playerScore = 0;
let computerScore = 0;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", (e) => {
    playRound("rock", getComputerChoice());
  });

paperButton.addEventListener("click", (e) => {
  playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", (e) => {
  playRound("scissors", getComputerChoice());
});
