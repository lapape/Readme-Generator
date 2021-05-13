// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project's title?",
      name: "title",
    },
    {
      type: "input",
      message: "Provide a description of your project.",
      name: "description",
    },
    {
      type: "input",
      message: "What are the intallation instructions?",
      name: "installation",
    },
    {
      type: "input",
      message: "What are the usage instructions?",
      name: "usage",
    },
    {
      type: "input",
      message: "What licenses?",
      name: "license",
    },
    {
      type: "input",
      message: "Who are the contributers?",
      name: "contributers",
    },
    {
      type: "input",
      message: "Any tests for your project?",
      name: "test",
    },
    {
      type: "input",
      message: "What is your github?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
  ])
  .then((response) =>
    fs.writeFile("Readme.md", getReadme(response), (err) =>
      err ? console.log(err) : console.log("success")
    )
  );

const getReadme = (response) => {
  let createReadme = `# <${response.title}>

  ## Description
  
  ${response.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${response.installation}
  
  ## Usage
  
  ${response.usage}
  
  ## Liscense
  
  ${response.license}
  
  ## Contributing
  
  ${response.contributers}
  
  ## Tests
  
  ${response.test}
  
  ## Questions
  
  Any Questions? Contact me! Github: ${response.github} Email: ${response.email}`;
  return createReadme;
};

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
