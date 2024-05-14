console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

// function getComputerChoice will randomly return "rock", "paper", or "scissors" string
// INIT function getComputerChoice
    // INIT number randomInteger to 0
    // SET randomInteger to 0, 1, or 2 randomly using Math.random
        // IF randomInteger is 0 THEN
            // RETURN "rock"
        // ELSE IF randomInteger is 0 THEN
            // RETURN "paper"
        // ELSE
        // RETURN "scissors"
    // END IF
// END function
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

// function getHumanChoice will prompt a string input of "rock", "paper", or "scissors"
// function will return the string input
// INIT function getHumanChoice
    // INIT string humanInput
    // OBTAIN user input with prompt and SET to humanInput
    // SET humanInput to an all lowercase version of itself
    // RETURN humanInput
// END function
function getHumanChoice(){
    let humanInput = "";
    humanInput = prompt("Let's play rock, paper, scissors! What's your move?");
    humanInput.toLowerCase();
    return humanInput;
}


// function playRound will simulate a single round
// function will take two string inputs for human then computer, then compare them to determine winner.
// function will then output a message declaring how the round went
// function increments appropriate score variable based on who won
// INIT function playRound with parameters for human and computer choice
    // IF human choice is rock THEN
        // IF computer choice is rock THEN
            // RETURN tie statement
        // ELSE IF computer choice is paper THEN
            // INCREMENT computer score
            // RETURN you lose statement
        // ELSE
            // INCREMENT human score    
            // RETURN you win statement
        // END IF
    // ELSE IF human choice is paper THEN
        // IF computer choice is rock THEN
            // INCREMENT human score
            // RETURN you win statement
        // ELSE IF computer choice is paper THEN
            // RETURN tie statement
        // ELSE
            // INCREMENT computer score 
            // RETURN you lose statement
        // END IF
    // ELSE IF human choice is scissors THEN
        // IF computer choice is rock THEN
            // INCREMENT computer score
            // RETURN you lose statement
        // ELSE IF computer choice is paper THEN
            // INCREMENT human score    
            // RETURN you win statement
        // ELSE
            // RETURN tie statement
        // END IF
    // ELSE
        // RETURN you didn't choose rock, paper, or scissors statement
    // END IF
// END function
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



// CALL getHumanChoice function and INIT to new constant
// CALL getComputerChoice function and INIT to new constant
// CALL playRound using the two constants just initialized


// function playGame will play 5 rounds, then declare a winner based on rounds won
// INIT function playGame
// INIT score variables (move from global) and constants
    // FOR 5 times
        // CALL random computer choice and inputted human choice to constants
        // CALL play one round
    // IF human score is larger than computer score THEN
        // PRINT winner statement with number of wins
    // ELSE IF human score is smaller than computer score THEN
        // PRINT loser statement with number of wins
    // ELSE
        // PRINT tie statement with number of wins
    // END IF
// END function
function playGame(){
    humanScore = 0;
    computerScore = 0;
    for (let i =0 ; i<5 ; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
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

playGame();