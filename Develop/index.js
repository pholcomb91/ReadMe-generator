// TODO: Include packages needed for this application
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
        "What is your motivation?"
    , 
        "Why did you build this?"
    ,
        "What problem does it solve?"
    , 
        "What did you learn?"
    , 
        "What makes this project stand out?"
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('log.txt', process.argv[2], (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
