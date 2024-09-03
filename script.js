function getComputerChoice(){
  //array with choices
    let choices = ["Rock", "Paper", "Scissors"]
  //select random item from array
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
    return computerChoice;
}

function getHumanChoice() {
  // human input
    let humanChoice = prompt("Enter Rock, Paper or Scissors:");
    console.log(humanChoice);
    return humanChoice;
    
}

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
}

let humanScore = 0;
let computerScore = 0;
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

playRound(humanChoice, computerChoice);