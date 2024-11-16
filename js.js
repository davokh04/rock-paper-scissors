let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let n = Math.random() * 10;
    if (n >= 1 && n < 4) {
        return 'ROCK';
    } else if (n >= 4 && n < 7) {
        return 'PAPER';
    } 
    return 'SCISSORS';
}

function getHumanChoice() {
    return prompt('Choice:', 'Rock, Paper or Scissors...')
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    if (humanChoice == computerChoice) {
        return console.log(`It is a tie! You both chose ${humanChoice}`);
    } else if (humanChoice == 'ROCK' && computerChoice == 'PAPER') {
        computerScore++;
        return console.log(`You lost! Computer: ${computerChoice} / You: ${humanChoice}`);
    } else if (humanChoice == 'SCISSORS' && computerChoice == 'ROCK') {
        computerScore++;
        return console.log(`You lost! Computer: ${computerChoice} / You: ${humanChoice}`);
    } else if (humanChoice == 'PAPER' && computerChoice == 'SCISSORS') {
        computerScore++;
        return console.log(`You lost! Computer: ${computerChoice} / You: ${humanChoice}`)
    } 
    humanScore++;
    return console.log(`You won! You: ${humanChoice} / Computer: ${computerChoice}`)
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`You: ${humanScore} / Computer: ${computerScore}`);
}

playGame()