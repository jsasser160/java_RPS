// Get user guess, rock paper or scissors
// Get computer guess, rock paper or scissors
// Compare the guess
// Pick a winner
// Display the winner



// Variables
// const player;
// const name = document.getElementById('name');
// const startButton = documnet.getElementById('start-button');
const userScore = 0;
const computerScore = 0;
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const header = document.getElementById("header")
const playerChoice = 0;
const computerChoice = 0;



function game(userChoice) {
  const computerChoice = getComputerChoice();
  
  console.log("user choice => " + userChoice);
  console.log("computer choice => " + computerChoice);
}

  rock_div.addEventListener('click', function() {
    header.innerHTML = "You clicked rock";
     playerChoice === r;
    getComputerChoice()

  })

  paper_div.addEventListener('click', function() {
    header.innerHTML = "You clicked paper";
    // playerChoice === p;
    getComputerChoice()
  })

  scissor_div.addEventListener('click', function() {
    header.innerHTML = "You clicked scissor"
    // playerChoice === s;
    getComputerChoice()
  })

  function getcomputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() *3);
    const computerChoice = choices[randomNumber]
    
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
