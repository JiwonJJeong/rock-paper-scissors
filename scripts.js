console.log("Hello World");

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