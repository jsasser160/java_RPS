// Get user guess, rock paper or scissors
// Get computer guess, rock paper or scissors
// Compare the guess
// Pick a winner
// Display the winner



// Variables
// const player;
// const name = document.getElementById('name');
// const startButton = documnet.getElementById('start-button');
let userScore = 0;
let computerScore = 0;
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const winnerDisplay = document.getElementById("winnerDisplay")

let playerChoice = 0;
let computerChoice = 0;


  rock_div.addEventListener('click', function() {
    playerDisplay.innerHTML = "You clicked rock";
     playerChoice = "rock";
    getComputerChoice()
    console.log(playerChoice+computerChoice);
    startGame()

  })

  paper_div.addEventListener('click', function() {
    playerDisplay.innerHTML = "You clicked paper";
    playerChoice = "paper";
    getComputerChoice()
    console.log(playerChoice+computerChoice);
    startGame()
  })

  scissor_div.addEventListener('click', function() {
    playerDisplay.innerHTML = "You clicked scissor"
    playerChoice = "scissor";
    getComputerChoice()
    console.log(playerChoice+computerChoice);
    startGame()
  })

  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    randomNumber = Math.floor(Math.random() *3);
    computerChoice = choices[randomNumber];
    computerDisplay.innerHTML = "Computer choice: " + computerChoice;
  }

  function startGame() {
    
    if (computerChoice === playerChoice) {
      winnerDisplay.innerHTML ="You Tied"
      
    } else if ( playerChoice + computerChoice === "scissorspaper" || "rockscissors" || "paperrock" ) {
      winnerDisplay.innerHTML ="You are a winner!!!"
    } 
    else {
      winnerDisplay.innerHTML = "You lost"
      
    }
    
  }




// Fuctions

// function calcAverage() {
  // return (Math.floor((wins/games)))
// }

function playgame(playerChoice, computerChoice) {

  
}



// document.getElementById("taco").style.width = '300px'
// // event listeners
// document.getElementById('btn').addEventListener("click", changePic)
// var taco = document.getElementById("taco")
// function changePic() {
//   if (taco.src === "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1314&q=80")
//     taco.src = 'https://images.unsplash.com/photo-1508154048109-de555266b70a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
//   else {
//     taco.src = "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1314&q=80"
//   }
// }
