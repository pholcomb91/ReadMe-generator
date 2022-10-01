// Dependencies
const fs = require('fs');
const inquirer = require('inquirer');

const generateReadme= ({ name, motivation, why, problem, learn, standOut, installation, assist, assistName, license, github, email }) => 
//Build out
`# ${name}

#### Table of Contents
[Description](#description)  
[Installation Instructions](#installation-instructions)  
[Experience](#experience)  
[Questions](#questions)  

## Description

My motivation for building this is ${motivation}

I built this ${why}

This solves ${problem}

This stands out because of ${standOut}

## Installation Instructions

In order to run this application ${installation}

## Experience

In building this application I learned ${learn}

${assist===true ? "I received assistance from:" : "No assistance was needed."} github.com/${assistName}

## Lincense

${license}

## Questions

Find my work on github.com/${github}
Or reach me at: ${email}
`
;
// Necessary questions. 
const questions = [
        "What is your motivation?"
    , 
        "For what purpose did you build this?"
    ,
        "What problem does it solve?"
    ,
        "What must be done in order to run application?"
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
            name: 'installation'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'learn'
        },
        {
            type: 'confirm',
            message: 'Did you receive assistance on this project?',
            name: 'assist'
        },
        {
            type: 'input',
            message: 'If you did, what is their Github username? If not, press "\x1b[35menter\x1b[0m".',
            name: 'assistName'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'standOut'
        },
        {
            type: 'list',
            message: 'What license would you like to use?',
            name: 'license',
            choices: ['[MIT](https://opensource.org/licenses/MIT0)', '[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)', '[ISC](https://www.isc.org/licenses/)']
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        
    ])
    //Promise
    .then((responses) => {
        const readmePageContent = generateReadme(responses);

        // Now write the file. 
        fs.writeFile('README-1.md', readmePageContent, (err) =>
        err ? console.error(err) : console.log('Success, you have written a professional Readme.md')
        )
    
    });

    
    
