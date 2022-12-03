function getComputerChoice(){
    var choice = Math.floor(Math.random()*3) + 1

    if (choice === 1) return "rock";
    if (choice === 2) return "paper";
    if (choice === 3) return "scissors";
}

function playRound (playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection === computerSelection)
        return "Its a tie!"
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
            )
        return "You win!, " + playerSelection + " beats " + computerSelection
    else 
        return "You lose! " + computerSelection + " beats " + playerSelection
}