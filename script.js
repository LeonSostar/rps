let pWins = 0;
let cWins = 0;
let playerChoice = "";
let rockButt = document.querySelector('.rockButt');
let paperButt = document.querySelector('.paperButt');
let scissorsButt = document.querySelector('.scissorsButt');
let divText = document.querySelector('.history');
divText.textContent = '';

rockButt.addEventListener('click', () => playRound('rock', getComputerChoice()));
paperButt.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissorsButt.addEventListener('click', () => playRound('scissors', getComputerChoice()));

function getComputerChoice() {
    intChoice = Math.floor((Math.random() * 3) + 1);
    if (intChoice == 1) {
        return "rock";
    }
    else if (intChoice == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (cWins == 5) {
        divText.textContent = "GAME OVER! Computer wins! Try again!";
        cWins = 0;
        pWins = 0;
        divText.textContent = '';
    }
    if (pWins == 5) {
        divText.textContent = "YOU WIN! Try again!";
        cWins = 0;
        pWins = 0;
        divText.textContent = '';
    }
    if (playerSelection == computerSelection) {
        divText.textContent += "It's a draw!";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        divText.textContent += "Player wins the round!";
        pWins++;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        divText.textContent += "Player wins the round!";
        pWins++;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        divText.textContent += "Player wins the round!";
        pWins++;
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        divText.textContent += "Computer wins the round!";
        cWins++;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        divText.textContent += "Computer wins the round!";
        cWins++;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        divText.textContent += "Computer wins the round!";
        cWins++;
    }
}

function playGame() {
    while (numberOfRounds < 5) {
        playerChoice = "";
        while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
            playerChoice = prompt("Enter either rock, paper, or scissors: ");
            playerChoice = playerChoice.toLowerCase();
        }
        playRound(playerChoice, getComputerChoice());
    }
    if (playerWins > 0) {
        console.log("Player wins the game!");
    }
    else {
        console.log("Computer wins the game!");
    }
}

