const prompt = require('prompt-sync')();

const kelvin  = Number(prompt());
 
let celcius = kelvin - 273 ;

let  fahrenheit = (celcius * (9/5) + 32);

fahrenheit = Math.floor(fahrenheit);
 console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);



