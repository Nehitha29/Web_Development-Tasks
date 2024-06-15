const prompt = require('prompt-sync')();

let registered = "no";

const age = Number(prompt("Enter the age: "))

if(age > 18) registered = prompt("Are you an early adult (yes or no) ? ")

    let raceNumber = Math.floor(Math.random() * 1000);

if(age > 18 && registered === "yes"){

    raceNumber += 1000;

    console.log(`You will race at 9:30 am and your racenumber is ${raceNumber}`)

}

else if(age > 18 ){
    console.log(`You will race at 11:00 am and your racenumber is ${raceNumber}`)
}
else if(age < 18)

    console.log(`You will race at 12:30 am and your racenumber is ${raceNumber}`)

else{
    console.log("Please see the registration desk.")
}