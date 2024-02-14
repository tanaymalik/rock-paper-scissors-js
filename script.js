const options = ['rock', 'paper', 'scissors'];
let playerCount = 0;
let computerCount = 0;

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
    }
    else if (playerCount >= 5) {
        result.textContent = "you won the entire game by gaining 5 points";
    }
    else if (computerCount >= 5) {
        result.textContent = "you lost the game, as the computer has achieved 5 points";
    }
     else if (playerSelection === computerChoice) {
        result.textContent = `It's a tie, ${playerSelection} and ${computerChoice} are the same.`;

    } else if (winConditions[playerSelection] === computerChoice) {
        result.textContent = `You won, ${playerSelection} beats ${computerChoice}.`;
        playerCount += 1;
    } else {
        result.textContent = `You lose, ${computerChoice} beats ${playerSelection}.`;
        computerCount += 1;
    }
}



// function game() {
//     for (let i = 1; i<=6; i++) {
//         let playerSelection = prompt("Please enter rock, paper, or scissors").toLowerCase();
//         let computerChoice = getComputerChoice();
//         gameRound(playerSelection, computerChoice);
//     }
// }

// game();

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const result = document.querySelector('.result');
const current_score = document.querySelector('.current_score');


rock.addEventListener('click', handleButtonClick);
paper.addEventListener('click', handleButtonClick);
scissors.addEventListener('click',  handleButtonClick);



function handleButtonClick(event) {
    const playerChoice = event.target.className;
    const computerChoice = getComputerChoice();

    gameRound(playerChoice, computerChoice);
    current_score.textContent = `your score: ${playerCount}, computer Score: ${computerCount}`
}
    
handleButtonClick();