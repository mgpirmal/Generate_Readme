const inquirer = require("inquirer");
const fs = require("fs");


inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Install instructions?',
      },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What do you want in your description?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of the project?',
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'How do you test this project?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your Email?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is you Github address?',
      },
    {
      type: 'list',
      message: 'What license do you want to use?',
      name: 'license',
      choices: ['MIT', 'Mozilla', 'GNU', 'Apache'],
    },

  ])


 
  .then((data) => {

  if (data.license === "MIT"){
    data.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }if (data.license === "Mozilla"){
    data.license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }if (data.license === "GNU"){
    data.license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }if (data.license === "Apache"){
    data.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }

    const read = `# ${data.title}
  # Author: ${data.name}


  ## Table of Contents

  [Description](#Description)

  [Installation](#Installation)

  [Usage](#Usage)

  [Contributors](#Contributors)

  [Tests](#Tests)

  [Questions](#Questions)

  [License](#License)

  ## Description
  
  ${data.description}
    
  ## Installation
    
  ${data.install}
    
    
  ## Usage
    
  ${data.usage}
  
    
  ## Contributors
  Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
    
  Please make sure to update tests as appropriate.

  ${data.contributors}

  ## Tests

  ${data.test}

  ## Questions

  Please reach out if you have questions!

  Email: ${data.email}
  Github: ${data.github}
    
  ## License
  ${data.license}`
    


    fs.writeFile("README.md",read, (err) =>
      err ? console.log(err) : console.log('Success!')
    );

  });