// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateReadme= ({motivation, why, problem, learn, standOut}) => ``
;
// TODO: Create an array of questions for user input
const questions = [
        "What is your motivation?"
    , 
        "For what purpose did you build this?"
    ,
        "What problem does it solve?"
    , 
        "What did you learn?"
    , 
        "What makes this project stand out?"
    ];
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project name?',
            name: 'name',
        },
        {
            type: 'input',
            message: questions[0],
            name: 'motivation',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'why'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'problem'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'learn'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'standOut'
        }
    ])
    .then((responses) => {
        const readmePageContent = generateReadme(responses);

        // TODO: Create a function to write README file
        fs.writeFile('README.md', readmePageContent, (err) =>
        err ? console.error(err) : console.log('Success, you have written a professional Readme.md')
        )
    });
    
