//console.log("Hello World");
let playerChoice = 0;
let playerScore = 0;

playerChoice = prompt("Please 0 for Rock or 1 for paper or 2 for Scissors");
console.log("You chose = " + playerChoice);

let randomChoice = 0;

function getComputerChoice(maxNo) {
    randomChoice = Math.floor(Math.random() * maxNo);
    switch(randomChoice) {
        case 0:
            console.log("Computer chose Rock! " + randomChoice);
        break;
        case 1:
            console.log("Computer chose Paper! " + randomChoice);
        break;
        case 2:
            console.log("Computer chose Scissors! " + randomChoice);
        break;
    }
    return randomChoice;
    console.log("End of getComputerChoice function!");
}

getComputerChoice(3);
console.log("randomChoice = " + randomChoice);