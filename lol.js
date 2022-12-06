function getComputerChoice(){
    var choice = Math.floor(Math.random()*3) + 1

    if (choice === 1) return "rock";
    if (choice === 2) return "paper";
    if (choice === 3) return "scissors";
}

function playRound (playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection)
        return "Tie"
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
            )
        return "Player"
    else 
        return "Computer"
}

function game(){
    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Please select your choice: (Rock, Paper, Scissors)", "")
        let computerSelection = getComputerChoice()
        
        let result = playRound(playerSelection, computerSelection)
        if (result === "Tie"){
            console.log("Its a tie!, you both picked " + playerSelection)
        }
        else if (result == "Player") {
            console.log("You win!, " + playerSelection + " beats " + computerSelection)
            playerScore++;
        }
        else if (result == "Computer"){
            console.log("You lose! " + computerSelection + " beats " + playerSelection)
            computerScore++;
        }
    }

    console.log("Final Scores")
    console.log("Player: " + playerScore)
    console.log("Computer: " + computerScore)
    if (playerScore === computerScore)
        console.log("Tie")
    else if (playerScore > computerScore)
        console.log("Player Wins")
    else 
        console.log("Computer Wins")
}

// const rockButton = document.getElementById("rock");
// const paperButton = document.getElementById("paper");
// const scissorsButton = document.getElementById("scissors");

// rockButton.addEventListener('click', (e) => {
//     playRound("rock", )


// });
