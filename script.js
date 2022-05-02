class Game {
    constructor(playerSelection, computerSelection) {
        this.playerSelection = playerSelection
        this.computerSelection = computerSelection  
    }

    gameWin() {
        if ((playerScore === 5 || computerScore === 5)) {
            playerScore = parseInt(0);
            computerScore = parseInt(0);
            tiePlaceholder = ''
            tieScore = parseInt(0);
            tScore.textContent = ''
            cScore.textContent = ''
            pScore.textContent = ''
            playerChoice.textContent = ''
            computerChoice.textContent = ''
            gameInfo.textContent = 'Choose Your Move'
            gameMessage.textContent = 'First To Five Wins!'
        }
    }

    computerPlay() {
        const choices = ['rock','paper','scissors']
        const computerSelection = choices[Math.floor(Math.random() * choices.length)];
            switch (computerSelection) {
            case 'rock':
                computerChoice.textContent = "👊"
                tiePlaceholder.textContent = "Tie(s)"
                break
            case 'paper':
                computerChoice.textContent = "✋"
                tiePlaceholder.textContent = "Tie(s)"
                break
            case 'scissors':
                computerChoice.textContent = "✌"
                tiePlaceholder.textContent = "Tie(s)"
                break
        }
        return computerSelection;
    }

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
            tieScore++;
            tScore.textContent = tieScore;
            gameInfo.textContent = "It's a tie.";
            gameMessage.textContent = `${playerSelection} = ${computerSelection}.`;
        }
    }
}

const playBtn = document.querySelectorAll("[data-button]");
let playerChoice = document.getElementById('playerChoice');
let computerChoice = document.getElementById('computerChoice');
let tiePlaceholder = document.getElementById("tiePlaceholder");
let pScore = document.getElementById('playerScore');
let cScore = document.getElementById('computerScore');
let tScore = document.getElementById('tieScore');
let gameInfo = document.getElementById('gameInfo');
let gameMessage = document.getElementById('gameMessage');
let playerScore = parseInt(0);
let computerScore = parseInt(0);
let tieScore = parseInt(0);

const game = new Game()

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