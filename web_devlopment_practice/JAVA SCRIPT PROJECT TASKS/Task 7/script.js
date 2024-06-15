const prompt = require('prompt-sync')();

const myAge = Number(prompt("Enter ypur age(in years) : ")) ;

let earlyYears = 2;
earlyYears *=10.5;

let laterYears = earlyYears -2 ;
laterYears *= 4;

let myAgeInDogYears = earlyYears+laterYears;

const myName = prompt("Enter your name : ").toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

