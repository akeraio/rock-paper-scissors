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

function upperCaseFirst(string){
    return string[0].toUpperCase() + string.slice(1);
}


function compare(playerInput, computerInput) {
    const playerIndex = items.indexOf(playerInput);
    const computerIndex = items.indexOf(computerInput)
    const matrix = [["D", "W", "L"],["L", "D", "W"],["W", "L", "D"]];
    const result = matrix[playerIndex][computerIndex];
    if (result === "W") {
        playerScore++
        return `You won! ${upperCaseFirst(playerInput)} beats ${computerInput}`;
    } else if (result === "L") {
        computerScore++
        return `You lost! ${upperCaseFirst(computerInput)} beats ${playerInput}`;
    } else {
        return `It's a tie!`
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

    while (!items.includes(playerInput.toLowerCase())) {
        alert("Please pick a valid input");
        playerInput = prompt("rock, paper, or scissors?");
       
    }
    return playerInput;
}

while (playerScore < 5 && computerScore < 5) {
    let playerInput = validateInput();
    let computerInput = computerPlay(items);
    game(playerInput, computerInput);
}

if (playerScore > computerScore) {
    alert("Congratulations, you won!");
} else {
    alert("You lost! Better luck next time.");
}