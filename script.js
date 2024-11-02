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