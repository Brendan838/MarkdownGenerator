// Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
// Array of questions for user input
const questions = [
	{
	type: "input",
	name: "userName",
	message: "What is your GitHub username?"
	},
	{
	type: "input",
	name: "email",
	message: "What is your email address?"
	},
	{
	type: "input",
	name: "projectName",
	message: "What is your project's name?"
	},
	{
	type: "input",
	name: "description",
	message: "Please write a short description of your project."
	},
	{
	type: "list",
	name: "license",
	message: "What kind of license should your project have?",
	choices: ["MIT", "ISC", "Apache License 2.0", "GNU GPLv3"],
	default: "None"
	},
	{
	type: "input",
	name: "dependencies",
	message: "What command should be run to install dependencies?",
	default: "npm i"
	},
	{
	type: "input",
	name: "tests",
	message: "What command should be run to run tests?",
	default: "npm test"
	}, 
	{
	type: "input",
	name: "repoInfo",
	message: "What does the user need to know about using the repo?"
	},	
	{
	type: "input",
	name: "repoCont",
	message: "What does the user need to know about contributing to the repo?"
	},	

];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
fs.writeFile(filename, data, function(err){
if(err){
console.log(err)
}
})
}

//Creating function for generating license

//main inquirer function (prompts)
inquirer.prompt(questions).then((responseObj) => {
	
	var userName = responseObj.userName
        var email = responseObj.email
	var projectName = responseObj.projectName
	var description = responseObj.description
	var license = responseObj.license
	var dependencies = responseObj.dependencies
	var tests = responseObj.tests
	var repoInfo = responseObj.repoInfo
	var repoCont = responseObj.repoCont
	var badge;
	function licenseBadge(license){
		switch(license){
		case "MIT":
		badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
		break;
		case "ISC":
		badge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
		break;
		case "Apache License 2.0":
		badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
		break;
		case "GNU GPLv3":
		badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
		break;
		}
	}
	licenseBadge(license);

	var filebody = 
`# ${projectName}\n

${badge}\n

## Description \n
${description}\n

## Table of Contents\n

-[Installation](#installation)\n
-[Usage](#usage)\n
-[License](#license)\n
-[Contributing](#contributing)\n
-[Tests](#tests)\n
-[Questions](#questions)\n

## Installation
To run necessary dependencies, run the following command:\n
${dependencies}\n

## Usage\n
${repoInfo}\n

## License\n
This project is licensed under the **${license}** license.\n

## Contributing\n
${repoCont}\n

## Tests\n
To run tests, run the following command: **${tests}**\n


## Questions\n
If you have any questions about the repo, or would like to open an issue, please contact me at ${email}.\n
Click here to view more of my work on github: [${userName}](https://github.com/${userName}). Thank you!`

writeToFile(`${projectName}.md`, filebody);
	
})
