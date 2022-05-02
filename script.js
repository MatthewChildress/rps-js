const playBtn = document.querySelectorAll("data-button");
let playerChoice = document.getElementById('playerChoice');
let computerChoice = document.getElementById('computerChoice');
let tiePlaceholder = document.getElementById("tiePlaceholder");
let pScore = document.getElementById('playerScore');
let cScore = document.getElementById('computerScore');
let tScore = document.getElementById('tieScore');
let gameInfo = document.getElementById('gameInfo');
let gameMessage = document.getElementById('gameMessage');

playBtn.forEach(button => {
    button.addEventListener("click", () => {
        handleChoice(button.textContent)
    
        
        
    })
  })

let computerPlay = () => {
    const choices = ['rock','paper','scissors']
    // randomized choice for PC when function is triggered
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)];
        switch (cpuChoice) {
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
    return cpuChoice;
}

// if/else to determine round winner
let playRound = (playerSelection,computerSelection) => {
    if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') ||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        pScore.textContent = playerScore;
        gameInfo.textContent = "You won this round!";
        gameMessage.textContent = `${playerSelection} beats ${computerSelection}`;
        return win;        
    }
    else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') ||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock')) {
        computerScore++;
        cScore.textContent = computerScore;
        gameInfo.textContent = "You lost this round!";
        gameMessage.textContent = `${playerSelection} loses to ${computerSelection}`;
        return lose;        
    }
    else {
        tieScore++;
        tScore.textContent = tieScore;
        gameInfo.textContent = "It's a tie.";
        gameMessage.textContent = `${playerSelection} = ${computerSelection}.`;
        return tie;
    }
}

// defaults for scores & strings for .textContent
let playerScore = parseInt(0);
let computerScore = parseInt(0);
let tieScore = parseInt(0);
let win = "You win!"
let lose = "You lose!"
let tie = "It's a tie."

// function to determine if board needs to be reset
// otherwise sets up computer choice for playRound()
function handleChoice(playerSelection) {
    if (gameWin()) {
        reset()
        return
    }
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
    clickPlay(playerSelection)

}
let clickPlay = (playerSelection,) => {
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
}

// ties back into handleChoice() to see if game is over
let gameWin = () => {
    return (playerScore === 5 || computerScore === 5)
}

// ties back into handleChoice() to reset game gameWin() is triggered
// resets all .textContent that displays everything from a function
let reset = () => {
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

