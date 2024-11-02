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
    // Get a random number between 0 and 1, where the 1 is not included
    // Multiply it with the number of random numbers required to get a random number between 0 and required random numbers, where the number of random numbers is not included
    // Round off the random number to its nearest lowest integer value to get a random integer value between 0 to number of random numbers, where number of random numbers is not included
    // To start the random number from a different number than 0 since we rounded it down, we will add that number to the above random integer value