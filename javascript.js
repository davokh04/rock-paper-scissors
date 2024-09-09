function getComputerChoice() {
    let choice = Math.random();
    if (choice >= 0 && choice < 0.333) {
        return "ROCK";
    } else if (choice >= 0.333 && choice < 0.666) {
        return "PAPER";
    }   return "SCISSORS";
}

function getHumanChoice() {
    let choice = prompt("Put your choice! Rock, paper or scissors.");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    if (humanChoice == "ROCK" && computerChoice == "PAPER") {
        console.log(`You lose! ${computerChoice.capitalize()} beats ${humanChoice.capitalize()}`);
    } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        console.log(`You lose! ${computerChoice.capitalize()} beats ${humanChoice.capitalize()}`);
    } else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
        console.log(`You lose! ${computerChoice.capitalize()} beats ${humanChoice.capitalize()}`);
    } else if (humanChoice == computerChoice) {
        console.log('It is a tie.')
    } else {
        console.log(`You win! ${computerChoice.capitalize()} beats ${humanChoice.capitalize()}`)
    }
}

let humanScore = 0;
let computerScore = 0;

