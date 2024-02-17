document.querySelectorAll(".choices button").forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

const playerChoiceP = document.getElementById("player-choise");

const resultGame = document.getElementById("result");
const playerScoreP = document.getElementById("player-score");
const computerScoreP = document.getElementById("computer-score");


const options = ["scissors", "paper", "rock"];

let lose = "You Lose! Paper beats Rock";
let win = "You Win! Paper wraps Rock.";
let tie = "It's a Tie! Both selected rock.";

const score = {
  player: 0,
  computer: 0,
};

let gameLose = 3;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  const computerChoice = options[randomIndex];
  return computerChoice;
}

const computerChoice = getComputerChoice();
console.log("Computer's Choice:", computerChoice);

function game(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    resultGame.innerHTML = tie;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    resultGame.innerHTML = win;
    scorePoint(win, score);
  } else {
    resultGame.innerHTML = lose;
    scorePoint(lose, score);
  }

  updateScore();
}

function scorePoint(resultGame, score) {
  if (resultGame === win) {
    score.player += 1;
  } else if (resultGame === lose) {
    score.computer += 1;
  }
}

function gameOver() {
    if (score.player >= 3) {
        Toastify({
            text: "Player wins!",
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "green",
            className: "toastify toastify-center", 
        }).showToast();

        setTimeout(function () {
            location.reload();
        }, 3000);
    } else if (score.computer >= 3) {
        Toastify({
            text: "Computer wins!",
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "red",
            
            className: "toastify toastify-center", 
            
        }).showToast();

        setTimeout(function () {
            location.reload();
        }, 3000);
    }
}


  

function updateScore() {
  playerScoreP.innerText = score.player;
  computerScoreP.innerText = score.computer;
  gameOver();
}

function handleButtonClick(event) {
    const playerChoice = event.currentTarget.dataset.choice;
    console.log("Player Choice:", playerChoice);
  
    
    const playerImgContainer = document.getElementById("imgChoice");
  
    playerImgContainer.src = `./assets/img/${playerChoice}.jpeg`;
    playerImgContainer.alt = playerChoice;
  
    const playerChoiceParagraph = document.getElementById("player-choise");

    playerChoiceParagraph.innerText = `Player Choice: ${playerChoice}`;
  

    const computerImgContainer = document.getElementById("img-choise");
  
   
    const computerChoice = getComputerChoice();
  
    
    computerImgContainer.src = `./assets/img/${computerChoice}.jpeg`;
    computerImgContainer.alt = computerChoice;
  
    
    console.log("Computer Choice:", computerChoice);
 
    const computerChoiceParagraph = document.getElementById("computer-choise");
  
    
    computerChoiceParagraph.innerText = `Computer Choice: ${computerChoice}`;
  
    
    game(playerChoice, computerChoice);
  }
  
