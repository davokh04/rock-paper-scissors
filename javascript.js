let humanScore = 0;
let computerScore = 0;

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
        console.log(`You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`);
        computerScore++;
    } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        console.log(`You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`);
        computerScore++;
    } else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
        console.log(`You lose! ${computerChoice.toUpperCase()} beat ${humanChoice.toUpperCase()}`);
        computerScore++;
    } else if (humanChoice == computerChoice) {
        console.log('It is a tie.');
    } else {
        console.log(`You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`);
        humanScore++;
    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(humanScore);
    console.log(computerScore);
}

const gameContainer = document.querySelector("div");
gameContainer.classList.add("gameContainer");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const resultsContainer = document.createElement("div");
resultsContainer.classList.add("resultsContainer");

const results = document.createElement("div");
results.classList.add("results");

resultsContainer.appendChild(results);
gameContainer.appendChild(resultsContainer);

resultsContainer.style.border = "2px solid black";
resultsContainer.style.maxWidth = "50vw";

rock.addEventListener("click", () => {
    let humanChoice = "ROCK";
    playRound(humanChoice, getComputerChoice());
    results.textContent = `player: ${humanScore} / machine: ${computerScore}`;
});

paper.addEventListener("click", () => {
    let humanChoice = "PAPER";
    playRound(humanChoice, getComputerChoice());
    results.textContent = `player: ${humanScore} / machine: ${computerScore}`;
});

results.textContent = `player: ${humanScore} / machine: ${computerScore}`

scissors.addEventListener("click", () => {
    let humanChoice = "SCISSORS";
    playRound(humanChoice, getComputerChoice());
    results.textContent = `player: ${humanScore} / machine: ${computerScore}`;
});
