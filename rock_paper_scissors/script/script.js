function getComputerChoise() {
    let n = Math.floor((Math.random() * 3) + 1);
    if (n == 3)
        return ("rock");
    else if (n == 2)
        return ("paper");
    return ("scissor");
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        return ("Draw!");
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissor")
                return ("Win!");
            break;
        case "paper":
            if (computerSelection === "rock")
                return ("Win!");
            break;
        case "scissor":
            if (computerSelection === "paper")
                return ("Win!");
        break;
    }
    return ("Lose")
}

let computerSelection = getComputerChoise();
let playerSelection = prompt("Rock! Paper! Scissors!!!!!").toLowerCase();
console.log("Computer: " + computerSelection);
console.log("Player: " + playerSelection);
console.log(playRound(playerSelection, computerSelection));