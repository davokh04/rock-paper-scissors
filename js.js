function getComputerChoice() {
    const n = Math.random() * 10;
    if (n >= 0 && n < 3) {
        return 'ROCK';
    } else if (n >= 3 && n < 6) {
        return 'PAPER';
    } return 'SCISSORS';
}