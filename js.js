function getComputerChoice() {
    let n = Math.random() * 10;
    if (n >= 1 && n < 4) {
        return 'ROCK';
    } else if (n >= 4 && n < 7) {
        return 'PAPER';
    } return 'SCISSORS';
}

function getHumanChoice() {
    return prompt('Choice:', 'Rock, Paper or Scissors...')
}

