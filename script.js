const items = ["rock","paper","scissors"];

let playerScore = 0;
let computerScore = 0;

/*
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            console.log(items[i], items[j], compare(items[i], items[j]));
        }
    }
*/

function computerPlay(items) {   
    return items[Math.floor(Math.random()*items.length)];         
}

function compare(playerInput, computerInput) {
    if (playerInput.toLowerCase() === computerInput) {
        return "The result is a tie";
    }

    if (playerInput.toLowerCase() === "rock") {
        if (computerInput === "paper") {
            computerScore++
            return "You lost! Paper beats rock"
        } else if (computerInput === "scissors") {
             playerScore++
             return "You won! Rock beats scissors"
        }
    }

    if (playerInput.toLowerCase() === "paper") {
        if (computerInput === "rock") {
            playerScore++
            return "You won! Paper beats rock"
        } else if (computerInput === "scissors") {
             computerScore++
             return "You lost! Scissors beats paper"
        }
    }

    if (playerInput.toLowerCase() === "scissors") {
        if (computerInput === "rock") {
            computerScore++
            return "You lost! Rock beats scissors"
        } else if (computerInput === "paper") {
              playerScore++
              return "You won! Scissors beat paper"
        }
    }
}

function game(playerInput, computerInput) {
    let result = compare(playerInput, computerInput);
    console.log(playerScore, computerScore);
    alert(result);
    return result;
}

function validateInput() {
    let playerInput = prompt("rock, paper, or scissors?");

    while (
        (playerInput.toLowerCase() !== "rock") && 
        (playerInput.toLowerCase() !== "paper") && 
        (playerInput.toLowerCase() !== "scissors")
    ) {
        alert("Please pick a valid input");
        playerInput = prompt("rock, paper, or scissors?");
        
    }
    return playerInput;
}

while (playerScore < 5 && computerScore <5) {
    let playerInput = validateInput();
    let computerInput = computerPlay(items);
    game(playerInput, computerInput);
}
