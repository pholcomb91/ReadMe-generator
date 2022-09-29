// Dependencies
const fs = require('fs');
const inquirer = require('inquirer');

const generateReadme= ({ name, motivation, why, problem, learn, standOut, help, github, deployed }) => 
//Build out
`## ${name}

My motivation for building this is ${motivation}

I built this ${why}

This solves ${problem}

This stands out because of ${standOut}

## Experience

In building this application I learned ${learn}

---Don't Forget to mention whether you got help on this or not and add a screenshot---

## Requisite Links

${github}
${deployed}
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
        },
        {
            type: 'input',
            message: 'What is the Github Repository link?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is the deployed application link?',
            name: 'deployed',
        },
        
    ])
    //Promise
    .then((responses) => {
        const readmePageContent = generateReadme(responses);

        // Now write the file. 
        fs.writeFile('README.md', readmePageContent, (err) =>
        err ? console.error(err) : console.log('Success, you have written a professional Readme.md')
        )
    
    });

    
    
