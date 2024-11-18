//variable kelvin is a constant
const kelvin = 295;
//celcius is kelvin less 273
const celcius = kelvin - 273;
//use formula to calculate fahrenheit.
let fahrenheit = celcius * (9 / 5) + 32;
//Math.floor connverts the result to a whole number
fahrenheit = Math.floor(fahrenheit);
//output
console.log(`The tempetature is ${fahrenheit} degrees Fahrenheit`);
