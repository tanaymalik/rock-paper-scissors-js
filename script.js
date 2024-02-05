const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function gameRound(playerSelection, computerChoice) {
    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper',
    };

    if (!options.includes(playerSelection)) {
        console.log("Invalid input");
    } else if (playerSelection === computerChoice) {
        console.log(`It's a tie, ${playerSelection} and ${computerChoice} are the same.`);
    } else if (winConditions[playerSelection] === computerChoice) {
        console.log(`You won, ${playerSelection} beats ${computerChoice}.`);
    } else {
        console.log(`You lose, ${computerChoice} beats ${playerSelection}.`);
    }
}



function game() {
    for (let i = 1; i<=6; i++) {
        let playerSelection = prompt("Please enter rock, paper, or scissors").toLowerCase();
        let computerChoice = getComputerChoice();
        gameRound(playerSelection, computerChoice);
    }
}

game();

