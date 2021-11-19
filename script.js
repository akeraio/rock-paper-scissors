

let playerInput = prompt("rock, paper, or scissors?") 
    
const items = ["rock","paper","scissors"];

function computerPlay(items) {   
 return items[Math.floor(Math.random()*items.length)];         
}


let computerInput = computerPlay(items);


function compare(playerInput, computerInput) {
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

let playRound = compare(playerInput, computerInput);


// declare a function that assigns +1 score point to winner



// loop compare(playerInput, computerInput) to make it run 5 times. Best of 3 score wins





