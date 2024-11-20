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


// Function to capitalise text
function capitalise(text) {
    return text.at(0).toUpperCase() + text.slice(1);
}


// Function to start playing the game
function playGame() {

    // Declare and initialise choice, score and round tracking variables
    let humanChoice = null;
    let computerChoice = null;
    let humanScore = 0;
    let computerScore = 0;
    let round = 1;

    const resultDiv = document.querySelector(".result");
    const userScorePara = document.querySelector(".scores .user");
    const computerScorePara = document.querySelector(".scores .computer");

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


    // Function to set players choices
    function setPlayersChoices() {
        
        computerChoice = getComputerChoice();
        // humanChoice = getHumanChoice();
        
        // console.log("User Choice: ", humanChoice);
        const userChoicePara = document.createElement("p");
        userChoicePara.textContent = `User Choice: ${humanChoice}`;
        resultDiv.appendChild(userChoicePara);
        // console.log("Computer Choice: ", computerChoice);
        const computerChoicePara = document.createElement("p");
        computerChoicePara.textContent = `Computer Choice: ${computerChoice}`;
        resultDiv.appendChild(computerChoicePara);
    }


    // Function to check if the player's choice is valid or not
    function isPlayerChoiceValid(playerChoice) {
        if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
            return true;
        }
        return false;
    }


    // Function to get the result of the round
    function getResult(humanChoice, computerChoice) {

        // Check if any of the player's choice is invalid or not if yes then return "invalid choice"
        if(!isPlayerChoiceValid(humanChoice) || !isPlayerChoiceValid(computerChoice)) {
            return "Invalid choice";
        }

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

            case "paper":
                // If user chose "paper" and computer chose "rock" then return "win"
                if(computerChoice === "rock") {
                    return "win";
                }
                // If user chose "paper" and computer chose "scissors" then return "lose"
                else if(computerChoice === "scissors") {
                    return "lose";
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

            default:
                // Else return "invalid choice"
                return "Invalid choice";
        }
    }


    // Function to show result statement for the round
    function showResult(result, humanChoice, computerChoice) {
        const resultPara = document.createElement("p");
        // If result is "tie" print tie statement
        if(result === "tie") {
            // console.log(`It's a tie! You both chose ${capitalise(humanChoice)}`);
            resultPara.textContent = `It's a tie! You both chose ${capitalise(humanChoice)}`;
        }
        // If result is "win" print win statement
        else if(result === "win") {
            // console.log(`You won! ${capitalise(humanChoice)} beats ${capitalise(computerChoice)}`);
            resultPara.textContent = `You won! ${capitalise(humanChoice)} beats ${capitalise(computerChoice)}`;
        }
        // If result is "lose" print lose statement
        else if(result === "lose") {
            // console.log(`You lose! ${capitalise(computerChoice)} beats ${capitalise(humanChoice)}`);
            resultPara.textContent = `You lose! ${capitalise(computerChoice)} beats ${capitalise(humanChoice)}`;
        }
        // Else print invalid choice and round skipped message
        else {
            // console.log("Invalid choice, round skipped");
            resultPara.textContent = "Invalid choice, round skipped";
        }
        resultDiv.appendChild(resultPara);
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
        
        // console.log(humanScore, "||" ,computerScore);
        userScorePara.textContent = `User: ${humanScore}`;
        computerScorePara.textContent = `Computer: ${computerScore}`;
    }


    // Function to play the round
    function playRound(humanChoice, computerChoice) {

        // Get the result for the round
        const result = getResult(humanChoice, computerChoice);
        // console.log(result);

        // Print the result statement for the round
        showResult(result, humanChoice, computerChoice);

        // Update score based on result
        updateScore(result);
    }


    // Function to start a round and set player choices 
    function startRound() {
        
        // Print the start of the current round no
        // console.log(`Round ${round} Begins`);
        const roundBeginPara = document.createElement("p");
        roundBeginPara.textContent = `Round ${round} Begins`;
        resultDiv.appendChild(roundBeginPara);

        // Set both players choices
        setPlayersChoices();
    }


    // Function to end a round
    function endRound() {

        // Print the end of current round no
        // console.log(`Round ${round} Ends`);
        const roundEndPara = document.createElement("p");
        roundEndPara.textContent = `Round ${round} Ends`;
        resultDiv.appendChild(roundEndPara);

        // Increment the current round by 1
        round++;

        if(humanScore >= 5 || computerScore >= 5) {
            const gameResultPara = document.createElement("p");
            if(humanScore >= 5) {
                gameResultPara.textContent = `Congratulations! You won the game with a lead of ${humanScore - computerScore} points.`;
            } else {
                gameResultPara.textContent = `You fell short by ${computerScore - humanScore} points. Try again!`;
            }
            resultDiv.appendChild(gameResultPara);
        }
    }


    // Function to run the game round
    function gameRound() {

        // Start the round and set player choices
        startRound();

        // Play the round
        playRound(humanChoice, computerChoice);

        // End round and increment it by 1
        endRound();
    }


    // Function to show game result
    function showGameResult(humanScore, computerScore) {
        
        // Display game result score after all rounds
        console.log(`Final Scores:\nYou: ${humanScore}  Computer: ${computerScore}`);
        
        // If user wins the game
        if(humanScore > computerScore) {
            console.log(`Congratulations! You won the game with a lead of ${humanScore - computerScore} points.`);
        }
        // If computer wins the game
        else if(computerScore > humanScore) {
            console.log(`You fell short by ${computerScore - humanScore} points. Try again!`)
        }
        // If the game result is a tie
        else {
            console.log("No one takes the crown – the game is a draw.");
        }
    }


    // Round 1
    // gameRound();

    // Round 2
    // gameRound();

    // Round 3
    // gameRound();

    // Round 4
    // gameRound();

    // Round 5
    // gameRound();

    // Show game result message
    // showGameResult(humanScore, computerScore);

    const optionButtons = document.querySelectorAll("button");
    optionButtons.forEach((option) => {
        option.addEventListener("click", (event) => {
            resultDiv.textContent = "";

            humanChoice = event.target.textContent.toLowerCase();
            gameRound();
        });
    });
}


playGame();