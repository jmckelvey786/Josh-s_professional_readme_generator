// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Provide a short description of your project?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Please provide any installation instructions:',
    name: 'installation',
  },
  {
      type: 'input',
      message: 'Please provide any usage instructions:',
      name: 'usage',
  },
  {
      type: 'input',
      message: 'Please list any collaborators or third party assests used:',
      name: 'credit',
  },
  {
      type: 'input',
      message: 'Please list any badges:',
      name: 'badges',
  },
  {
      type: 'input',
      message: 'Please list any tests:',
      name: 'tests',
  },
  {
    type: "list",
    message: "What license should your project have?",
    name: "license",
    choices: [
        "MIT",
        "Apache",
        "GNU",
        "Perl",
        "other",
    ]
  },
  {
    type: 'input',
    message: 'Github username',
    name: 'username',
  },
  {
      type: 'input',
      message: 'What is your email',
      name: 'email',
  },   
];

// function promptUser() {
//     const userAnswers = inquirer.prompt(questions);
//     return userAnswers;
// }


// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Success!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        const readMeContent = markdown(data);
        // console.log(readMeContent);
        writeToFile('readMe.md', readMeContent)
        
    });
    
}

// Function call to initialize app
init();
