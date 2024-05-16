console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

// function getComputerChoice will randomly return "rock", "paper", or "scissors" string
function getComputerChoice(){
    let randomInteger = 0;
    randomInteger = Math.floor(Math.random()*3)
    if (randomInteger === 0) {
        return "rock";
    } else if (randomInteger === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// PRINT function twice to test getComputerChoice
console.log(getComputerChoice());
console.log(getComputerChoice());


// function playRound will simulate a single round
// function will take two string inputs for human then computer, then compare them to determine winner.
// function will then output a message declaring how the round went
// function increments appropriate score variable based on who won
function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock"){
        if (computerChoice === "rock"){
            console.log("You tie! We both chose rock.");
            return;
        } else if (computerChoice === "paper"){
            computerScore++;
            console.log("You lose! Paper beats rock.");
            return;
        } else{
            humanScore++;
            console.log("You win! Rock beats scissors.");
            return;
        }
    } else if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            humanScore++;
            console.log("You win! Paper beats rock.");
            return;
        } else if (computerChoice === "paper"){
            console.log("You tie! We both chose paper.");
            return;
        } else{
            computerScore++;
            console.log("You lose! Scissors beats paper.");
            return;
        }
    } else if (humanChoice === "scissors"){
        if (computerChoice === "rock"){
            computerScore++;
            console.log("You lose! Rock beats scissors.");
            return;
        } else if (computerChoice === "paper"){
            humanScore++;
            console.log("You win! Scissors beats paper.");
            return;
        } else{
            console.log("You tie! We both chose scissors.");
            return;
        }
    } else {
        return "You didn't choose 'rock', 'paper', or 'scissors'!"
    }
}



// function playGame will play 5 rounds, then declare a winner based on rounds won
function playGame(){
    humanScore = 0;
    computerScore = 0;

    if (humanScore>computerScore){
        console.log("You win! You won " + humanScore + " times out of 5.");
        return;
    } else if (humanScore<computerScore){
        console.log("You lose! You won " + humanScore + " times out of 5.");
        return;
    } else {
        console.log("We tied! You won " + humanScore + " times out of 5.");
        return;
    }
}


// add event listeners to 3 buttons for rock, paper, or scissors choice

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

// event will play a round using r,p,s of button for human choice and generate computer choice
rockButton.addEventListener("click", playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", playRound("scissors", getComputerChoice()));