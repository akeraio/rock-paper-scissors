

function computerPlay(items) {   
 return items[Math.floor(Math.random()*items.length)];         
}

const items = ["rock","paper","scissors"];
let computerInput = computerPlay(items);
let playerInput = prompt("rock, paper, or scissors?");
let playRound = compare(playerInput, computerInput);


if ((playerInput !== "rock") && (playerInput !== "paper") && (playerInput !== "scissors")) {
    alert("Please pick a valid input")
} else { 
    alert((game()));
}


function compare(playerInput, computerInput) {
    if (playerInput === computerInput) {
        return "The result is a tie";
    }

    if (playerInput === "rock") {
        if (computerInput === "paper") {
            return "You lost! Paper beats rock"
        } else if (computerInput === "scissors") { 
             return "You won! Rock beats scissors"
        }
    }
    

    if (playerInput === "paper") {
        if (computerInput === "rock") {
            return "You won! Paper beats rock"
        } else if (computerInput === "scissors") {
             return "You lost! Scissors beats paper"
        }
    }
    

    if (playerInput === "scissors") {
        if (computerInput === "rock") {
            return "You lost! Rock beats scissors"
        } else if (computerInput === "paper") {
              return "You won! Scissors beat paper"
        }
    }
    
}


function game() {
    
    return compare(playerInput, computerInput)

}







