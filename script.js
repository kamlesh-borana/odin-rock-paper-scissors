// Function to get random number
function getRandomNumber(noOfRandomNumbers, startsFrom) {
    // Get a random number between 0 and 1, where the 1 is not included
    let randomNumber = Math.random();

    // Multiply it with the passed number of random numbers required parameter to get a random number between 0 and required random numbers, where the number of random numbers is not included
    randomNumber = randomNumber * noOfRandomNumbers;

    // Round off the random number to its nearest lowest integer value to get a random integer value between 0 to number of random numbers, where number of random numbers is not included
    randomNumber = Math.floor(randomNumber);

    // To start the random number from a different number than 0 since we rounded it down, we will add the passed to start from required parameter to the above random integer value
    randomNumber = randomNumber + startsFrom;

    return randomNumber;
}


// Function to get computer choice
function getComputerChoice() {
    // Get a random integer number between 1 to 3
    const randomNumber = getRandomNumber(3, 1);

    // If random number is 1 return "rock"
    if(randomNumber === 1) {
        return "rock"
    }

    // If random number is 2 return "paper"
    else if(randomNumber === 2) {
        return "paper"
    }

    // If random number is 3 return "scissors"
    else {
        return "scissors"
    }
}


// Function to get user's choice
function getHumanChoice() {
    // Ask the user for his choice and store his choice in a variable, also set empty string as default value when no input provided
    const userChoice = prompt("Enter your choice below") || "";

    // Convert the user choice to lowercase and return it
    return userChoice.toLowerCase();
}


let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log("User Choice: ", humanChoice);
console.log("Computer Choice: ", computerChoice);


// Function to get the result of the round
function getResult(humanChoice, computerChoice) {

    // Check if user and computer choices are the same, if same then return "tie" as result
    if(humanChoice === computerChoice) {
        return "tie";
    }

    // Winner deciding switch case logic for the round based on both players choices
    switch(humanChoice) {
        case "rock":
            // If user chose "rock" and computer chose "scissors" then return "win"
            if(computerChoice === "scissors") {
                return "win";
            }
            // If user chose "rock" and computer chose "paper" then return "lose"
            else if(computerChoice === "paper") {
                return "lose";
            }
            else {
                return "Invalid choice";
            }

        case "paper":
            // If user chose "paper" and computer chose "rock" then return "win"
            if(computerChoice === "rock") {
                return "win";
            }
            // If user chose "paper" and computer chose "scissors" then return "lose"
            else if(computerChoice === "scissors") {
                return "lose";
            }
            // Else return "invalid choice"
            else {
                return "Invalid choice";
            }

        case "scissors":
            // If user chose "scissors" and computer chose "paper" then return "win"
            if(computerChoice === "paper") {
                return "win";
            }
            // If user chose "scissors" and computer chose "rock" then return "lose"
            else if(computerChoice === "rock") {
                return "lose";
            }
            // Else return "invalid choice"
            else {
                return "Invalid choice";
            }

        default:
            // Else return "invalid choice"
            return "Invalid choice";
    }
}


// Function to capitalise text
function capitalise(text) {
    return text.at(0).toUpperCase() + text.slice(1);
}


// Function to show result statement for the round
function showResult(result, humanChoice, computerChoice) {
    // If result is "tie" print tie statement
    if(result === "tie") {
        console.log(`It's a tie! You both chose ${capitalise(humanChoice)}`);
    }
    // If result is "win" print win statement
    else if(result === "win") {
        console.log(`You won! ${capitalise(humanChoice)} beats ${capitalise(computerChoice)}`);
    }
    // If result is "lose" print lose statement
    else if(result === "lose") {
        console.log(`You lose! ${capitalise(computerChoice)} beats ${capitalise(humanChoice)}`);
    }
    // Else print invalid choice
    else {
        console.log("Invalid choice");
    }
}


// Function to update score after the round
function updateScore(result) {
    // If result is "win" increment user's score by 1
    if(result === "win") {
        humanScore = humanScore + 1;
    }
    // If result is "lose" increment computer's score by 1
    else if(result === "lose") {
        computerScore = computerScore + 1;
    }
    console.log(humanScore, "||" ,computerScore);
}


// Function to play the round
function playRound(humanChoice, computerChoice) {
    
    // Get the result for the round
    const result = getResult(humanChoice, computerChoice);
    console.log(result);

    // Print the result statement for the round
    showResult(result, humanChoice, computerChoice);

    // Update score based on result
    updateScore(result);
}


// If the user and computer choices are present then play the round
if(humanChoice && computerChoice) {
    playRound(humanChoice, computerChoice);
}