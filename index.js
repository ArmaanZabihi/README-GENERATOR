const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown=require("./utils/generateMarkdown");
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app

function init() {


inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your README?',

    }
     
  ])
  .then((data) => {
const markdown=generateMarkdown(data)
console.log (markdown)
    fs.writeFile("README.md", markdown,  (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

}

// Function call to initialize app
init();
