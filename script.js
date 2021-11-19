//make prompt for player to pick input (rock, paper, scissors) and assign it to playerInput

let playerInput = prompt("rock, paper, or scissors?");

function computerPlay(items) {   
 return items[Math.floor(Math.random()*items.length)];         
}

const items = ["rock","paper","scissors"];
let computerInput = computerPlay(items);


let compare = function (playerInput, computerInput) {
    if (playerInput === computerInput) {
        return "The result is a tie";
    }

    if (playerInput === "rock") {
        if (computerInput === "paper") {
            return "You lost! Paper beats rock"
        } else if (computerInput === "scissors") { 
             return "You won! Rock beats paper"
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

  






//make function for a single round playRound(playerInput, computerInput). The arguments should be case insensitive.


//playRound() should output a string declaring the outcome, like "You Lose! Paper beats Rock"




