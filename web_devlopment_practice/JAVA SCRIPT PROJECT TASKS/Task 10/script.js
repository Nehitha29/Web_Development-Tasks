const prompt = require('prompt-sync')();

const getUserChoice = (userInput) => {
    const validChoices = ['rock', 'paper', 'scissors'];

    if (validChoices.includes(userInput.toLowerCase())) {
        return userInput.toLowerCase();
    } else {
        return 'Invalid choice';
    }

}

const getComputerChoice = () => {
    const validChoices = ['rock', 'paper', 'scissors'];
    let k = Math.floor(Math.random() * 3);
    return validChoices[k];
}

const determineWinner = (input, choice) => {
    if (input === choice) return 'tied';
    else if (input === 'rock') {
        if (choice === 'paper') return 'computer won'
        else return 'you won'
    }
    else if (input === 'paper') {
        if (choice === 'scissors') return 'computer won'
        else return 'you won'
    }
    else if (input === 'scissors') {
        if (choice === 'rock')  return 'computer won'
        else return 'you won'
    }
}




function game(){

userInput = prompt("Enter choice ");
let input = getUserChoice(userInput);
if (input  === 'Invalid choice') {
    console.log("Invalid choice");
    return;
}
let choice = getComputerChoice();

console.log(`your choice is ${input}`);
console.log(`computer choice  is ${choice}`);

let winner = determineWinner(input, choice);

console.log(winner);
}

game()
