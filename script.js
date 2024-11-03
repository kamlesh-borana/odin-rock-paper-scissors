/*
// Function to get random number
function getRandomNumber() {
    // Get a random number between 0 and 1
    const randomNumber = Math.random();
    console.log(randomNumber);

    // Divide 1 by the number of random numbers needed, the result value divides the number 1 into the required random numbers equal parts 
    // Check if the random number is lower than the first part, if true return one of the desired random number
    if(randomNumber < 1/3) {
        return 1;
    }

    // Check if the random number is lower than the second part, if true return some other random number
    else if(randomNumber < 2/3) {
        return 2;
    }

    // Repeat it until only the last part is needed to be checked in which case return the last remaining desired random number
    else {
        return 3;
    }
}

console.log(getRandomNumber());
*/


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

// console.log(getRandomNumber(3, 1));


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

// console.log(getComputerChoice());


// Function to get user's choice
function getHumanChoice() {
    // Ask the user for his choice and store his choice in a variable, also set empty string as default value when no input provided
    const userChoice = prompt("Enter your choice below") || "";

    // Convert the user choice to lowercase and return it
    return userChoice.toLowerCase();
}

// Print the user's choice to console
// console.log(getHumanChoice());

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


// Function to play the round
function playRound(humanChoice, computerChoice) {
    
    // Get the result for the round
    const result = getResult(humanChoice, computerChoice);
    console.log(result);

}

playRound(humanChoice, computerChoice);