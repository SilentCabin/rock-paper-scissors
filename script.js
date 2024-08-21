function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"]
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
    return computerChoice;
}

function getHumanChoice() {
  // human input
    console.log(humanChoice);
    
}

let humanScore = 0;
let computerScore = 0;
getComputerChoice();
getHumanChoice();

//let humanChoice = prompt("Enter Rock, Paper or Scissors:");