function getComputerChoice(){
    var choice = Math.floor(Math.random()*3) + 1

    if (choice === 1) return "Rock";
    if (choice === 2) return "Paper";
    if (choice === 3) return "Scissors";
}
