class Game {
    constructor(playerSelection, computerSelection) {
        this.playerSelection = playerSelection
        this.computerSelection = computerSelection  
    }
    // checks if score for either player is 5. If so, resets all .textContent
    gameWin() {
        if ((playerScore === 5 || computerScore === 5)) {
            playerScore = parseInt(0);
            computerScore = parseInt(0);
            cScore.textContent = ''
            pScore.textContent = ''
            playerChoice.textContent = ''
            computerChoice.textContent = ''
            gameInfo.textContent = 'Choose Your Move'
            gameMessage.textContent = 'First To Five Wins!'
        }
    }
    // makes random choice for computer from array into a case switch. returns info and updates relevant .textContent
    computerPlay() {
        const choices = ['rock','paper','scissors']
        const computerSelection = choices[Math.floor(Math.random() * choices.length)];
            switch (computerSelection) {
            case 'rock':
                computerChoice.textContent = "👊"
                break
            case 'paper':
                computerChoice.textContent = "✋"
                break
            case 'scissors':
                computerChoice.textContent = "✌"
                break
        }
        return computerSelection;
    }
    // takes button event and computerPlay() and runs an if/else statement to determine round winner.
    // updates relevant .textContent
    playRound(playerSelection,computerSelection) {
        if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') ||
            (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') ||
            (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper')) {
            playerScore++;
            pScore.textContent = playerScore;
            gameInfo.textContent = "You won this round!";
            gameMessage.textContent = `${playerSelection} beats ${computerSelection}`;        
        }
        else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') ||
            (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') ||
            (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock')) {
            computerScore++;
            cScore.textContent = computerScore;
            gameInfo.textContent = "You lost this round!";
            gameMessage.textContent = `${playerSelection} loses to ${computerSelection}`;     
        }
        else {
            gameInfo.textContent = "It's a tie.";
            gameMessage.textContent = `${playerSelection} = ${computerSelection}.`;
        }
    }
}
// variables
const playBtn = document.querySelectorAll("[data-button]");
let playerChoice = document.getElementById('playerChoice');
let computerChoice = document.getElementById('computerChoice');
let pScore = document.getElementById('playerScore');
let cScore = document.getElementById('computerScore');
let gameInfo = document.getElementById('gameInfo');
let gameMessage = document.getElementById('gameMessage');
// sets default scores as integers and to zero.
let playerScore = parseInt(0);
let computerScore = parseInt(0);
// creates a Game() to run all functions through
const game = new Game()
// upon button click, runs a case/switch to return player info to playround() and .textContent
playBtn.forEach(button => {
    button.addEventListener("click", () => {
        playerSelection = button.id
        switch (playerSelection) {
            case 'rock':
                playerChoice.textContent = "👊"
                break
            case 'paper':
                playerChoice.textContent = "✋"
                break
            case 'scissors':
                playerChoice.textContent = "✌"
                break
        }
        game.gameWin()
        const computerSelection = game.computerPlay()
        game.playRound(playerSelection,computerSelection)
    })
  })