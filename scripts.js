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

// PRINT function once to test getHumanChoice
console.log(getHumanChoice());

// function playRound will simulate a single round
// function will take two string inputs for human then computer, then compare them to determine winner.
// function will then output a message declaring how the round went
// function increments appropriate score variable based on who won
// INIT function playRound with parameters for human and computer choice
    // IF human choice is rock THEN
        // IF computer choice is rock THEN
            // RETURN tie statement
        // ELSE IF computer choice is paper THEN
            // RETURN you lose statement
            // INCREMENT computer score
        // ELSE
            // RETURN you win statement
            // INCREMENT human score
        // END IF
    // ELSE IF human choice is paper THEN
        // IF computer choice is rock THEN
            // RETURN you win statement
            // INCREMENT human score
        // ELSE IF computer choice is paper THEN
            // RETURN tie statement
        // ELSE
            // RETURN you lose statement
            // INCREMENT computer score
        // END IF
    // ELSE IF human choice is scissors THEN
        // IF computer choice is rock THEN
            // RETURN you lose statement
            // INCREMENT computer score
        // ELSE IF computer choice is paper THEN
            // RETURN you win statement
            // INCREMENT human score
        // ELSE
            // RETURN tie statement
        // END IF
    // ELSE
        // RETURN you didn't choose rock, paper, or scissors statement
    // END IF
// END function



// CALL getHumanChoice function and INIT to new constant
// CALL getComputerChoice function and INIT to new constant
// CALL playRound using the two constants just initialized