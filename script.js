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
    // Ask the user for his choice and store his choice in a variable
    const userChoice = prompt("Enter your choice below");
    return userChoice;
}

// Print the user's choice to console
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log("User Choice: ", humanChoice);
console.log("Computer Choice: ", computerChoice);

