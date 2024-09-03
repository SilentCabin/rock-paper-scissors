//function to get computer choice
function getComputerChoice(){
  //array with choices
  let choices = ["Rock", "Paper", "Scissors"]
  //select random item from array
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerChoice);
  return computerChoice;
}

//function to get human choice
function getHumanChoice() {
  // human input
  let humanChoice = prompt("Enter Rock, Paper or Scissors:");
  console.log(humanChoice);
  return humanChoice;
}

//function to play rounds, and game
function playGame() {
  // score variables
  let humanScore = 0;
  let computerScore = 0;
  //function to play round
  function playRound(humanChoice, computerChoice) {
    //convert to lowercase to compare strings
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    //check to see if tie
    if (humanChoice === computerChoice) {
      console.log (`DRAW! ${humanChoice} ties to ${computerChoice}`)
      //check win options
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper") 
    ) {
      console.log (`YOU WIN!!! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`YOU LOSE!!! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
    console.log(`Score - You : ${humanScore}, Computer : ${computerScore}`);
  }
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
playRound(humanChoice, computerChoice);
}

// Execute the game

playGame();