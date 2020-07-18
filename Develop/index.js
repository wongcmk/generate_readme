const fs = require("fs");
const inquirer = require("inquirer");
const generator = require("./utils/generateMarkdown");
const util = require("util");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the project name?",
        name: "title"
    },
    {
        type: "input",
        message: "A quick description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "Any special Installation instructions?",
        name: "installInstructions"
    },
    {
        type: "input",
        message: "How do you use the project?",
        name: "usageDetails"
    },
    {
        type: "list",
        message: "What kind of license?",
        name: "license",
        choices: [
            "MIT",
            "ISC",
            "GPL"
        ]
    },
    {
        type: "input",
        message: "How can people contribute?",
        name: "contribute"
    },
    {
        type: "input",
        message: "Any Tests to include?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "userName"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    let parsedData = generator(data);
    return fs.writeFile(fileName, parsedData, "utf8", error => {
        if(error){
            throw error
        }
        else console.log("READMEtrial.md created")
    });
}

// function to initialize program
    function init() {
        inquirer
            .prompt(questions)
            .then(answers => writeToFile("READMEtrial.md", answers));
}

// function call to initialize program
init();
