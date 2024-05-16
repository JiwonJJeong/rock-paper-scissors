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
// function will then output a result message by appending new paragraph onto "results" div
// function increments appropriate score variable based on who won and updates displayed scores
function playRound(humanChoice, computerChoice){
    const roundResult = document.createElement("p");
    const resultTable = document.querySelector(".results");
    const humanScoreText = document.querySelector(".humanScore");
    const computerScoreText = document.querySelector(".computerScore");
    if (humanChoice === "rock"){
        if (computerChoice === "rock"){
            roundResult.textContent="You tie! We both chose rock.";
        } else if (computerChoice === "paper"){
            computerScore++;
            roundResult.textContent="You lose! Paper beats rock.";
        } else{
            humanScore++;
            roundResult.textContent="You win! Rock beats scissors.";
        }
    } else if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            humanScore++;
            roundResult.textContent="You win! Paper beats rock.";
        } else if (computerChoice === "paper"){
            roundResult.textContent="You tie! We both chose paper.";
        } else{
            computerScore++;
            roundResult.textContent="You lose! Scissors beats paper.";
        }
    } else if (humanChoice === "scissors"){
        if (computerChoice === "rock"){
            computerScore++;
            roundResult.textContent="You lose! Rock beats scissors.";
        } else if (computerChoice === "paper"){
            humanScore++;
            roundResult.textContent="You win! Scissors beats paper.";
        } else{
            roundResult.textContent="You tie! We both chose scissors.";
        }
    } else {
        roundResult.textContent= "You didn't choose 'rock', 'paper', or 'scissors'!";
    }
    resultTable.appendChild(roundResult);
    humanScoreText.textContent = "Your score: " + humanScore;
    computerScoreText.textContent = "My score: " + computerScore;
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

// display score

// add event listeners to 3 buttons for rock, paper, or scissors choice
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

// event will play a round using button for human choice and generate computer choice
rockButton.addEventListener("click", function() {playRound("rock", getComputerChoice())});
paperButton.addEventListener("click", function() {playRound("paper", getComputerChoice())});
scissorsButton.addEventListener("click", function() {playRound("scissors", getComputerChoice())});