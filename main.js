// Get user guess, rock paper or scissors
// Get computer guess, rock paper or scissors
// Compare the guess
// Pick a winner
// Display the winner



// Variables
let userScore = 0;
let computerScore = 0;
let tiedScore = 0;
let gamePlayed = 0;
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
    displayCounts()
  })

  paper_div.addEventListener('click', function() {
    playerDisplay.innerHTML = "You clicked paper";
    playerChoice = "paper";
    getComputerChoice()
    console.log(playerChoice+computerChoice);
    startGame()
    displayCounts()
  })

  scissor_div.addEventListener('click', function() {
    playerDisplay.innerHTML = "You clicked scissor"
    playerChoice = "scissor";
    getComputerChoice()
    console.log(playerChoice+computerChoice);
    startGame()
    displayCounts()
  })

  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    randomNumber = Math.floor(Math.random() *3);
    computerChoice = choices[randomNumber];
    computerDisplay.innerHTML = "Computer choice: " + computerChoice;
  }

  function startGame() {
    if (computerChoice === playerChoice) {
      winnerDisplay.innerHTML ="You Tied";
      tiedScore += 1
      gamePlayed += 1
    } else if ( playerChoice+computerChoice === "scissorpaper" || 
                playerChoice+computerChoice ===  "rockscissor" || 
                playerChoice+computerChoice === "paperrock" ) {
      winnerDisplay.innerHTML ="You are a winner!!!";
      userScore += 1
      gamePlayed += 1
    } 
    else {
      winnerDisplay.innerHTML = "You lost"
      computerScore += 1
      gamePlayed += 1
    }
  }

  function displayCounts() {
    document.getElementById("gamePlayed").innerHTML = gamePlayed;
    document.getElementById("userScore").innerHTML=  userScore;
    document.getElementById("tiedScore").innerHTML=  tiedScore;
    document.getElementById("average").innerHTML=calcAverage();
  }

  function calcAverage() {
    return (Math.floor((userScore/gamePlayed) * 100)+'%');
  }









